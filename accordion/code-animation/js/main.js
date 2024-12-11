const accordion = () => {
    const details = document.querySelectorAll(".js-details");

    // アニメーション実行中に付与するカスタムデータ属性
    const isRunning = "running";

    // open時に付与するクラス
    const isOpen = "is-open";

    // Opening Keyframe
    const openingKeyframes = (content) => {
        return {
            height: [0, content.offsetHeight + "px"],
            opacity: [0, 1],
        };
    };

    // Closing Keyframe
    const closingKeyframes = (content) => {
        return {
            height: [content.offsetHeight + "px", 0],
            opacity: [1, 0],
        };
    };

    // 共通Option
    const options = {
        duration: 300,
        easing: "ease-out",
    };

    // detailsがページ内にない場合returnする
    if (!details) return;

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

                // アニメーションを実行
                const closingAnim = content.animate(closingKeyframes(content), options);
                // アニメーション実行中用の値を付与
                detail.dataset.animStatus = isRunning;

                // アニメーション完了後
                closingAnim.onfinish = () => {
                    // open属性を取り除く
                    detail.removeAttribute("open");
                    // アニメーション実行中用の値を取り除く
                    detail.dataset.animStatus = "";
                };
            } else {
                // アコーディオンを開くときの処理
                // open属性を付与
                detail.setAttribute("open", "true");

                // アイコン操作用クラスを切り替える(クラスを付与)
                detail.classList.add(isOpen);

                // アニメーションを実行
                const openingAnim = content.animate(openingKeyframes(content), options);
                // アニメーション実行中用の値を入れる
                detail.dataset.animStatus = isRunning;

                // アニメーション完了後にアニメーション実行中用の値を取り除く
                openingAnim.onfinish = () => {
                    detail.dataset.animStatus = "";
                };
            }
        });
    });
};

accordion();
