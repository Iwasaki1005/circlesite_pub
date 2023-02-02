<template>
	<div>
		<section id="About" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>About</span></h2>
			<VerticalLine />
			<div class="sa sa--up">
				<p class="text-center">
					当サイトは個人サークル<br class="mob-only">「ねばーランド.F」の公式ページです。<br><br>
					主にイラストやゲームの創作を<br class="mob-only">中心に活動をしています。<br><br>
					管理人への連絡、バグの報告などは<br class="mob-only"><router-link to="/contact">こちら</router-link>からお願いします。<br><br>
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
	name: 'Page_About',
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
			text: 'About',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>