<template>
	<div>
		<section id="News" class="section">
			<transition name="slide" mode="out-in">
				<router-view />
			</transition>
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import BackToHome from '../components/BackToHome.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Page_News',
	components: {
		BackToHome,
		Footer,
	},
	data () {
		return {
			tab: null,
			items: [
			'2021', '2020',
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
		this.scrollanime_js()
	},
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: opacity 0.5s,;
}
.slide-enter,
.slide-leave-to {
	opacity: 0;
}
</style>