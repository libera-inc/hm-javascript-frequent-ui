const dropDownmenu = () => {
    const button = document.querySelector(".js-button");
    const menu = document.querySelector(".js-menu");
    const isOpen = "is-open";

    // buttonとmenuがページ内にない場合returnする
    if (!button || !menu) return;

    // buttonをクリックで表示/非表示
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.classList.toggle(isOpen);
    });

    // menu外をクリックで非表示
    document.addEventListener("click", (event) => {
        menu.classList.remove(isOpen);

        // menu内のリンクやボタンをクリックした時にmenuを非表示にしたくない場合は下記
        // if (!event.target.closest(".js-menu")) {
        //     menu.classList.remove(isOpen);
        // }
    });

    // Escapeキーを押すと非表示
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            menu.classList.remove(isOpen);
        }
    });
};

dropDownmenu();
