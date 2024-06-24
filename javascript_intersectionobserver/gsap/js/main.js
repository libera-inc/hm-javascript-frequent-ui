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

    // GSAPアニメーションのOption
    const slideDownOptions = {
        y: 60,
        duration: 0.15,
        ease: "power2.out",
    };

    const slideUpOptions = {
        y: 0,
        duration: 0.15,
        ease: "power2.out",
        onComplete: () => headerElement.classList.remove(headerFixedClass),
    };

    // headerを表示
    const showHeader = () => {
        headerElement.classList.add(headerFixedClass);
        gsap.to(headerElement, slideDownOptions);
    };

    // headerを隠す
    const hideHeader = () => {
        gsap.to(headerElement, slideUpOptions);
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
