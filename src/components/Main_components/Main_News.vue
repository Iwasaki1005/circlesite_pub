<template>
	<section id="News" class="section">
		<h2 id="news-index" class="font-E3 text-center scroll-fadein index-anime"><span>News</span></h2>
		<VerticalLine />
		<div class="d-flex_dis sa sa--up">
			<router-link class="hover-flash main-news-window-container" v-bind:to="news[0].link">
				<div class="main-news-window-info">
					<div class="main-news-window-info-text co-white">
						<p>{{news[0].date}}</p>
						<p>{{news[0].title}}</p>
					</div>
					<div class="main-news-window-info-tag">
						<div v-if="news[0].tag.includes('dmy')" class="tag-dmy co-white tr-duration-05s">dmy</div>
						<div v-if="news[0].tag.includes('info')" class="tag-info co-white tr-duration-05s">info</div>
						<div v-if="news[0].tag.includes('game')" class="tag-info co-white tr-duration-05s">game</div>
					</div>
				</div>
				<div v-bind:class="news[0].mainthum" class="main-news-window-img-container overflow-hidden f-ali-jus-center tr-duration-05s"></div>
			</router-link>
			<div class="f-ali-jus-center-dir-column m-top-1rem_mob">
				<h3 class="co-brown f-weight-normal">-最新情報-</h3>
				<div class="m-top-1rem">
					<router-link class="m-bottom-05rem" v-bind:to="news[1].link">
						<div class="m-bottom-05rem m-top-05rem p-rl-1rem">
							<div class="d-flex">
								<p class="fs-0_8rem co-black">{{news[1].date}}</p>
								<div class="f-ali-items-center">
									<div v-if="news[1].tag.includes('dmy')" class="tag-dmy-small">dmy</div>
									<div v-if="news[1].tag.includes('info')" class="tag-info-small">info</div>
									<div v-if="news[1].tag.includes('game')" class="tag-info-small">game</div>
								</div>
							</div>
							<p class="fs-0_8rem co-black">{{news[1].title}}</p>
						</div>
					</router-link>
					<div class="main-news-line"></div>
					<router-link class="m-bottom-05rem" v-bind:to="news[2].link">
						<div class="m-bottom-05rem m-top-05rem p-rl-1rem">
							<div class="d-flex">
								<p class="fs-0_8rem co-black">{{news[2].date}}</p>
								<div class="f-ali-items-center">
									<div v-if="news[2].tag.includes('dmy')" class="tag-dmy-small">dmy</div>
									<div v-if="news[2].tag.includes('info')" class="tag-info-small">info</div>
									<div v-if="news[2].tag.includes('game')" class="tag-info-small">game</div>
								</div>
							</div>
							<p class="fs-0_8rem co-black">{{news[2].title}}</p>
						</div>
					</router-link>
					<div class="main-news-line"></div>
					<router-link class="m-bottom-05rem" v-bind:to="news[3].link">
						<div class="m-bottom-05rem m-top-05rem p-rl-1rem">
							<div class="d-flex">
								<p class="fs-0_8rem co-black">{{news[3].date}}</p>
								<div class="f-ali-items-center">
									<div v-if="news[3].tag.includes('dmy')" class="tag-dmy-small">dmy</div>
									<div v-if="news[3].tag.includes('info')" class="tag-info-small">info</div>
									<div v-if="news[3].tag.includes('game')" class="tag-info-small">game</div>
								</div>
							</div>
							<p class="fs-0_8rem co-black">{{news[3].title}}</p>
						</div>
					</router-link>
					<div class="main-news-line"></div>
					<router-link class="m-bottom-05rem" v-bind:to="news[4].link">
						<div class="m-bottom-05rem m-top-05rem p-rl-1rem">
							<div class="d-flex">
								<p class="fs-0_8rem co-black">{{news[4].date}}</p>
								<div class="f-ali-items-center">
									<div v-if="news[4].tag.includes('dmy')" class="tag-dmy-small">dmy</div>
									<div v-if="news[4].tag.includes('info')" class="tag-info-small">info</div>
									<div v-if="news[4].tag.includes('game')" class="tag-info-small">game</div>
								</div>
							</div>
							<p class="fs-0_8rem co-black">{{news[4].title}}</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="f-ali-jus-center m-top-2rem sa sa--up">
			<a href="#" class="bt-typeA bt-typeA-border d-block center">
				<span class="bt-typeA-border-inner font-E1">View more ></span>
			</a>
		</div>
	</section>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
	name: 'MainNews',
	components: {
		VerticalLine,
	},
	data: () => ({
		isActive: false,
		news : [
			// 【メモ】新しいものニュースを上から順に追加していく
			{
				title:'ダミー1ナントカカントカのお知らせ',
				date:'2021.11.24',
				tag:['dmy','info','game'],
				mainthum:'mthum-1',subthum:'sthum-1',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'2021.05.13',
				tag:['dmy','info'],
				mainthum:'mthum-2',subthum:'sthum-2',
				link:'/news/20210202dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'9999.99.99',
				tag:['info'],
				mainthum:'mthum-3',subthum:'sthum-3',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'2021.08.11',
				tag:['dmy','info','game'],
				mainthum:'mthum-4',subthum:'sthum-4',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'2021.08.11',
				tag:['dmy','info'],
				mainthum:'mthum-4',subthum:'sthum-4',
				link:'/news/20200101dmy',
				emergent: false,
			},
		],
	}),
	created: function() {
		this.newshover(0)
	},
	updated: function () {
		this.indexanime()
		this.scrollanime_js()
	},
}
</script>

<style>
.mthum-1 {
	background-image: url(../../uploads/news/dmynews_1.png);
	background-position: center;
}
.sthum-1 {
	background-image: url(../../uploads/news/dmynews_1.png);
	background-position: center;
}
.mthum-2 {
	background-image: url(../../uploads/news/dmynews_2.png);
	background-position: center;
}
.sthum-2 {
	background-image: url(../../uploads/news/dmynews_2.png);
	background-position: center;
}
.mthum-3 {
	background-image: url(../../uploads/news/dmynews_3.png);
	background-position: center;
}
.sthum-3 {
	background-image: url(../../uploads/news/dmynews_3.png);
	background-position: center;
}
.mthum-4 {
	background-image: url(../../uploads/news/dmynews_4.png);
	background-position: center;
}
.sthum-4 {
	background-image: url(../../uploads/news/dmynews_4.png);
	background-position: center;
}

@media screen and (min-aspect-ratio: 1/1) {
	.main-news-window-container {
		width: 55%;
		height: 30vw;
		display: grid;
		grid-template-rows: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% ;
		grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% ;
	}

	.main-news-window-img-container {
		grid-row: 2 / 16;
		grid-column: 1 / 18;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border: 2px solid #e7b06c;
		object-fit: contain;
	}

	.main-news-window-info {
		background-color: #e7b06c;
		grid-row: 5 / 21;
		grid-column: 2 / 20;
		display: grid;
		grid-template-columns: 2.5% 87% 9% 1.5% ;
		grid-template-rows: 2.5% 69% 26% 2.5%;
	}

	.main-news-window-info-text {
		grid-column: 2 / 4;
		grid-row: 3 / 4;
	}

	.main-news-window-info-tag {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
	}

	.main-news-line {
		margin: 0.5rem 0;
		border-bottom: 0.1vw solid #e7b06c;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.main-news-window-container {
		width: 100%;
		height: 60vw;
		display: grid;
		grid-template-rows: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% ;
		grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% ;
	}

	.main-news-window-img-container {
		grid-row: 2 / 16;
		grid-column: 1 / 17;
		width: 100%;
		height: 95%;
		overflow: hidden;
		border: 2px solid #e7b06c;
		object-fit: contain;
	}

	.main-news-window-info {
		background-color: #e7b06c;
		grid-row: 5 / 21;
		grid-column: 2 / 20;
		display: grid;
		grid-template-columns: 2.5% 83% 9% 1.5% ;
		grid-template-rows: 2.5% 64% 31% 2.5%;
	}

	.main-news-window-info-text {
		grid-column: 2 / 4;
		grid-row: 3 / 4;
	}

	.main-news-window-info-tag {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
	}

	.main-news-line {
		margin: 0.5rem 0;
		border-bottom: 0.1vw solid #e7b06c;
	}
}
</style>