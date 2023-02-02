<template>
	<div>
		<section id="Shop" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Shop</span></h2>
			<VerticalLine />
			<div class="sa sa--up">
				<div class="container">
					<div class="card">
						<div class="face face1 booth">
							<div class="content">
								<img src="../assets/logo/png_booth.png">
								<h3 class="tr-duration-05s cursor-default">Nl.F Official Shop</h3>
							</div>
						</div>
						<div class="face face2">
							<div class="content">
								<a class="tr-duration-025s fs-0_8rem">Link To Shop</a>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="face face1 melon">
							<div class="content">
								<img src="../assets/logo/store-logo-melonbooks.png">
								<h3 class="tr-duration-05s cursor-default">Melonbooks</h3>
							</div>
						</div>
						<div class="face face2">
							<div class="content">
								<a class="tr-duration-025s fs-0_8rem">Link To Shop</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Page_Shop',
	components: {
		VerticalLine,
		BackToHome,
		Footer,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data: () => ({
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Goods',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) {
.container {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-around;
}

.container .card {
	position: relative;
}

.container .card .face {
	width: 21.4vw;
	height: 12.8vw;
	transition: 0.5s;
}

.container .card .face.face1 {
	position: relative;
	background: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	transform: translateY(3.5vw);
}

.container .card:hover .face.face1.booth .content h3 {
	color: white;
}

.container .card:hover .face.face1.melon .content h3 {
	color: #18BD67;
}

.container .card:hover .face.face1.booth {
	border: none;
	background: #fc4d50;
	transform: translateY(0px);
}

.container .card:hover .face.face1.melon {
	border: none;
	background: #f0fff0;
	transform: translateY(0px);
}

.container .card .face.face1 .content {
	opacity: 0.2;
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
}

.container .card .face.face1 .content img {
	max-width: 14vw;
}

.container .card .face.face1 .content h3 {
	margin: 0.7vw 0 0;
	padding: 0;
	color: #333;
	text-align: center;
	font-size: 1rem;
	font-weight: normal;
}

.container .card:hover .face.face1 .content {
	opacity: 1;
}

.container .card .face.face2 {
	height: 3.5vw;
	position: relative;
	background: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.4vw;
	box-sizing: border-box;
	box-shadow: 0 25px 40px rgb(0 0 0 / 15%);
	transform: translateY(-1.7vw);
}

.container .card:hover .face.face2 {
	transform: translateY(0px);
}

.container .card .face.face2 .content p {
	margin: 0;
	padding: 0;
}

.container .card .face.face2 .content a {
	display: inline-block;
	text-decoration: none;
	color: #e7b06c;
	padding: 0.3vw;
}

.container .card .face.face2 .content a:hover {
	background: #e7b06c;
	color: #fafafa;
}
}

@media screen and (max-aspect-ratio: 1/1) {
.container {
	width: 100%;
	position: relative;
}

.container .card {
	position: relative;
	margin-bottom: 2rem;
}

.container .card .face {
	width: 53.5vw;
	height: 32vw;
	transition: 0.5s;
	margin: 0 auto;
}

.container .card .face.face1 {
	position: relative;
	background: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	transform: translateY(8.75vw);
}

.container .card:hover .face.face1.booth .content h3 {
	color: white;
}

.container .card:hover .face.face1.melon .content h3 {
	color: #18BD67;
}

.container .card:hover .face.face1.booth {
	border: none;
	background: #fc4d50;
	transform: translateY(0px);
}

.container .card:hover .face.face1.melon {
	border: none;
	background: #f0fff0;
	transform: translateY(0px);
}

.container .card .face.face1 .content {
	opacity: 0.2;
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
}

.container .card .face.face1 .content img {
	max-width: 35vw;
}

.container .card .face.face1 .content h3 {
	margin: 1.75vw 0 0;
	padding: 0;
	color: #333;
	text-align: center;
	font-size: 1rem;
	font-weight: normal;
}

.container .card:hover .face.face1 .content {
	opacity: 1;
}

.container .card .face.face2 {
	height: 8.75vw;
	position: relative;
	background: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3.5vw;
	box-sizing: border-box;
	box-shadow: 0 25px 40px rgb(0 0 0 / 15%);
	transform: translateY(-4.25vw);
}

.container .card:hover .face.face2 {
	transform: translateY(0px);
}

.container .card .face.face2 .content p {
	margin: 0;
	padding: 0;
}

.container .card .face.face2 .content a {
	display: inline-block;
	text-decoration: none;
	color: #e7b06c;
	padding: 0.75vw;
}

.container .card .face.face2 .content a:hover {
	background: #e7b06c;
	color: #fafafa;
}
}
</style>