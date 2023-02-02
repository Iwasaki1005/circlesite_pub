<template>
	<div>
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<article class="article-container">
			<div class="f-ali-items-center">
				<p class="m-right-05rem_dis">2021.02.02</p>
				<div class="tag-dmy">dmy</div>
				<div class="tag-info">info</div>
			</div>
			<h3 class="m-bottom-2rem">2021年(仮)のテストニュースです。</h3>
			<p>
				Facebook、TwitterなどのSNSに記事をシェアしてもらうのに必要なのが「シェアボタン」です。サービスごとにURLやパラメータが異なるため、オリジナルでシェアボタンを作成する場合はそれぞれ設定しなければなりません。
			</p>
			<NewsShare />
		</article>
		<div class="f-jus-space-around m-top-2rem">
			<div class="bt-typeA bt-typeA-border d-block m-rl-auto_mob">
				<span class="bt-typeA-border-inner font-E1">← Next</span>
			</div>
			<div class="bt-typeA bt-typeA-border d-block m-rl-auto_mob">
				<span class="bt-typeA-border-inner font-E1">Prev →</span>
			</div>
		</div>
		<div class="f-ali-jus-center m-top-1rem">
			<router-link id="homeopen" to="/news">
				<div class="bt-typeA bt-typeA-border m-rl-auto">
					<span class="bt-typeA-border-inner font-E1">Back To List ></span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import NewsShare from './News_Share.vue'

export default {
	name: 'News_20210202dmy',
	components: {
		NewsShare,
	},
	data () {
		return {
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
			exact: true,
		},
		{
			text: 'News',
			disabled: false,
			to: '/news',
			exact: true,
		},
		{
			text: '2021年(仮)のテストニュースです。',
			disabled: true,
			to: '',
		},
		],
		}
	},
	mounted: function() {
		this.scrollanime_js()
	},
}
</script>