<template>
	<div>
		<transition name="vfade">
			<GalleryGallerymodal  v-show="modalscreen" :list="list" :difil="difil" @illustselect="illustselect" @differenceselect="differenceselect" @screenclose="screenclose" :seldes="seldes" :sellinktxt="sellinktxt" :sellinksrc="sellinksrc" @modalfuncopen="modalfuncopen" @modalfuncclose="modalfuncclose"/>
		</transition>
		<section id="Illust" class="section-2 sa">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>Illust</span></h2>
			<VerticalLine />
			<div class="d-flex">
				<div class="width-95p">
					<div class="f-jus-space-around sa sa--up">
						<div class="il-1 f-jus-end f-ali-items-end hover-flash" @click="screenopen(1)" v-bind:class="list[1].thumclass" v-show="list[1].active" v-bind:data-sa_delay="index * 1000">
							<img class="main-illust-bt" src="../../assets/img/bt-open.svg">
						</div>
						<div class="f-jus-space-around f-direction-column">
							<div class="il-2 f-jus-end f-ali-items-end hover-flash" @click="screenopen(2)">
								<img class="main-illust-bt-sm " src="../../assets/img/bt-open.svg">
							</div>
							<div class="il-3 f-jus-end f-ali-items-end hover-flash" @click="screenopen(3)">
								<img class="main-illust-bt-sm" src="../../assets/img/bt-open.svg">
							</div>
						</div>
					</div>
					<!-- ここまでりふぁ -->
					<div class="f-jus-space-around m-top-2rem_dis m-top-1rem_mob sa sa--up">
						<div class="f-jus-space-around f-direction-column">
							<div class="il-2 f-jus-end f-ali-items-end hover-flash" @click="screenopen(6)">
								<img class="main-illust-bt-sm" src="../../assets/img/bt-open.svg">
							</div>
							<div class="il-3 f-jus-end f-ali-items-end hover-flash" @click="screenopen(5)">
								<img class="main-illust-bt-sm" src="../../assets/img/bt-open.svg">
							</div>
						</div>
						<div class="il-1 f-jus-end f-ali-items-end hover-flash" @click="screenopen(4)">
							<img class="main-illust-bt" src="../../assets/img/bt-open.svg">
						</div>
					</div>
				</div>
				<div class="width-5p sa sa--up">
					<p class="font-E3 vertical-text">Illust <span class="v-line dis-only">────────────────────────────────────────</span><span class="v-line v-line_mobile mob-only">──────────────────────</span></p>
				</div>
			</div>
			<div class="f-ali-jus-center m-top-2rem sa sa--up">
				<a href="#" class="bt-typeA bt-typeA-border d-block m-rl-auto">
					<span class="bt-typeA-border-inner font-E1">View more ></span>
				</a>
			</div>
		</section>
	</div>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'
import GalleryGallerymodal from '../Gallery_components/Gallery_gallerymodal.vue'

export default {
  name: 'MainIllust',
  components: {
		VerticalLine,
		GalleryGallerymodal,
  },
  data: () => ({
      isActive: false,
      list : [
			{
				title:"イラスト1 男の子 女の子 複数人", 
				thumclass:["bgil-1"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト1、男の子、女の子、複数人.png'),
				difsrc:[],
				tag:["男の子", "女の子","複数人", "rating=a"], active: true,
				description:'ナントカさんで描かせていただいたタペストリーのイラストです。CUFF様にて通販委託中です。',
				linktext: 'CUFF様通販SHOP', linksrc: 'https://9-nine-project.com/special/',
			},
			{
				title:"イラスト2 男の子 ヤンキー 複数人", 
				thumclass:["bgil-2"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト2、男の子、複数人、ヤンキー.png'),
				difsrc:[],
				tag:["男の子", "ヤンキー","複数人", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト3 女の子", 
				thumclass:["bgil-3"], differenceses:["bgil-3-2"], 
				src: require('../../uploads/illustrations/イラスト3、女の子.png'),
				difsrc:[require('../../uploads/illustrations/イラスト3-2、女の子.png')],
				tag:["女の子", "rating=a"], active: true,
				description:'商品説明みたいな感じ',
				linktext: 'Amazon', linksrc: 'https://9-nine-project.com/special/',
			},
			{
				title:"イラスト4 女の子 !特殊", 
				thumclass:["bgil-4"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト4、女の子、特殊.png'),
				difsrc:[],
				tag:["女の子", "rating=r18"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト5 女の子", 
				thumclass:["bgil-5"], differenceses:["bgil-5-2","bgil-5-3"], 
				src: require('../../uploads/illustrations/イラスト5、女の子、男の子.png'),
				difsrc:[require('../../uploads/illustrations/イラスト5-2、女の子、男の子.png'),
						require('../../uploads/illustrations/イラスト5-3、女の子、男の子.png')],
				tag:["女の子", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト6 女の子 複数人", 
				thumclass:["bgil-6"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト６、女の子、複数人.png'),
				difsrc:[],
				tag:["女の子","複数人", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
		],
		difil: [],
		difilsrc: [],
		seldes: '',
		sellinktxt: '',
		sellinksrc: '',
		rating: false,
		activetag: [],
		alltags: ["男の子","女の子","複数人","ヤンキー",],
		modalscreen: false,
		overflowyhide: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) {
	.il-1 {
		width: 41.6vw;
		height: 23.4vw;
		border: 0.2vw solid #e7b06c;
		background-image: url(https://img.sirabee.com/wp-content/uploads/2020/07/sirabee20200710airgun-400x266.jpg);
	}

	.il-2 {
		width: 19.2vw;
		height: 10.8vw;
		border: 0.2vw solid #e7b06c;
		background-image: url(https://3.bp.blogspot.com/-joXYE8YRH-w/VwIjIGpt9-I/AAAAAAAA5fM/jHtT9Wiwdtgas3DI6gSgxnb19CLZ4_gAw/s400/internet_offline_offkai.png);
	}

	.il-3 {
		width: 19.2vw;
		height: 10.8vw;
		border: 0.2vw solid #e7b06c;
		background-image: url(https://fpiccdn.com/25567_5/w500/h0/mratio/ejpg/?478f69fd8b836304b948ca0c8678ea90);
	}

	.main-illust-bt {
		height: 2vw;
		width: 7.4vw;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.main-illust-bt-sm {
		height: 1.5vw;
		width: 5.55vw;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.il-1 {
		width: 41.6vw;
		height: 23.4vw;
		border: 0.2vw solid #e7b06c;
		background-image: url(https://img.sirabee.com/wp-content/uploads/2020/07/sirabee20200710airgun-400x266.jpg);
	}

	.il-2 {
		width: 19.2vw;
		height: 10.8vw;
		border: 0.2vw solid #e7b06c;
		background-image: url(https://3.bp.blogspot.com/-joXYE8YRH-w/VwIjIGpt9-I/AAAAAAAA5fM/jHtT9Wiwdtgas3DI6gSgxnb19CLZ4_gAw/s400/internet_offline_offkai.png);
	}

	.il-3 {
		width: 19.2vw;
		height: 10.8vw;
		border: 0.2vw solid #e7b06c;
		background-image: url(https://fpiccdn.com/25567_5/w500/h0/mratio/ejpg/?478f69fd8b836304b948ca0c8678ea90);
	}

	.main-illust-bt {
		height: 2vw;
		width: 7.4vw;
		margin-right: 0.2rem;
		margin-bottom: 0.2rem;
	}

	.main-illust-bt-sm {
		height: 1.5vw;
		width: 5.55vw;
		margin-right: 0.2rem;
		margin-bottom: 0.2rem;
	}
}
</style>