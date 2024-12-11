const menu = () => {
    const menu = document.querySelector(".js-menu");
    const button = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    // menuとbuttonがページ内にない場合returnする
    if (!menu || !button) return;

    // モーダルopenする関数
    const openMenu = () => {
        menu.showModal();
        gsap.to(menu, {
            autoAlpha: 1,
            ease: "power2",
            duration: 0.2,
        });
    };

    // モーダルcloseする関数
    const closeMenu = () => {
        gsap.to(menu, {
            autoAlpha: 0,
            ease: "power2",
            duration: 0.2,
            onComplete: menu.close(),
        });
    };

    // ボタンクリックでopen
    button.addEventListener("click", () => {
        openMenu();
    });

    // クローズボタンクリックでclose
    closeButton.addEventListener("click", () => {
        closeMenu();
    });

    // Escapeキーを押すと非表示
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
        }
    });
};

menu();
