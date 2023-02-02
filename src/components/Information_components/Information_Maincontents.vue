<template>
	<div>
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>News</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<v-card theme="disable" class="bg-none sa sa--up">
			<v-tabs v-model="tab" align-with-title grow>
				<v-tabs-slider color="yellow"></v-tabs-slider>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<router-link to="/news/20210202dmy">
						<div class="nw-column m-bottom-2rem">
							<div class="f-ali-items-center">
								<p class="fs-0_8rem m-right-05rem co-black">2022.※未定</p>
								<div class="tag-info co-white font-E1">info</div>
							</div>
							<h3 class="co-black fs-h3nomal">新サークル「ねばーランド.F」活動開始しました。</h3>
						</div>
					</router-link>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'Information_Maincontents',
	data () {
		return {
			tab: null,
			items: [
			'2022',
		],
		breadcrumbs: [
			{
				text: 'Home',
				disabled: false,
				to: '/',
			},
			{
				text: 'News',
				disabled: false,
				href: '',
			},
			],
		}
	},
	mounted: function() {
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

		var vh30 = (screen.height * 0.4)

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
}
</script>

<style>
.nw-column {
	padding: 1rem 2rem;
	border-radius: 0.2vw;
	/*box-shadow: 0.06vw 0.06vw 0.12vw 0.12vw #e7b06c;*/
	margin: 2rem 0.5rem;
}

.bg-none {
	background-color: transparent;
}
</style>