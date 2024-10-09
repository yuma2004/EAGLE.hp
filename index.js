document.addEventListener("DOMContentLoaded", function() {
    // スプラッシュ画面の処理
    const splash = document.getElementById('splash-screen');
    if (splash) {
        document.body.classList.add('no-scroll');

        // 3秒後にスプラッシュ画面をフェードアウトさせる
        setTimeout(() => {
            splash.style.transition = 'opacity 1s ease';
            splash.style.opacity = '0';
            // 1秒後にスプラッシュ画面を非表示にする
            setTimeout(() => {
                splash.style.display = 'none';
                document.body.classList.remove('no-scroll'); // スクロールを許可
            }, 1000);
        }, 3000);
    }

    // アニメーションを適用する対象の要素を取得
    const animatedElements = document.querySelectorAll(".animate-on-scroll, .slide-in-left, .slide-in-right, .main-visual, .zoom-in, .zoom-out, .slide-up-fade-in, .reservation-button, .eagle-kanazawa-message, .fade-in-left, .fade-in-right, .fade-in-up");

    // IntersectionObserver のオプション設定
    const observerOptions = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px',
        threshold: 0.1 // 要素の10%が見えたら発火
    };

    // IntersectionObserver のコールバック関数
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // 一度発火したら監視を停止
            }
        });
    };

    // IntersectionObserver のインスタンスを作成
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 各要素に対して IntersectionObserver を適用
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 追加アニメーション用のイベントリスナー（必要に応じて追加）
    // 例: スクロール時に特定の要素を回転させる
    const rotateElements = document.querySelectorAll('.rotate-on-scroll');
    rotateElements.forEach(element => {
        observer.observe(element);
    });
});
