<template>
	<div>
		<section id="About" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Links</span></h2>
			<VerticalLine />
			<v-card theme="disable" class="bg-none sa sa--up">
				<v-tabs v-model="tab" align-with-title grow>
					<v-tabs-slider color="yellow"></v-tabs-slider>
					<v-tab v-for="item in items" :key="item">
						{{ item }}
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<!-- サークル様の紹介機能は一旦非表示に -->
					<!-- <v-tab-item>
						<LinksCircle />
					</v-tab-item> -->
					<v-tab-item>
						<LinksCreator :creators="creators" />
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
import LinksCreator from '../components/Links_components/Links_creator.vue'
// import LinksCircle from '../components/Links_components/Links_circle.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Page_Links',
	components: {
		VerticalLine,
		BackToHome,
		LinksCreator,
		// LinksCircle,
		Footer,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data () {
		return {
			tab: null,
			items: [
			'サークル', 'クリエイター',
		],
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Links',
			disabled: false,
			href: '',
		},
		],
		creators : [
			{
				name:'Someone Famous',
				iconsrc: 'https://play-lh.googleusercontent.com/65gRWpXRbhKLD6ak-Eqs8A660E_NJft03eG37hFGitdYp2OyosvaxpN0ErDoz9aWfw',
				title:'illustrator',
				activelink:["hp", "twitter"],
				hpsrc: 'https://9-nine-project.com/special/',
				twittersrc: 'https://twitter.com/TwitterJP?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
				githubsrc: '',
			},
			{
				name:'Dmy Enginier',
				iconsrc: 'https://pbs.twimg.com/profile_images/875550692454289408/Zfr37OhA_400x400.jpg',
				title:'nantoka-kantoka',
				activelink:["twitter","github"],
				hpsrc: '',
				twittersrc: 'https://twitter.com/Kantei_Saigai',
				githubsrc: 'https://websitesetup.org/html-to-wordpress/',
			},
		],
		}
	},
}
</script>