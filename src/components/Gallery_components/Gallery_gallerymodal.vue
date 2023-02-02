<template>
	<div class="gallery-gallerymodal">
		<!-- イラスト本体-->
		<img id="gallery-gallerymodal-screen" class="gallery-gallerymodal-screen">
		<!-- ホバー用div -->
		<div class="gallery-gallerymodal-hoverdiv1" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<div class="gallery-gallerymodal-hoverdiv2" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<div class="gallery-gallerymodal-hoverdiv3" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<div class="gallery-gallerymodal-hoverdiv4" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<!-- イラストのリスト 左上-->
		<div id="gallery-gallerymodal-illist" class="gallery-gallerymodal-illist modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
			<!-- サムネ部分 -->
			<div v-for="(column,index) in list" :key="column.title">
				<div v-bind:id="list[index].thumclass" class="gallery-gallerymodal-illist-icon" @click="illustselect(column)" v-bind:class="list[index].thumclass" v-show="list[index].active"></div>
			</div>
			<div class="gallery-gallerymodal-illist-icon-dmy"></div>
		</div>
		<!-- 差分部分 -->
			<div class="gallery-gallerymodal-illist-dif modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
				<transition-group name="items" class="d-flex">
					<div v-for="(column,index) in difil" :key="column">
						<div v-bind:id="column" class="gallery-gallerymodal-illist-icon" @click="differenceselect(index,column)" v-bind:class="difil[index]"></div>
					</div>
				</transition-group>
			</div>
		<!-- 説明文 -->
		<!-- ここまでりふぁ -->
		<div class="gallery-gallerymodal-desc gallery-gallerymodal-desc-container modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
			<div class="gallery-gallerymodal-desc-box">
				<span></span>
				<div class="gallery-gallerymodal-desc-content">
					<p>{{seldes}}</p>
					<a v-bind:href="sellinksrc" target="_blank">{{sellinktxt}}</a>
				</div>
			</div>
		</div>
		<!-- 閉じるボタン -->
		<button class="gallery-gallerymodal-glclose" @click="screenclose">
			<span class="gallery-gallerymodal-glclose-span1"></span>
			<span class="gallery-gallerymodal-glclose-span2"></span>
			<span class="gallery-gallerymodal-glclose-span3"></span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		list: Array,
		difil: Array,
		seldes: undefined,
		sellinktxt: undefined,
		sellinksrc: undefined,
	},
	methods: {
		illustselect : function (column) {
			this.$emit('illustselect',column)
		},
		differenceselect : function (index,column) {
			this.$emit('differenceselect',index,column)
		},
		screenclose: function () {
			this.$emit('screenclose')
		},
		modalfuncopen: function () {
			this.$emit('modalfuncopen')
		},
		modalfuncclose: function () {
			this.$emit('modalfuncclose')
		},
	},
}
</script>

<style>
.modal-hide {
	opacity: 0;
}

.modalmarker {
	transition: all 0.3s;
}

.modal-hide:active {
	pointer-events: none;
}

@media screen and (min-aspect-ratio: 1/1) { 
	.gallery-gallerymodal {
		width: 100%;
		height: 103vh;
		background-color: rgba(0,0,0,0.75);
		display: flex;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		overflow: scroll;
	}

	.gallery-gallerymodal::-webkit-scrollbar{
		width: 0.1px;
	}

	.gallery-gallerymodal::-webkit-scrollbar-track{
		background: transparent;
		border: none;
	}

	.gallery-gallerymodal::-webkit-scrollbar-thumb{
		background: transparent;
	}

	.gallery-gallerymodal-screen {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		object-fit: contain;
	}

	.gallery-gallerymodal-hoverdiv1 {
		position: absolute;
		top: 0;
		left: 0;
		height: 20vh;
		width: 100%;
	}

	.gallery-gallerymodal-hoverdiv2 {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;
		width: 30vw;
	}

	.gallery-gallerymodal-hoverdiv3 {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 20vh;
		width: 100%;
	}

	.gallery-gallerymodal-hoverdiv4 {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 30vw;
	}

	.gallery-gallerymodal-illist {
		height: 100vh;
		width: 13vw;
		position: fixed;
		overflow: scroll;
		top: 0;
		left: 0;
		overflow-x: hidden;
	}

	.gallery-gallerymodal-illist::-webkit-scrollbar{
		width: 0.1px;
	}

	.gallery-gallerymodal-illist::-webkit-scrollbar-track{
		background: transparent;
		border: none;
	}

	.gallery-gallerymodal-illist::-webkit-scrollbar-thumb{
		background: transparent;
	}

	.gallery-gallerymodal-illist-icon {
		border: solid 0.2vw #e7b06c;
		width: 10.4vw;
		height: 5.85vw;
		margin: 2vw 0 2vw 1.5vw;
		cursor: pointer;
	}

	.gallery-gallerymodal-illist-icon-select {
		border: solid 0.2vw #fff;
		width: 10.4vw;
		height: 5.85vw;
		margin: 2vw 0 2vw 1.5vw;
		box-shadow: 0 0 0.4vw #ffdbae, 0 0 0.8vw #fff, 0 0 1.2vw #ffdbae;;
	}

	.gallery-gallerymodal-illist-icon-dmy {
		height: calc(100vh - 5.85vw - 2vw - 2vw);
		width: 0.1px;
	}

	.gallery-gallerymodal-illist-dif {
		display: flex;
		position: absolute;
		top: 0;
		left: 11.9vw;
	}

	.gallery-gallerymodal-desc {
		position: absolute;
		bottom: 3vh;
		right: 3vw;
		background-color: #ffdbae;
		width: 45vw;
		padding: 0.5vw 1vw;
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg,#e7b06c,#e7b06c,#ffdbae,#ffaeca);
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg,#e7b06c,#e7b06c,#ffdbae,#ffaeca);
		filter: blur(1.4vw);
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box span {
		position: absolute;
		top: 0.2vw;
		left: 0.2vw;
		right: 0.2vw;
		bottom: 0.2vw;
		background: rgba(0,0,0,0.6);
		z-index: 2;
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box span::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: rgba(255,255,255,0.1);
		pointer-events: none;
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box .gallery-gallerymodal-desc-content {
		position: relative;
		z-index: 10;
		color: #fafafa;
	}

	.gallery-gallerymodal-glclose {
		position: fixed;
		top: 5vh;
		right: 3vw;
		width: 3.6vw;
		height: 2.5vw;
		color: #fafafa;
		transition: 0.5s ease-in-out;
	}

	.gallery-gallerymodal-glclose:hover {
		transform: rotateZ( 180deg ) ;
	}

	.gallery-gallerymodal-glclose span {
		display : block;
		position: absolute;
		width   : 2.8vw;
		height  : 0.15vw;
		left    : 0.4vw;
		background : #e7b06c;
		transition: 0.5s ease-in-out;
	}

	.gallery-gallerymodal-glclose-span1 {
		top : 1.14vw;
		left: 0.42vw;
		transform: rotate(315deg);
	}

	.gallery-gallerymodal-glclose-span2 {
		top: 1.14vw;
		transform: rotate(-315deg);
	}

	.gallery-gallerymodal-glclose-span3 {
		top: 1.14vw;
		transform: rotate(-315deg);
	}

	/* .items-leave-active, */
	.items-enter-active {
		transition: opacity .5s, transform .5s;
	}
	.items-leave-to,
	.items-enter {
		opacity: 0;
		transform: translateX(-50px);
	}

	.items-leave,
	.items-enter-to {
		opacity: 1;
	}

	.items-move {
		transition: transform .5s;
	}

	.items-leave-active {
		transition: opacity 0s, transform 0s;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.gallery-gallerymodal {
		width: 100%;
		height: 103vh;
		background-color: rgba(0,0,0,0.75);
		display: flex;
		position: fixed;
		z-index: 100;
		top: 0;		
		left: 0;
		overflow: scroll;
	}

	.gallery-gallerymodal::-webkit-scrollbar{
		width: 0.1px;
	}

	.gallery-gallerymodal::-webkit-scrollbar-track{
		background: transparent;
		border: none;
	}

	.gallery-gallerymodal::-webkit-scrollbar-thumb{
		background: transparent;
	}

	.gallery-gallerymodal-screen {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		object-fit: contain;
	}

	.gallery-gallerymodal-hoverdiv1 {
		position: absolute;
		top: 0;
		left: 0;
		height: 35vh;
		width: 100%;
	}

	.gallery-gallerymodal-hoverdiv2 {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;
		width: 35vw;
	}

	.gallery-gallerymodal-hoverdiv3 {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 35vh;
		width: 100%;
	}

	.gallery-gallerymodal-hoverdiv4 {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 35vw;
	}

	.gallery-gallerymodal-illist {
		height: 100vh;
		width: 26vw;
		position: fixed;
		overflow: scroll;
		top: 0;
		left: 0;
		overflow-x: hidden;
	}

	.gallery-gallerymodal-illist::-webkit-scrollbar{
		width: 0.1px;
	}

	.gallery-gallerymodal-illist::-webkit-scrollbar-track{
		background: transparent;
		border: none;
	}

	.gallery-gallerymodal-illist::-webkit-scrollbar-thumb{
		background: transparent;
	}

	.gallery-gallerymodal-illist-icon {
		border: solid 0.2vw #e7b06c;
		width: 20.8vw;
		height: 11.7vw;
		margin: 2vw 0 2vw 1.5vw;
		cursor: pointer;
	}

	.gallery-gallerymodal-illist-icon-select {
		border: solid 0.2vw #fff;
		width: 20.8vw;
		height: 11.7vw;
		margin: 2vw 0 2vw 1.5vw;
		box-shadow: 0 0 0.4vw #ffdbae, 0 0 0.8vw #fff, 0 0 1.2vw #ffdbae;;
	}

	.gallery-gallerymodal-illist-icon-dmy {
		height: calc(100vh - 5.85vw - 2vw - 2vw);
		width: 0.1px;
	}

	.gallery-gallerymodal-illist-dif {
		display: flex;
		position: absolute;
		top: 0;
		left: 22.9vw;
	}

	.gallery-gallerymodal-desc {
		position: absolute;
		bottom: 4vh;
		right: 3vw;
		background-color: #ffdbae;
		width: 94vw;
		padding: 1vw 2vw;
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg,#e7b06c,#e7b06c,#ffdbae,#ffaeca);
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg,#e7b06c,#e7b06c,#ffdbae,#ffaeca);
		filter: blur(1.4vw);
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box span {
		position: absolute;
		top: 0.2vw;
		left: 0.2vw;
		right: 0.2vw;
		bottom: 0.2vw;
		background: rgba(0,0,0,0.6);
		z-index: 2;
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box span::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: rgba(255,255,255,0.1);
		pointer-events: none;
	}

	.gallery-gallerymodal-desc-container .gallery-gallerymodal-desc-box .gallery-gallerymodal-desc-content {
		position: relative;
		z-index: 10;
		color: #fafafa;
	}

	.gallery-gallerymodal-glclose {
		position: fixed;
		top: 5vh;
		right: 5vw;
		width: 10vw;
		height: 10vw;
		color: white;
		transition: 0.5s ease-in-out;
	}

	.gallery-gallerymodal-glclose span {
		display : block;
		position: absolute;
		width : 10vw;
		height : 0.15vw;
		left : 0.4vw;
		background : #e7b06c;
		transition: 0.5s ease-in-out;
	}

	.gallery-gallerymodal-glclose-span1 {
		top : 3vw;
		left: 0.42vw;
		transform: rotate(315deg);
	}

	.gallery-gallerymodal-glclose-span2 {
		top: 3vw;
		transform: rotate(-315deg);
	}

	.gallery-gallerymodal-glclose-span3 {
		top: 3vw;
		transform: rotate(-315deg);
	}

	/* .items-leave-active, */
	.items-enter-active {
		transition: opacity .5s, transform .5s;
	}

	.items-leave-to,
	.items-enter {
		opacity: 0;
		transform: translateX(-50px);
	}

	.items-leave,
	.items-enter-to {
		opacity: 1;
	}

	.items-move {
		transition: transform .5s;
	}

	.items-leave-active {
		transition: opacity 0s, transform 0s;
	}
}
</style>