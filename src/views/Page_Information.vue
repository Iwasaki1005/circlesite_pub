<template>
	<div>
		<section id="About" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Information</span></h2>
			<VerticalLine />
			<v-card theme="disable" class="sa sa--up">
				<v-tabs v-model="tab" align-with-title grow>
					<v-tabs-slider color="yellow"></v-tabs-slider>
					<v-tab v-for="item in items" :key="item">
						{{ item }}
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-tab-item>
						<article class="article-container">
							<h3 class="information-index">プライバシーポリシー</h3>
							<p>
								当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。<br>
								この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a target="_blank" href="https://marketingplatform.google.com/about/analytics/terms/jp/">Googleアナリティクスサービス利用規約のページ</a>や<a target="_blank" href="https://policies.google.com/technologies/ads?hl=ja">Googleポリシーと規約ページ</a>をご覧ください。
							</p>
						</article>
					</v-tab-item>
					<v-tab-item>
						<article class="article-container">
							<h3 class="information-index">当サイトへのリンクについて</h3>
							<p>
								当サイトは基本的にリンクフリーです。<br>
								リンクをしていただく際のURLはトップページへお願いします。<br><br>
								サイトへリンクされる際にバナーをご使用される場合につきましてはこちらで用意したバナーをお使いください。<br>
							</p>
							<p class="information-index m-top-2rem">バナー</p>
							<p>
								バナーの画像を直リンクでご利用される場合はバナー下のコードをコピーして貼り付けることでご利用いただけます
							</p>
							<p class="fs-0_8rem co-grey">
								※直リンクでご利用される場合、URLの変更やサイトのメンテナンス等で利用できなくなる場合がありますのでご注意ください。
							</p>
							<img class="m-top-1rem m-bottom-05rem" src="../assets/banner/neverlandf_banner1.png">
							<textarea readonly onclick="this.select();" class="width-100p">
								"<a target="_blank" href="https://circus-co.jp/product/dc4/"><img alt="この恋は世界を変える CIRCUS 20th Project「D.C.4 ～ダ・カーポ4～」好評発売中!" title="この恋は世界を変える CIRCUS 20th Project「D.C.4 ～ダ・カーポ4～」好評発売中!" src="https://circus-co.jp/product/dc4/rc/special/dc4_banner_650x120.jpg"></a>"
							</textarea>
						</article>
					</v-tab-item>
					<v-tab-item>
						<article class="article-container">
							<h3 class="information-index">閲覧推奨ブラウザ</h3>
							<p class="m-bottom-1rem_dis m-bottom-05rem_mob">当サイトを閲覧する際の推奨ブラウザは下記のものになります。</p>
							<p class="m-bottom-1rem_dis m-bottom-05rem_mob">
								・Google Chrome
							</p>
							<p class="fs-0_8rem co-grey">
								Google Chromeは、Google Inc.の米国およびその他の国における商標または登録商標です。
							</p>
						</article>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Page_Information',
	components: {
		VerticalLine,
		BackToHome,
		Footer,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data () {
		return {
			tab: null,
			items: [
			'プライバシーポリシー', 'サイトリンク', '閲覧推奨ブラウザ',
		],
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Information',
			disabled: false,
			href: '',
		},
		],
		}
	},
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) {
	.information-index {
		background-color: #e7b06c;
		border-left: #ffdbae solid 0.4vw;
		padding: 0.2vw 0 0.2vw 1vw;
		color: #fafafa;
		margin-bottom: 1rem;
		font-size: 1rem;
		font-weight: normal;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.information-index {
		background-color: #e7b06c;
		border-left: #ffdbae solid 0.4vw;
		padding: 0.2vw 0 0.2vw 1vw;
		color: #fafafa;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: normal;
	}
}
</style>

<style scoped>
textarea {
	border: black solid 1px;
	border-radius: initial;
	font-size: initial;
	font-family: initial;
	color: initial;
	background: initial;
}
</style>