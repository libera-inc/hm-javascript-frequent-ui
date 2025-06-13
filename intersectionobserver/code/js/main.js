const toggleHeaderOnScroll = () => {
    const headerElement = document.querySelector(".js-header");
    const scrollTargetElement = document.querySelector(".js-scrollTarget");
    const headerFixedClass = "is-fixed";

    if (!headerElement || !scrollTargetElement) return;

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

    const scrollObserver = new IntersectionObserver(headerVisibilityHandler, observerOptions);
    scrollObserver.observe(scrollTargetElement);
};

toggleHeaderOnScroll();
