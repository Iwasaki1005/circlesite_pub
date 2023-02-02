<template>
	<div>
		<section id="Game" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Game</span></h2>
			<VerticalLine />
			<GamePickup  :gamelist="gamelist" @pickupcheck="pickupcheck" />
			<GameGames :gamelist="gamelist" :datapickthumsrc="datapickthumsrc" />
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'
import GameGames from '../components/Game_components/Game_games.vue'
import GamePickup from '../components/Game_components/Game_pickup.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Page_Game',
	components: {
		VerticalLine,
		BackToHome,
		GameGames,
		GamePickup,
		Footer,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	methods: {
		pickupcheck : function() {
			for (let i = 0; i < this.gamelist.length; i++) {
				if (this.gamelist[i].pickup == true) {
					const gamepickup = document.getElementById('gamepickup');
					this.datapickthumsrc = this.gamelist[i].pickthumsrc
					gamepickup.setAttribute('src', this.datapickthumsrc);
				}
			}
		},
	},
	data: () => ({
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Game',
			disabled: false,
			href: '',
		},
		],
		gamelist: [
			{
				title: "ダミーゲーム1", 
				tag:["開発中", "発売中","New"],
				release: '2021.11.26',
				price: '¥free',
				rating: 'rating=a',
				linksrc: 'https://9-nine-project.com/special/',
				thumclass:'bgil-2', pickthumsrc: require('../uploads/game/dmy_pickup.png'),
				pickup: true,
			},
			{
				title: "ダミーゲーム2", 
				tag:["発売中","RPG",'rating=r18'],
				release: '2021.11.01',
				price: '¥2000',
				rating: 'rating=r18',
				linksrc: 'https://websitesetup.org/html-to-wordpress/',
				thumclass:'bgil-2', pickthumsrc: require('../uploads/illustrations/イラスト６、女の子、複数人.png'),
				pickup: false,
			},
		],
		datapickthumsrc: '',
	}),
}
</script>

<style>
.game-img-scale-hover{
 transition:1s all;
}

.game-img-scale-hover:hover{
  transform:scale(1.2,1.2);
  transition:1s all;
}
</style>