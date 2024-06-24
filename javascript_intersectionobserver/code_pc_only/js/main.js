let scrollObserver = null;

const toggleHeaderOnScroll = () => {
    const headerElement = document.querySelector(".js-header");
    const scrollTargetElement = document.querySelector(".js-scrollTarget");
    const headerFixedClass = "is-fixed";

    // IntersectionObserverのOption
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    // slideDown Keyframe
    const slideDownKeyframes = {
        transform: "translateY(60px)",
    };

    // slideUp Keyframe
    const slideUpKeyframes = {
        transform: "translateY(0)",
    };

    // アニメーションのOption
    const animationOptions = {
        duration: 150,
        easing: "ease-out",
        fill: "forwards",
    };

    // headerを表示
    const showHeader = () => {
        headerElement.classList.add(headerFixedClass);
        headerElement.animate(slideDownKeyframes, animationOptions);
    };

    // headerを隠す
    const hideHeader = () => {
        const closingAnimation = headerElement.animate(slideUpKeyframes, animationOptions);

        // アニメーション終了後
        closingAnimation.onfinish = () => {
            headerElement.classList.remove(headerFixedClass);
        };
    };

    const headerVisibilityHandler = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                hideHeader();
            } else {
                showHeader();
            }
        });
    };

    // IntersectionObserverを設定または解除するロジック
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (scrollObserver) {
            scrollObserver.disconnect(); // 768px以下でObserverを解除
            scrollObserver = null;
            headerElement.animate(slideUpKeyframes, animationOptions);
            headerElement.classList.remove(headerFixedClass);
        }
    } else {
        if (!scrollObserver) {
            scrollObserver = new IntersectionObserver(headerVisibilityHandler, observerOptions);
            scrollObserver.observe(scrollTargetElement); // 768px以上でObserverを設定
        }
    }
};

// 初期実行
toggleHeaderOnScroll();

// リサイズ時に実行
window.addEventListener("resize", toggleHeaderOnScroll);
