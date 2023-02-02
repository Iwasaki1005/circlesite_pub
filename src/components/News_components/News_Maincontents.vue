<template>
	<div>
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>News</span></h2>
		<VerticalLine />
		<v-card theme="disable" class="bg-none sa sa--up">
			<v-tabs v-model="tab" align-with-title grow>
				<v-tabs-slider color="yellow"></v-tabs-slider>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<router-link to="/news/20210202dmy">
						<div class="news-column m-bottom-2rem_dis">
							<div class="f-ali-items-center">
								<p class="fs-0_8rem m-right-05rem co-black">2022.※未定</p>
								<div class="tag-info font-E1">info</div>
							</div>
							<h3 class="co-black fs-h3nomal">新サークル「ねばーランド.F」活動開始しました。</h3>
						</div>
					</router-link>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
	name: 'News_Maincontents',
	components: {
		VerticalLine,
	},
	data () {
		return {
			tab: null,
			items: [
			'2022',
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

<style>
.news-column {
	padding: 1rem 2rem;
	border-radius: 0.2vw;
	margin: 2rem 0.5rem;
	box-shadow: 0.04vw 0.04vw 0.4vw 0.01vw #e7b06c;
}
</style>