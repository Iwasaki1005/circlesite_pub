<template>
	<div class="f-wrap-wrap_dis sa sa--up">
		<div v-for="(column) in gamelist" :key="column.title">
			<div class="game-games-bg">
				<div>
					<!-- サムネ -->
					<div class="game-games-thummini">
						<div class="game-games-thummini game-img-scale-hover" v-bind:class="column.thumclass"></div>
					</div>
					<!-- title -->
					<div class="co-black m-top-05rem m-bottom-05rem">
						<h3 class="lh-110 fs-normal_mob f-weight-normal">{{ column.title }}</h3>
					</div>
					<!-- タグ -->
					<div class="d-flex m-bottom-1rem">
						<div v-if="column.tag.includes('New')" class="games-gametag-dmy">New</div>
						<div v-if="column.tag.includes('開発中')" class="games-gametag-dmy">開発中</div>
						<div v-if="column.tag.includes('発売中')" class="games-gametag-dmy">発売中</div>
						<div v-if="column.tag.includes('RPG')" class="games-gametag-dmy">RPG</div>
						<div v-if="column.tag.includes('rating=r18')" class="games-gametag-r18">R-18</div>
					</div>
				</div>
				<div>
					<!-- 発売日 -->
					<div class="fs-0_8rem">
						<span class="co-grey m-right-05rem lh-110">{{ column.release }}</span>
						<span class="co-grey lh-110">on sale</span>
					</div>
					<!-- 値段 -->
					<div class="f-jus-space-between_dis">
						<span class="fs-0_8rem co-grey m-right-05rem lh-110">{{ column.price }}</span>
					</div>
					<!-- rating -->
					<div v-if="column.rating.includes('rating=r18')"></div>
					<!-- リンク -->
					<a v-bind:href="column.linksrc" target="_blank">
						<div class="hover-flash">
							<img class="game-games-bthp m-right-05rem" src="../../assets/img/bt-officialsite.svg">
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'GameGames',
	props: {
		gamelist: Array,
	},
	updated: function () {
		this.scrollanime_js()
	},
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) {
	.game-games-bg {
		border: 1px solid #e7b06c;
		height: 25vw;
		width: 18.5vw;
		margin-right: 1.5vw;
		margin-bottom: 1vw;
		padding: 0.5vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 0.4vw;
		background: #fafafa;
	}

	.game-games-thummini {
		width: 100%;
		height: 10vw;
		overflow:hidden;
	}

	.game-games-bthp {
		height: 2.5vw;
		width: 8.5vw;
	}

	.games-gametag-dmy {
		background-color: #e7b06c;
		text-align: center;
		width: 2.2rem;
		height: 1.0rem;
		margin: 0.1rem;
		border-radius: 10%;
		font-size: 0.6rem;
		line-height: 1.0rem;
		color: #fafafa;
		cursor: default;
	}

	.games-gametag-r18 {
		background-color: #e62078;
		text-align: center;
		width: 2.2rem;
		height: 1.0rem;
		margin: 0.1rem;
		border-radius: 10%;
		font-size: 0.6rem;
		line-height: 1.0rem;
		color: #fafafa;
		cursor: default;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.game-games-bg {
		border: 1px solid #e7b06c;
		height: 55vw;
		width: 75vw;
		margin: 3vw auto 0 auto;
		padding: 1vw 2vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 0.4vw;
		background: #fafafa;
	}

	.game-games-thummini {
		width: 100%;
		height: 20vw;
		overflow:hidden;
	}

	.game-games-bthp {
		height: 5vw;
		width: 25vw;
	}

	.games-gametag-dmy {
		background-color: #e7b06c;
		text-align: center;
		width: 3.5rem;
		margin: 0.2rem;
		border-radius: 10%;
		font-size: 0.6rem;
		line-height: 1.0rem;
		color: #fafafa;
		padding: 0.2rem 0;
		cursor: default;
	}

	.games-gametag-r18 {
		background-color: #e62078;
		text-align: center;
		width: 3.5rem;
		margin: 0.2rem;
		border-radius: 10%;
		font-size: 0.6rem;
		line-height: 1.0rem;
		color: #fafafa;
		padding: 0.2rem 0;
		cursor: default;
	}
}
</style>