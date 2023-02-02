export default {
	methods: {
		indexanime: function() {
		/*--------------------------------------------------------------------------
		 *
		 * indexanime.js
		 *
		 *
		--------------------------------------------------------------------------*/
		var indexanimeelm = document.querySelectorAll('.index-anime');

		var indexanimationfunc = function () {
			var triggerMargin = 300;
			for (var i = 0; i < indexanimeelm.length; i++) {
				if (window.innerHeight > indexanimeelm[i].getBoundingClientRect().top + triggerMargin) {
					indexanimeelm[i].classList.add('-visible');
				}
			}
		}
		window.addEventListener('load', indexanimationfunc);
		window.addEventListener('scroll', indexanimationfunc);
		},
		scrollanime_js: function() {
		/*--------------------------------------------------------------------------
		 *
		 * scrollanime_js.js (300pxの部分を30vhに変更)
		 *
		 *
		--------------------------------------------------------------------------*/
		/* ************************************************************************************* */
		/* スクロールして、画面の下と要素の位置の差が300pxになったら、要素にshowクラスを追加する */
		/* ************************************************************************************* */

		// Webページ内の class="sa" の要素を複数検出
		var scrollAnimationElm = document.querySelectorAll('.sa');

		var vh30 = (screen.height * 0.3)

		// 要素を表示すべきかどうかを判定する関数（メソッド）を定義
		var scrollAnimationFunc = function () {
			// 判定の基準になる縦幅を300pxとして定義
			var triggerMargin = vh30;
			// 検出した class="sa" の要素の数だけループ
			// scrollAnimationElm.length は検出した要素の総数を指す
			for (var i = 0; i < scrollAnimationElm.length; i++) {
				// 「ウィンドウの内部の高さが (対象の要素の高さ＋300px) より大きい」となった場合
				if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
					// 対象の要素のclassに「show」を追加する
					scrollAnimationElm[i].classList.add('show');
				}
			}
			// メソッド終了
		}

		// ウィンドウに対して「読み込み」または「スクロール」が行われた際、定義していたメソッドを実行するように設定
		window.addEventListener('load', scrollAnimationFunc);
		window.addEventListener('scroll', scrollAnimationFunc);

		// querySelectorAllについて
		// https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll
		// getBoundingClientRectについて
		// https://developer.mozilla.org/ja/docs/Web/API/Element/getBoundingClientRect
		// window.innerHeightについて
		// https://developer.mozilla.org/ja/docs/Web/API/Window/innerHeight
		},
		tweet: function() {
		/*--------------------------------------------------------------------------
		 *
		 * tweet
		 *
		 *
		--------------------------------------------------------------------------*/
		let tweetScript = document.createElement('script')
		tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		document.head.appendChild(tweetScript)
		},
	}
}
