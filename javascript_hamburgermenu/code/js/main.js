const menu = () => {
    const menu = document.querySelector(".js-menu");
    const button = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    // menuとbuttonがページ内にない場合returnする
    if (!menu || !button) return;

    // ボタンクリックでopen
    button.addEventListener("click", () => {
        menu.showModal();
    });

    // クローズボタンクリックでclose
    closeButton.addEventListener("click", () => {
        menu.close();
    });
};

menu();
