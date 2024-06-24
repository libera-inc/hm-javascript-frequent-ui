const dropDownmenu = () => {
    const button = document.querySelector(".js-button");
    const menu = document.querySelector(".js-menu");
    const isOpen = "is-open";

    // Opening Keyframe
    const openingKeyframes = {
        opacity: [0, 1],
        transform: ["scale(0.95)", "scale(1)"],
    };

    // Closeing Keyframe
    const closeingKeyframes = {
        opacity: [1, 0],
        transform: ["scale(1)", "scale(0.95)"],
    };

    // 共通Option
    const options = {
        duration: 150,
        easing: "ease-out",
        fill: "forwards",
    };

    // buttonとmenuがページ内にない場合returnする
    if (!button || !menu) return;

    // menuをopenする関数
    const openMenu = () => {
        menu.classList.add(isOpen);
        menu.animate(openingKeyframes, options);
    };

    // menuをcloseする関数
    const closeMenu = () => {
        const closingAnim = menu.animate(closeingKeyframes, options);

        // アニメーション完了後
        closingAnim.onfinish = () => {
            menu.classList.remove(isOpen);
        };
    };

    // buttonをクリックで表示/非表示
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (menu.classList.contains(isOpen)) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // menu外をクリックで非表示
    document.addEventListener("click", () => {
        closeMenu();
    });

    // Escapeキーを押すと非表示
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
};

dropDownmenu();
