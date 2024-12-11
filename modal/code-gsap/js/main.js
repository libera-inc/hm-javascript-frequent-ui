const modal = () => {
    const modal = document.querySelector(".js-modal");
    const modalBg = document.querySelector(".js-modal-bg");
    const modalContents = document.querySelector(".js-contents");
    const button = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    // modalとbuttonがページ内にない場合returnする
    if (!modal || !button) return;

    // モーダルopenする関数
    const openModal = () => {
        modal.showModal();

        gsap.to(modalContents, {
            opacity: 1,
            scale: 1,
            ease: "power2",
            duration: 0.2,
        });

        gsap.to(modalBg, {
            autoAlpha: 1,
            ease: "power2",
            duration: 0.15,
        });
    };

    // モーダルcloseする関数
    const closeModal = () => {
        gsap.to(modalContents, {
            opacity: 0,
            scale: 0.95,
            ease: "power2",
            duration: 0.2,
            onComplete: () => {
                modal.close();
            },
        });

        gsap.to(modalBg, {
            autoAlpha: 0,
            ease: "power2",
            duration: 0.15,
        });
    };

    // ボタンクリックでモーダルopen
    button.addEventListener("click", () => {
        openModal();
    });

    // クローズボタンクリック or 背景クリックでモーダルclose
    [closeButton, modal].forEach((element) => {
        element.addEventListener("click", (event) => {
            // クローズボタンクリック or 背景クリック
            if (event.target.closest(".js-contents") === null || element === closeButton) {
                closeModal();
            }
        });
    });

    // Escapeキーを押すと非表示
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            event.preventDefault();
            closeModal();
        }
    });
};

modal();
