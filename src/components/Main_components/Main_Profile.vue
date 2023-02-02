<template>
	<section class="section">
		<h2 class="font-E3 text-center scroll-fadein index-anime"><span>profile</span></h2>
		<VerticalLine />
		<div class="width-100p f-jus-space-around sa sa--up">
			<div class="main-profile-card">
				<div class="main-profile-left-side"></div>
				<div class="main-profile-right-side"></div>
				<div class="main-profile-back-side d-flex">
					<div class="main-profile-gradation width-5p"></div>
					<div class="width-95p p-all-05rem f-ali-items-end">
						<div>
							<div class="d-flex_mob m-bottom-05rem_mob mob-only">
								<img class="main-profile-bt" src="../../assets/img/icon_mail.svg">
								<img class="main-profile-bt m-left-05rem" src="../../assets/img/icon_twitter.svg">
								<img class="main-profile-bt m-left-05rem" src="../../assets/img/icon_pixiv.svg">
							</div>
							<div class="f-ali-items-end f-jus-space-betweenwidth-100p">
								<!-- <p class="lh-120 fs-1_2rem co-brown">雨地屋しろー</p> -->
								<p class="lh-120 fs-1_2rem co-brown">仮ユーザー</p>
								<div class="d-flex m-left-05rem dis-only">
									<img class="main-profile-bt" src="../../assets/img/icon_mail.svg">
									<img class="main-profile-bt" src="../../assets/img/icon_twitter.svg">
									<img class="main-profile-bt" src="../../assets/img/icon_pixiv.svg">
								</div>
							</div>
							<!-- <p class="lh-120 fs-0_8rem m-left-1rem co-brown">└ illustrator:<br class="mob-only"><span class="mob-only main-profile-mbnamem-1"></span>Uchiya Shiro</p> -->
							<p class="lh-120 fs-0_8rem m-left-1rem co-brown">└ illustrator:<br class="mob-only"><span class="mob-only main-profile-mbnamem-1"></span>Kari_User</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
  name: 'MainProfile',
  components: {
		VerticalLine,
  },
  data: () => ({
      isActive: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) { 
	/* .pm-flame {
		width: 50vw;
		height: 29.48vw;
		background-image: url(../../assets/img/profile_flame.svg);
		display: grid;
		grid-template-rows: 4.5% 12% auto 4.5%;
		grid-template-columns: 3% 38% auto 3%;
	} */

	.main-profile-card {
		width: 25.714vw;
		height: 40vw;
		position: relative;
		perspective: 70vw;
	}

	.main-profile-card:hover .main-profile-left-side {
		transform: rotateY(-360deg);
	}

	.main-profile-card:hover .main-profile-right-side {
		transform: rotateY(360deg);
	}

	.main-profile-card:hover .main-profile-back-side {
		transform: translateZ(0);
		z-index: 1;
	}


.main-profile-back-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	transform: translateZ(-21.429vw);
	transition: z-index 0.4s step-end, transform 1s;
	background-color: #fafafa;
}

.main-profile-gradation {
	height: 100%;
	background: linear-gradient(0deg, rgba(231,176,108,1) 25%, rgba(255,174,202,1) 100%);
}

.main-profile-left-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	transform: rotateY(0deg);
	transform-origin: left;
	transition: transform 1.5s;
	background: url(../../assets/profile/profile_door_dmy.png) no-repeat;
	background-size: cover;
}

.main-profile-right-side {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	transform: rotateY(0deg);
	transform-origin: right;
	transition: transform 1.5s;
	background: url(../../assets/profile/profile_door_dmy.png) no-repeat;
	background-size: cover;
	background-position: -12.857vw;
}

.main-profile-bt {
	width: 2vw;
	height: 2vw;
	margin-right: 0.5rem;
}

























}
@media screen and (max-aspect-ratio: 1/1) {
.main-profile-card {
	width: 38.571vw;
	height: 60vw;
	position: relative;
	perspective: 105vw;
}

.main-profile-card:hover .main-profile-left-side {
	transform: rotateY(-360deg);
}

.main-profile-card:hover .main-profile-right-side {
	transform: rotateY(360deg);
}

.main-profile-card:hover .main-profile-back-side {
	transform: translateZ(0);
	z-index: 1;
}

.main-profile-back-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	transform: translateZ(-32.1435vw);
	transition: z-index 0.4s step-end, transform 1s;
	background-color: #fafafa;
}

.main-profile-gradation {
	height: 100%;
	background: linear-gradient(0deg, rgba(231,176,108,1) 25%, rgba(255,174,202,1) 100%);
}

.main-profile-left-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	transform: rotateY(0deg);
	transform-origin: left;
	transition: transform 1.5s;
	background: url(../../assets/profile/profile_door_dmy.png) no-repeat;
	background-size: cover;
}

.main-profile-right-side {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	transform: rotateY(0deg);
	transform-origin: right;
	transition: transform 1.5s;
	background: url(../../assets/profile/profile_door_dmy.png) no-repeat;
	background-size: cover;
	background-position: -19.2855vw;
}


























.main-profile-bt {
	width: 4vw;
	height: 4vw;
	margin-right: 0.5rem;
}

.main-profile-mbnamem-1 {
	margin-left: 1.2rem;
}
}
</style>