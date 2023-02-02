<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="Game" class="section sa sa--up d-none">
			<h2 id="news-index" class="font-E3 text-center scroll-fadein index-anime"><span id="" class="">Game</span></h2>
			<VerticalLine />
			<div class=" sa sa--up">
				<div class="d-flex">
					<div class="width-10p">
						<p class="font-E3 vertical-text center">Game <span class="v-line">────────────────────────────────────────</span></p>
					</div>
					<div class="width-90p">
						<div class="game-slideshow d-flex">
							<div id="game-slide1" class="game-slide slide-position1 overflow-hidden">
								<img class="game-slide img-zoom" src="https://clip.narinari.com/wp-content/uploads/2020/10/100_wakrariKV-724x1024.jpg">
							</div>
							<div id="game-slide2" class="game-slide slide-position2 overflow-hidden">
								<img class="game-slide img-zoom" src="https://i.pinimg.com/474x/d6/34/be/d634bed00056ea58fbf6ebfd1de74791.jpg">
							</div>
							<div id="game-slide3" class="game-slide slide-position0 overflow-hidden">
								<img class="game-slide img-zoom" src="https://lohas.nicoseiga.jp/thumb/9655794i?1568824268">
							</div>
						</div>
					</div>
				</div>
				<div class="d-flex">
					<div class="width-10p">
						<div class="f-ali-jus-center">
							<i id="slide-bt-back" class="fas fa-chevron-circle-left slide-arrow"></i>
							<i id="slide-bt-next" class="fas fa-chevron-circle-right slide-arrow"></i>
						</div>
					</div>
					<div class="width-90p">
						<span>テキストテキストテキストテキストテキスト</span>
					</div>
				</div>
			</div>
		</section>
		<div>
<!-- Swiper START -->
<div class="swiper-container">
	<!-- メイン表示部分 -->
	<div class="swiper-wrapper">
		<!-- 各スライド -->
		<div class="swiper-slide">Slide 1</div>
		<div class="swiper-slide">Slide 2</div>
		<div class="swiper-slide">Slide 3</div>
		<div class="swiper-slide">Slide 4</div>
	</div>
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>
<!-- Swiper END -->
		</div>
	</v-lazy>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
  name: 'MainGame',
  components: {
		VerticalLine,
  },
  data: () => ({
      isActive: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()

		/*--------------------------------------------------------------------------
		 *
		 * game-slide.js
		 *
		 *
		--------------------------------------------------------------------------*/
		const gameslide1 = document.getElementById('game-slide1')
		const gameslide2 = document.getElementById('game-slide2')
		const gameslide3 = document.getElementById('game-slide3')

		const slidebtnext = document.getElementById('slide-bt-next')
		const slidebtback = document.getElementById('slide-bt-back')

		var parameter_slidestate = 1;

		const autoslide = () => {
			parameter_slidestate = parameter_slidestate +1;
			if (parameter_slidestate == 2) {
				gameslide3.classList.add('opacity-0');
				gameslide3.classList.remove('slide-position0');
				gameslide3.classList.add('slide-position3');
				setTimeout(function(){
					gameslide3.classList.remove('opacity-0');
				}, 10);
				setTimeout(function(){
					slidebtnext.classList.add('isdisable');
					slidebtback.classList.add('isdisable');
					gameslide1.classList.add('tr-duration-1s');
					gameslide2.classList.add('tr-duration-1s');
					gameslide3.classList.add('tr-duration-1s');
					gameslide1.classList.remove('slide-position1');
					gameslide1.classList.add('slide-position0');
					gameslide2.classList.remove('slide-position2');
					gameslide2.classList.add('slide-position1');
					gameslide3.classList.remove('slide-position3');
					gameslide3.classList.add('slide-position2');
				}, 20);
				setTimeout(function(){
					gameslide1.classList.remove('tr-duration-1s');
					gameslide2.classList.remove('tr-duration-1s');
					gameslide3.classList.remove('tr-duration-1s');
					slidebtnext.classList.remove('isdisable');
					slidebtback.classList.remove('isdisable');
				}, 1050);
				// console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						gameslide1.classList.add('opacity-0');
						gameslide1.classList.remove('slide-position0');
						gameslide1.classList.add('slide-position3');
						setTimeout(function(){
							gameslide1.classList.remove('opacity-0');
						}, 10);
						setTimeout(function(){
							slidebtnext.classList.add('isdisable');
							slidebtback.classList.add('isdisable');
							gameslide1.classList.add('tr-duration-1s');
							gameslide2.classList.add('tr-duration-1s');
							gameslide3.classList.add('tr-duration-1s');
							gameslide1.classList.remove('slide-position3');
							gameslide1.classList.add('slide-position2');
							gameslide2.classList.remove('slide-position1');
							gameslide2.classList.add('slide-position0');
							gameslide3.classList.remove('slide-position2');
							gameslide3.classList.add('slide-position1');
						}, 20);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
						// console.log('parameter_slidestate = 3')
					}	else {
							if (parameter_slidestate == 4) {
								gameslide2.classList.add('opacity-0');
								gameslide2.classList.remove('slide-position0');
								gameslide2.classList.add('slide-position3');
								setTimeout(function(){
									gameslide2.classList.remove('opacity-0');
								}, 10);
								setTimeout(function(){
									slidebtnext.classList.add('isdisable');
									slidebtback.classList.add('isdisable');
									gameslide1.classList.add('tr-duration-1s');
									gameslide2.classList.add('tr-duration-1s');
									gameslide3.classList.add('tr-duration-1s');
									gameslide1.classList.remove('slide-position2');
									gameslide1.classList.add('slide-position1');
									gameslide2.classList.remove('slide-position3');
									gameslide2.classList.add('slide-position2');
									gameslide3.classList.remove('slide-position1');
									gameslide3.classList.add('slide-position0');
								}, 20);
								setTimeout(function(){
									gameslide1.classList.remove('tr-duration-1s');
									gameslide2.classList.remove('tr-duration-1s');
									gameslide3.classList.remove('tr-duration-1s');
									slidebtnext.classList.remove('isdisable');
									slidebtback.classList.remove('isdisable');
								}, 1050);
								parameter_slidestate = 1 ;
								// console.log('parameter_slidestate = 1')
							}
					}
				}
		}
		let interval_id = setInterval(autoslide, 5000);
		// console.log('inteval_id =', interval_id)

		slidebtnext.addEventListener('click', function () {
			parameter_slidestate = parameter_slidestate +1;
			clearInterval(interval_id);
			interval_id = setInterval(autoslide, 5000);
			// console.log('inteval_id =', interval_id)
			if (parameter_slidestate == 2) {
				gameslide3.classList.add('opacity-0');
				gameslide3.classList.remove('slide-position0');
				gameslide3.classList.add('slide-position3');
				setTimeout(function(){
					gameslide3.classList.remove('opacity-0');
				}, 10);
				setTimeout(function(){
					slidebtnext.classList.add('isdisable');
					slidebtback.classList.add('isdisable');
					gameslide1.classList.add('tr-duration-1s');
					gameslide2.classList.add('tr-duration-1s');
					gameslide3.classList.add('tr-duration-1s');
					gameslide1.classList.remove('slide-position1');
					gameslide1.classList.add('slide-position0');
					gameslide2.classList.remove('slide-position2');
					gameslide2.classList.add('slide-position1');
					gameslide3.classList.remove('slide-position3');
					gameslide3.classList.add('slide-position2');
				}, 20);
				setTimeout(function(){
					gameslide1.classList.remove('tr-duration-1s');
					gameslide2.classList.remove('tr-duration-1s');
					gameslide3.classList.remove('tr-duration-1s');
					slidebtnext.classList.remove('isdisable');
					slidebtback.classList.remove('isdisable');
				}, 1050);
				// console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						gameslide1.classList.add('opacity-0');
						gameslide1.classList.remove('slide-position0');
						gameslide1.classList.add('slide-position3');
						setTimeout(function(){
							gameslide1.classList.remove('opacity-0');
						}, 10);
						setTimeout(function(){
							slidebtnext.classList.add('isdisable');
							slidebtback.classList.add('isdisable');
							gameslide1.classList.add('tr-duration-1s');
							gameslide2.classList.add('tr-duration-1s');
							gameslide3.classList.add('tr-duration-1s');
							gameslide1.classList.remove('slide-position3');
							gameslide1.classList.add('slide-position2');
							gameslide2.classList.remove('slide-position1');
							gameslide2.classList.add('slide-position0');
							gameslide3.classList.remove('slide-position2');
							gameslide3.classList.add('slide-position1');
						}, 20);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
						// console.log('parameter_slidestate = 3')
					}	else {
							if (parameter_slidestate == 4) {
								gameslide2.classList.add('opacity-0');
								gameslide2.classList.remove('slide-position0');
								gameslide2.classList.add('slide-position3');
								setTimeout(function(){
									gameslide2.classList.remove('opacity-0');
								}, 10);
								setTimeout(function(){
									slidebtnext.classList.add('isdisable');
									slidebtback.classList.add('isdisable');
									gameslide1.classList.add('tr-duration-1s');
									gameslide2.classList.add('tr-duration-1s');
									gameslide3.classList.add('tr-duration-1s');
									gameslide1.classList.remove('slide-position2');
									gameslide1.classList.add('slide-position1');
									gameslide2.classList.remove('slide-position3');
									gameslide2.classList.add('slide-position2');
									gameslide3.classList.remove('slide-position1');
									gameslide3.classList.add('slide-position0');
								}, 20);
								setTimeout(function(){
									gameslide1.classList.remove('tr-duration-1s');
									gameslide2.classList.remove('tr-duration-1s');
									gameslide3.classList.remove('tr-duration-1s');
									slidebtnext.classList.remove('isdisable');
									slidebtback.classList.remove('isdisable');
								}, 1050);
								parameter_slidestate = 1 ;
								// console.log('parameter_slidestate = 1')
							}
					}
				}
		});

		slidebtback.addEventListener('click', function () {
			parameter_slidestate = parameter_slidestate -1;
			clearInterval(interval_id);
			interval_id = setInterval(autoslide, 5000);
			// console.log('inteval_id =', interval_id)
			if (parameter_slidestate == 2) {
				// 0にいるスライド２が1に移動/1にいるスライド３が2に移動/2にいるスライド１が3に移動
				//その後、スライド1が0に瞬間移動
				slidebtnext.classList.add('isdisable');
				slidebtback.classList.add('isdisable');
				gameslide1.classList.add('tr-duration-1s');
				gameslide2.classList.add('tr-duration-1s');
				gameslide3.classList.add('tr-duration-1s');
				gameslide1.classList.remove('slide-position2');
				gameslide1.classList.add('slide-position3');
				gameslide2.classList.remove('slide-position0');
				gameslide2.classList.add('slide-position1');
				gameslide3.classList.remove('slide-position1');
				gameslide3.classList.add('slide-position2');
				setTimeout(function(){
					gameslide1.classList.add('opacity-0');
					gameslide1.classList.remove('slide-position3');
					gameslide1.classList.add('slide-position0');
				}, 1010);
				setTimeout(function(){
					gameslide1.classList.remove('opacity-0');
				}, 1020);
				setTimeout(function(){
					gameslide1.classList.remove('tr-duration-1s');
					gameslide2.classList.remove('tr-duration-1s');
					gameslide3.classList.remove('tr-duration-1s');
					slidebtnext.classList.remove('isdisable');
					slidebtback.classList.remove('isdisable');
				}, 1050);
				// console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						// 0にいるスライド３が1に移動/1にいるスライド１が2に移動/2にいるスライド２が3に移動
						//その後、スライド2が0に瞬間移動
						slidebtnext.classList.add('isdisable');
						slidebtback.classList.add('isdisable');
						gameslide1.classList.add('tr-duration-1s');
						gameslide2.classList.add('tr-duration-1s');
						gameslide3.classList.add('tr-duration-1s');
						gameslide1.classList.remove('slide-position1');
						gameslide1.classList.add('slide-position2');
						gameslide2.classList.remove('slide-position2');
						gameslide2.classList.add('slide-position3');
						gameslide3.classList.remove('slide-position0');
						gameslide3.classList.add('slide-position1');
						setTimeout(function(){
							gameslide2.classList.add('opacity-0');
							gameslide2.classList.remove('slide-position3');
							gameslide2.classList.add('slide-position0');
						}, 1010);
						setTimeout(function(){
							gameslide2.classList.remove('opacity-0');
						}, 1020);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
						// console.log('parameter_slidestate = 3')
					}	else {
							if (parameter_slidestate == 1) {
						// 0にいるスライド１が1に移動/1にいるスライド２が2に移動/2にいるスライド３が3に移動
						//その後、スライド３が0に瞬間移動
						slidebtnext.classList.add('isdisable');
						slidebtback.classList.add('isdisable');
						gameslide1.classList.add('tr-duration-1s');
						gameslide2.classList.add('tr-duration-1s');
						gameslide3.classList.add('tr-duration-1s');
						gameslide1.classList.remove('slide-position0');
						gameslide1.classList.add('slide-position1');
						gameslide2.classList.remove('slide-position1');
						gameslide2.classList.add('slide-position2');
						gameslide3.classList.remove('slide-position2');
						gameslide3.classList.add('slide-position3');
						setTimeout(function(){
							gameslide3.classList.add('opacity-0');
							gameslide3.classList.remove('slide-position3');
							gameslide3.classList.add('slide-position0');
						}, 1010);
						setTimeout(function(){
							gameslide3.classList.remove('opacity-0');
						}, 1020);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
								// console.log('parameter_slidestate = 1')
							}	else {
								if (parameter_slidestate == 0) {
									// 0にいるスライド３が1に移動/1にいるスライド１が2に移動/2にいるスライド２が3に移動
									//その後、スライド2が0に瞬間移動
									slidebtnext.classList.add('isdisable');
									slidebtback.classList.add('isdisable');
									gameslide1.classList.add('tr-duration-1s');
									gameslide2.classList.add('tr-duration-1s');
									gameslide3.classList.add('tr-duration-1s');
									gameslide1.classList.remove('slide-position1');
									gameslide1.classList.add('slide-position2');
									gameslide2.classList.remove('slide-position2');
									gameslide2.classList.add('slide-position3');
									gameslide3.classList.remove('slide-position0');
									gameslide3.classList.remove('slide-position0');
									gameslide3.classList.add('slide-position1');
									setTimeout(function(){
										gameslide2.classList.add('opacity-0');
										gameslide2.classList.remove('slide-position3');
										gameslide2.classList.add('slide-position0');
									}, 1010);
									setTimeout(function(){
										gameslide2.classList.remove('opacity-0');
									}, 1020);
									setTimeout(function(){
										gameslide1.classList.remove('tr-duration-1s');
										gameslide2.classList.remove('tr-duration-1s');
										gameslide3.classList.remove('tr-duration-1s');
										slidebtnext.classList.remove('isdisable');
										slidebtback.classList.remove('isdisable');
									}, 1050);
									parameter_slidestate = 3;
									// console.log('parameter_slidestate = 3')
								}
							}
					}
				}
		});
  },
}
</script>

<style>
/* 全体のスタイル */
.swiper-wrapper {
	width: 100%;
	height: 250px;
}
/* 全スライド共通スタイル */
.swiper-slide {
	color: #ffffff;
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 250px;
}
/* 4の倍数＋1枚目のスライドのスタイル（1枚目、5枚目…） */
.swiper-slide:nth-child(4n+1) {
	background-color: #EECB27;
}
/* 4の倍数＋2枚目のスライドのスタイル（2枚目、6枚目…） */
.swiper-slide:nth-child(4n+2) {
	background-color: #E13239;
}
/* 4の倍数＋3枚目のスライドのスタイル（3枚目、7枚目…） */
.swiper-slide:nth-child(4n+3) {
	background-color: #1F1762;
}
/* 4の倍数＋4枚目のスライドのスタイル（4枚目、8枚目…） */
.swiper-slide:nth-child(4n+4) {
	background-color: #BEDAE5;
}



@media screen and (min-aspect-ratio: 1/1) {
.game-slideshow {
	width: 500%;
	height: 33vw;
	overflow: hidden;
	position: relative;
}

.game-slide {
	width: 60vw;
	height: 30vw;
	position: absolute;
}

.slide-position1 {
	left: 0vw;
}

.slide-position2 {
	left: 70vw;
}

.slide-position3 {
	left: 140vw;
}

.slide-position0 {
	left: -65vw;
}

.slide-arrow {
	font-size: 1.8rem;
	color: #e7b06c;
	margin: 0px 0.2em;
}
}

@media screen and (max-aspect-ratio: 1/1) {
.game-slideshow {
	width: 500%;
	height: 33vw;
	overflow: hidden;
	position: relative;
}

.game-slide {
	width: 60vw;
	height: 30vw;
	position: absolute;
}

.slide-position1 {
	left: 0vw;
}

.slide-position2 {
	left: 70vw;
}

.slide-position3 {
	left: 140vw;
}

.slide-position0 {
	left: -65vw;
}

.slide-arrow {
	font-size: 1.8rem;
	color: #e7b06c;
	margin: 0px 0.2em;
}
}

</style>