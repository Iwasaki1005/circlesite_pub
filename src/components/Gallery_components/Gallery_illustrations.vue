<template>
	<div>
		<div class="sa sa--up">
			<div class="f-ali-items-center m-bottom-05rem">
				<p class="fs-0_8rem co-brown m-right-05rem">ナントカコンテンツを非表示にする</p>
				<input type="checkbox" class="cursor-pointer" @click="ratingswitch" :checked="checked" @input="$emit('input', $event.target.checked)">
			</div>
			<div class="f-ali-items-center">
				<p class="fs-0_8rem co-brown m-right-1rem">タグ一覧</p>
				<button @click="tagallremove" class="gallery-illustrations-tag-allfalse">All OFF</button>
			</div>
			<div class="d-flex m-top-05rem">
				<div v-for="(column) in alltags" :key="column">
					<div v-if="activetag.includes(column)" class="gallery-illustrations-tag-active cursor-pointer" @click="removetag(column)">{{ column }}</div>
					<div v-else class="gallery-illustrations-tag cursor-pointer" @click="addtag(column)">{{ column }}</div>
				</div>
			</div>
		</div>
		<transition-group class="sa sa--up m-top-1rem_mob f-wrap-wrap" name="illustrations">
			<div v-for="(column,index) in list" :key="column.title">
				<transition name="illustrations">
					<div class="gallery-illustrations-illust" @click="screenopen(index)" v-bind:class="list[index].thumclass" v-show="list[index].active" v-bind:data-sa_delay="index * 1000"></div>
				</transition>
			</div>
		</transition-group>
		<!-- 個別で記入したパターン(没) -->
		<!-- <transition-group name="illustrations" style="display: flex; flex-wrap: wrap;">
			<div key="1" v-if="activetag.includes('ヤンキー')"></div>
			<div key="2" v-else class="illust-div bgil-1"></div>

			<div key="3" v-if="activetag.includes('女の子')"></div>
			<div key="4" v-else class="illust-div bgil-2"></div>

			<div key="5" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="6" v-else class="illust-div bgil-3"></div>

			<div key="7" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="8" v-else-if="check"></div>
			<div key="8" v-else class="illust-div bgil-4"></div>

			<div key="9" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="10" v-else class="illust-div bgil-5"></div>

			<div key="11" v-if="activetag.includes('男の子') || activetag.includes('ヤンキー')"></div>
			<div key="12" v-else class="illust-div bgil-6"></div>

			<div key="13" v-if="activetag.includes('女の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="14" v-else class="illust-div bgil-7"></div>
		</transition-group> -->
	</div>
</template>

<script>
export default {
	name: 'GalleryIllustrations',
	props: {
		list: Array,
		alltags: Array,
		activetag: Array,
	},
	methods: {
		addtag : function (column) {
			this.$emit('addtag',column)
		},
		removetag : function (column) {
			this.$emit('removetag',column)
		},
		tagallremove : function() {
			this.$emit('tagallremove')
		},
		ratingswitch : function () {
			this.$emit('ratingswitch')
		},
		screenopen: function (index) {
			this.$emit('screenopen',index)
		}
	},
	updated: function () {
		this.scro()
	},
}
</script>

<style>
.gallery-illustrations-tag-active {
	background-color: #e7b06c;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	padding: 0.1vw 0.5vw;
	color: #fafafa;
	margin-right: 0.5rem
}

.gallery-illustrations-tag {
	background-color: #fafafa;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	padding: 0.1vw 0.5vw;
	color: #e7b06c;
	margin-right: 0.5rem
}

.gallery-illustrations-tag-allfalse {
	background-color: #fafafa;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: #e7b06c;
}

.illustrations-enter-active {
	animation: illustrations-in .5s;
}

.illustrations-leave-to {
	opacity: 0;
}

@keyframes illustrations-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.illustrations-move {
	transition: transform 1s;
}

.illustrations-leave-active {
	position: absolute;
}
</style>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) { 
	.gallery-illustrations-illust {
		width: 16vw;
		height: 16vw;
		border: 0.1vw solid #e7b06c;
		border-radius: 0.4vw;
		margin: 1vw;
		cursor: pointer;
	}

	input[type="checkbox"] {
		position: relative;
		width: 2.24vw;
		height: 1.12vw;
		-webkit-appearance: none;
		background: linear-gradient(0deg, #fafafa00, #fafafa00);
		outline: none;
		border-radius: 1.12vw;
		box-shadow: 0 0 0 0.12vw #e7b06c, inset 0 0 0 #e7b06c;
	}

	input:checked[type="checkbox"] {
		background: linear-gradient(0deg, #e7b06c, #e7b06c);
		background-color: #e7b06c;
	}

	input[type="checkbox"]:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1.12vw;
		height: 1.12vw;
		background: linear-gradient(0deg, #fafafa, #fafafa);
		border-radius: 0.56vw;
		box-shadow: 0 0 0 0.1vw #e7b06c;
		transform: scale(.98, .96);
		transition: .5s;
	}

	input:checked[type="checkbox"]:before {
		left: 1.12vw;
	}

	input[type="checkbox"]:after {
		content: '';
		position: absolute;
		top: calc(50% - 0.12vw);
		left: 0.6vw;
		width: 0.3vw;
		height: 0.3vw;
		background: linear-gradient(0deg, #9b9b9b, #9b9b9b);
		border-radius: 50%;
		transition: .5s;
	}

	input:checked[type="checkbox"]:after {
		background: #e7b06c;
		left: 1.72vw;
		box-shadow: 0 0 1.2vw #f3cd9e, 0 0 2vw #f3cd9e,
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.gallery-illustrations-illust {
		width: 35vw;
		height: 35vw;
		border: 0.1vw solid #e7b06c;
		border-radius: 0.4vw;
		margin: 1vw;
	}

	input[type="checkbox"] {
		position: relative;
		width: 5.6vw;
		height: 2.8vw;
		-webkit-appearance: none;
		background: linear-gradient(0deg, #fafafa00, #fafafa00);
		outline: none;
		border-radius: 2.8vw;
		box-shadow: 0 0 0 0.3vw #e7b06c, inset 0 0 0 #e7b06c;
	}

	input:checked[type="checkbox"] {
		background: linear-gradient(0deg, #e7b06c, #e7b06c);
		background-color: #e7b06c;
	}

	input[type="checkbox"]:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 2.8vw;
		height: 2.8vw;
		background: linear-gradient(0deg, #fafafa, #fafafa);
		border-radius: 1.4vw;
		box-shadow: 0 0 0 0.25vw #e7b06c;
		transform: scale(.98, .96);
		transition: .5s;
	}

	input:checked[type="checkbox"]:before {
		left: 2.8vw;
	}

	input[type="checkbox"]:after {
		content: '';
		position: absolute;
		top: calc(50% - 0.3vw);
		left: 1.5vw;
		width: 0.75vw;
		height: 0.75vw;
		background: linear-gradient(0deg, #9b9b9b, #9b9b9b);
		border-radius: 50%;
		transition: .5s;
	}

	input:checked[type="checkbox"]:after {
		background: #e7b06c;
		left: 4.3vw;
		box-shadow: 0 0 3vw #f3cd9e, 0 0 5vw #f3cd9e,
	}
}
</style>