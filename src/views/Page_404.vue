<template>
	<div>
		<section id="" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>404 NotFound</span></h2>
			<VerticalLine />
			<div class="sa sa--up">
				<p class="text-center">
					申し訳ありません。お探しのページは見つかりませんでした。<br><br>
					お探しのページはアドレスが変更されたか、削除された可能性がございます。<br><br>
					恐れ入りますが、お探しのページのURLが正しいかどうかをご確認ください。
				</p>
			</div>
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
	name: 'Page_404',
	components: {
		BackToHome,
		VerticalLine,
		Footer,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data: () => ({
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: '404 NotFound',
			disabled: true,
			href: '',
		},
		],
	}),
}
</script>