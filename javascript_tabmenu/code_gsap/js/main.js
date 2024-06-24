const tabMenu = () => {
    const tabs = document.querySelectorAll("[data-button]");
    const contents = document.querySelectorAll("[data-content]");

    const tabClick = (event) => {
        //クリックされたdata-buttonの値
        const targetValue = event.target.dataset.button;
        //クリックされたbuttonに対応するcontents
        const targetContents = document.querySelector('[data-content="' + targetValue + '"]');

        //全てのis-activeをremove
        [tabs, contents].forEach((array) => array.forEach((element) => element.classList.remove("is-active")));

        //クリックしたタブにis-activeをadd
        tabs[targetValue].classList.add("is-active");

        //クリックされたbuttonに対応するcontentsにis-activeをadd
        targetContents.classList.add("is-active");

        //contentsのアニメーション
        gsap.fromTo(
            targetContents,
            {
                autoAlpha: 0,
                y: 10,
            },
            {
                autoAlpha: 1,
                y: 0,
                ease: "power2",
                duration: 0.3,
            },
        );
    };

    //tabsクリックで発火
    tabs.forEach((tab) => {
        tab.addEventListener("click", (event) => tabClick(event));
    });
};

tabMenu();
