<template>
	<div class="container2">
						<div class="card2">
							<div class="imgBx2">
								<img src="https://pbs.twimg.com/profile_images/1330520653989076993/KhxHPHLP_400x400.png">
							</div>
							<div class="content2">
								<h2 class="fs-1_2rem co-white">Card One</h2>
								<p>Advanced CSS Animations, Transitions and Transforms And Hover Effects With Creative Examples.</p>
							</div>
						</div>
						<div class="card2">
							<div class="imgBx2">
								<img src="https://appmedia.jp/wp-content/themes/appmedia/lib/monst/images/img/top_title.jpg">
							</div>
							<div class="content2">
								<h2 class="fs-1_2rem co-white">Card Two</h2>
								<p>Advanced CSS Animations, Transitions and Transforms And Hover Effects With Creative Examples.</p>
							</div>
						</div>
						<div class="card2">
							<div class="imgBx2">
								<img src="https://kokoron3.madoka.org/mirror/b-kokoron01.jpg">
							</div>
							<div class="content2">
								<h2 class="fs-1_2rem co-white">Card Three</h2>
								<p>Advanced CSS Animations, Transitions and Transforms And Hover Effects With Creative Examples.</p>
							</div>
						</div>
					</div>
</template>

<script>
export default {
  name: 'LinksCircle',
  data: () => ({
      isActive: false,
  }),
}
</script>

<style scoped>
.container2 {
	position: relative;
	width: 1100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 30px;
}

.container2 .card2 {
	position: relative;
	max-width: 300px;
	height: 215px;
	background: #e7b06c;
	margin: 30px 10px;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 1vw 1.7vw rgba(0,0,0,0.2);
	transition: 0.3s ease-in-out;
}

.container2 .card2:hover {
	height: 420px;
}

.container2 .card2 .imgBx2 {
	position: relative;
	width: 260px;
	height: 260px;
	top: -60px;
	left: 20px;
	z-index: 1;
	box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.container2 .card2 .imgBx2 img {
	max-width: 100%;
	border-radius: 4px;
}

.container2 .card2 .content2 {
	position: relative;
	margin-top: -140px;
	padding: 10px 15px;
	text-align: center;
	color: #fff;
	visibility: hidden;
	opacity: 0;
	transition: 0.3s ease-in-out;
}

.container2 .card2:hover .content2 {
	visibility: visible;
	opacity: 1;
	margin-top: -40px;
}
</style>