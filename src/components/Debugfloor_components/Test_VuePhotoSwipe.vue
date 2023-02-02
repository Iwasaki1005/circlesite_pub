<template>
	<div>
		<!-- <div class="paragraph">
			<div>
				<img @click="showPhotoSwipe(0)" src="http://wws.tv-asahi.co.jp/ch/contents/anime/0012/img/0_4.jpg" alt="">
				<img @click="showPhotoSwipe(1)" src="https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg" alt="">
			</div>
		</div>
		<v-photoswipe :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></v-photoswipe> -->
		<!-- 
			参考↓
			https://github.com/Leesson/v-photoswipe
			今回は「v-photoswipe」の機能を使用して「v-photoswipe-gallery」は使用しなかった
		-->
	</div>
</template>  

<script>
	// import { PhotoSwipe } from 'v-photoswipe'
	// export default {
	// 	components: {
	// 		'v-photoswipe': PhotoSwipe,
	// 	},
	// 	data () {
	// 		return {
	// 			isOpen: false,
	// 			isOpenGallery: false,
	// 			options: {
	// 				index: 0,
	// 				bgOpacity: 0.6,
	// 				shareEl: false,
	// 				captionEl: false,
	// 				arrowEl: false,
	// 				counterEl: false,
	// 			},
	// 			optionsGallery: {},
	// 			items: [
	// 				{
	// 					src: 'https://pad.gungho.jp/member/common/img/top_v2/mon/7790.png',
	// 					w: 1600,
	// 					h: 1600,
	// 				}, 
	// 				{
	// 					src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
	// 					w: 1600,
	// 					h: 1066,
	// 				}
	// 			]
	// 		}
	// 	},
	// 	methods: {
	// 		showPhotoSwipe (index) {
	// 			this.isOpen = true
	// 			this.$set(this.options, 'index', index)
	// 		},
	// 		hidePhotoSwipe () {
	// 			this.isOpen = false
	// 		}
	// 	}
	// }
</script>