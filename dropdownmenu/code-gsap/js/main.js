const dropDownmenu = () => {
    const button = document.querySelector(".js-button");
    const menu = document.querySelector(".js-menu");

    // buttonとmenuがページ内にない場合returnする
    if (!button || !menu) return;

    // menuのopen状態
    let isOpen = false;

    // menuをopenする関数
    const openMenu = () => {
        gsap.to(menu, {
            autoAlpha: 1,
            scale: 1,
            ease: "power2",
            duration: 0.15,
        });
    };

    // menuをcloseする関数
    const closeMenu = () => {
        gsap.to(menu, {
            autoAlpha: 0,
            scale: 0.95,
            ease: "power2",
            duration: 0.15,
        });
    };

    // buttonをクリックで表示/非表示
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

        isOpen = !isOpen;
    });

    // menu外をクリックで非表示
    document.addEventListener("click", () => {
        closeMenu();
        isOpen = false;
    });

    // Escapeキーを押すと非表示
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            isOpen = false;
        }
    });
};

dropDownmenu();
