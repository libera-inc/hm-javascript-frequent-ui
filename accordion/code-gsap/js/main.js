const accordion = () => {
    const details = document.querySelectorAll(".js-details");

    // detailsがページ内にない場合returnする
    if (!details.length) return;

    // アニメーション実行中に付与するカスタムデータ属性
    const isRunning = "running";

    // open時に付与するクラス
    const isOpen = "is-open";

    details.forEach((detail) => {
        const summary = detail.querySelector(".js-summary");
        const content = detail.querySelector(".js-contents");

        summary.addEventListener("click", (event) => {
            // デフォルトの挙動を無効化
            event.preventDefault();

            // summaryとcontentがページ内にない場合returnする
            if (!summary || !content) return;

            // アニメーション中にクリックイベントを受け付けない(連打防止用)
            if (detail.dataset.animStatus === isRunning) return;

            // detailsのopen属性を判定
            if (detail.open) {
                // アコーディオンを閉じるときの処理
                // アイコン操作用クラスを切り替える(クラスを取り除く)
                detail.classList.remove(isOpen);

                // アニメーション完了後
                const onfinish = () => {
                    // open属性を取り除く
                    detail.removeAttribute("open");
                    // アニメーション実行中用の値を取り除く
                    detail.dataset.animStatus = "";
                    // styleを取り除く
                    content.style = "";
                };

                // アニメーションを実行
                gsap.to(content, {
                    height: 0,
                    opacity: 0,
                    ease: "power2",
                    duration: 0.3,
                    onComplete: onfinish,
                });

                // アニメーション実行中用の値を付与
                detail.dataset.animStatus = isRunning;
            } else {
                // アコーディオンを開くときの処理
                // open属性を付与
                detail.setAttribute("open", "true");

                // アイコン操作用クラスを切り替える(クラスを付与)
                detail.classList.add(isOpen);

                // 一時的に要素を表示し高さを取得する
                content.style.visibility = "hidden";
                content.style.height = "auto";
                let contentHeight = content.offsetHeight;
                content.style.height = "0";
                content.style.visibility = "";

                // アニメーション完了後にアニメーション実行中用の値を取り除く
                const onfinish = () => {
                    detail.dataset.animStatus = "";
                };

                // アニメーションを実行
                gsap.to(content, {
                    height: contentHeight + "px",
                    opacity: 1,
                    ease: "power2",
                    duration: 0.3,
                    onComplete: onfinish,
                });

                // アニメーション実行中用の値を入れる
                detail.dataset.animStatus = isRunning;
            }
        });
    });
};

accordion();
