<template>
	<div>
		<MainTop />
		<MainNews />
		<MainGame />
		<MainIllust />
		<MainProfile />
		<Footer />
	</div>
</template>

<script>
import MainIllust from '../components/Main_components/Main_Illust.vue'
import MainGame from '../components/Main_components/Main_Game.vue'
import MainNews from '../components/Main_components/Main_News.vue'
import MainTop from '../components/Main_components/Main_Top.vue'
import MainProfile from '../components/Main_components/Main_Profile.vue'
import Footer from '../components/Footer.vue'


export default {
	name: 'Page_main',
	components: {
		MainIllust,
		MainGame,
		MainNews,
		MainTop,
		MainProfile,
		Footer,
	},
}
</script>