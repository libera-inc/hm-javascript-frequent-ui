const menu = () => {
    const menu = document.querySelector(".js-menu");
    const button = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    // コンテンツ Opening Keyframe
    const contentsOpeningKeyframes = {
        opacity: [0, 1],
    };

    // コンテンツ Opening Option
    const contentsOpeningOptions = {
        duration: 200,
        easing: "ease-out",
    };

    // コンテンツ Closing Keyframe
    const contentsClosingKeyframes = {
        opacity: [1, 0],
    };

    // コンテンツ Closing Option
    const contentsClosingOptions = {
        duration: 200,
        easing: "ease-out",
    };

    // menuとbuttonがページ内にない場合returnする
    if (!menu || !button) return;

    // メニューopenする関数
    const openMenu = () => {
        menu.showModal();
        menu.animate(contentsOpeningKeyframes, contentsOpeningOptions);
    };

    // メニューcloseする関数
    const closeMenu = () => {
        const closingAnim = menu.animate(contentsClosingKeyframes, contentsClosingOptions);

        // アニメーションの完了後
        closingAnim.onfinish = () => {
            menu.close();
        };
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
