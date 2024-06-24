const modal = () => {
    const modal = document.querySelector(".js-modal");
    const button = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    // modalとbuttonがページ内にない場合returnする
    if (!modal || !button) return;

    // ボタンクリックでモーダルopen
    button.addEventListener("click", () => {
        modal.showModal();
    });

    // クローズボタンクリックでモーダルclose
    closeButton.addEventListener("click", () => {
        modal.close();
    });

    // 背景クリックでモーダルclose
    modal.addEventListener("click", (event) => {
        if (event.target.closest(".js-contents") === null) {
            modal.close();
        }
    });
};

modal();
