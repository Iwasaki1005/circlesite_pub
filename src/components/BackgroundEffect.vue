<template>
	<section id="Background-effect" class="bg-effect">
		<img class="ef-fairy ef-f1" src="../assets/sprite/fairy1.svg">
		<img class="ef-fairy ef-f2" src="../assets/sprite/fairy1.svg">
		<img class="ef-fairy ef-f3" src="../assets/sprite/fairy1.svg">
		<img class="ef-fairy ef-f4" src="../assets/sprite/fairy1.svg">
		<img class="ef-fairy ef-f5" src="../assets/sprite/fairy1.svg">
		<img class="ef-fairy ef-f6" src="../assets/sprite/fairy1.svg">
		<img class="ef-fairy-d ef-fd1" src="../assets/sprite/fairy2.svg">
		<img class="ef-fairy-d ef-fd2" src="../assets/sprite/fairy2.svg">
		<img class="ef-fairy-d ef-fd3" src="../assets/sprite/fairy2.svg">
		<img class="ef-wing ef-w1" src="../assets/sprite/wing.svg">
		<img class="ef-wing ef-w2" src="../assets/sprite/wing.svg">
		<img class="ef-wing ef-w3" src="../assets/sprite/wing.svg">
		<img class="ef-wing ef-w4" src="../assets/sprite/wing.svg">
	</section>
</template>

<script>
export default {
  name: 'BackgroundEffect',
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) {
	.bg-effect {
		position: fixed;
		width: 100%;
		height: 100%;
	}

	.ef-fairy {
		position: fixed;
		width: 1.6vw;
		height: 1.6vw;
	}

	.ef-f1 {
		bottom: -2vw;
		right: -2vw;
		animation: ef-f1-anime 14s ease 0s infinite, fadeout-anime 14s linear 0s infinite;
	}

	@keyframes ef-f1-anime {
		95% {
			bottom: 10vw;
			right: 22vw;
		}
		100% {
			bottom: -2vw;
			right: -2vw;
		}
	}

	.ef-f2 {
		bottom: -6vw;
		right: 10vw;
		animation: ef-f2-anime 10s ease 0s infinite, fadeout-anime 10s linear 0s infinite;
		animation-delay: -1s;
	}

	@keyframes ef-f2-anime {
		95% {
			bottom: 6vw;
			right: 34vw;
		}
		100% {
			bottom: -6vw;
			right: 10vw;
		}
	}

	.ef-f3 {
		bottom: -6vw;
		right: 26vw;
		animation: ef-f3-anime 12s ease 0s infinite, fadeout-anime 12s linear 0s infinite;
		animation-delay: -2s;
	}

	@keyframes ef-f3-anime {
		95% {
			bottom: 6vw;
			right: 50vw;
		}
		100% {
			bottom: -6vw;
			right: 26vw;
		}
	}

	.ef-f4 {
		bottom: 10vw;
		right: -19vw;
		animation: ef-f4-anime 9s ease -3s infinite, fadeout-anime 9s linear -3s infinite;
	}

	@keyframes ef-f4-anime {
		95% {
			bottom: 22vw;
			right: 5vw;
		}
		100% {
			bottom: 10vw;
			right: -19vw;
		}
	}

	.ef-f5 {
		bottom: -8vw;
		right: -16vw;
		animation: ef-f5-anime 11s ease 0s infinite, fadeout-anime 11s linear 0s infinite;
	}

	@keyframes ef-f5-anime {
		95% {
			bottom: 4vw;
			right: 8vw;
		}
		100% {
			bottom: -8vw;
			right: -16vw;
		}
	}

	.ef-f6 {
		bottom: -1vw;
		right: 16vw;
		animation: ef-f6-anime 14s ease 7s infinite, fadeout-anime 14s linear 7s infinite;
	}

	@keyframes ef-f6-anime {
		95% {
			bottom: 11vw;
			right: 40vw;
		}
		100% {
			bottom: -1vw;
			right: 16vw;
		}
	}

	.ef-fairy-d {
		position: fixed;
		width: 0.8vw;
		height: 0.8vw;
	}

	.ef-fd1 {
		bottom: -6vw;
		right: -6vw;
		animation: ef-fd1-anime 16s ease 0s infinite, fadeout-anime 16s linear 0s infinite;
	}

	@keyframes ef-fd1-anime {
		95% {
			bottom: 6vw;
			right: 18vw;
		}
		100% {
			bottom: -6vw;
			right: -6vw;
		}
	}

	.ef-fd2 {
		bottom: -10vw;
		right: -22vw;
		animation: ef-fd2-anime 12s ease -4s infinite, fadeout-anime 12s linear -4s infinite;
	}

	@keyframes ef-fd2-anime {
		95% {
			bottom: 2vw;
			right: 2vw;
		}
		100% {
			bottom: -10vw;
			right: -22vw;
		}
	}

	.ef-fd3 {
		bottom: -4vw;
		right: -16vw;
		animation: ef-fd3-anime 12s ease -2s infinite, fadeout-anime 12s linear -2s infinite;
	}

	@keyframes ef-fd3-anime {
		95% {
			bottom: 8vw;
			right: 8vw;
		}
		100% {
			bottom: -4vw;
			right: -16vw;
		}
	}

	.ef-wing {
		position: fixed;
		width: 2vw;
		height: 2vw;
	}

	.ef-w1 {
		bottom: -2vw;
		right: -2vw;
		animation: ef-w1-anime 8s ease 2s infinite, fadeout-anime 8s linear 2s infinite;
	}

	@keyframes ef-w1-anime {
		20% {
			bottom: -2vw;
			right: -2vw;
		}
		95% {
			bottom: 10vw;
			right: 22vw;
			transform: rotateY(180deg);
			transform: scale(-1, 1);
		}
		100% {
			bottom: -2vw;
			right: -2vw;
		}
	}

	.ef-w2 {
		bottom: -7vw;
		right: 21vw;
		animation: ef-w2-anime 6s ease 0s infinite, fadeout-anime 6s linear 0s infinite;
	}

	@keyframes ef-w2-anime {
		10% {
			bottom: -7vw;
			right: 21vw;
		}
		95% {
			bottom: 5vw;
			right: 45vw;
			transform: rotateY(360deg);
		}
		100% {
			bottom: -7vw;
			right: 21vw;
		}
	}

	.ef-w3 {
		bottom: -5vw;
		right: -14vw;
		animation: ef-w3-anime 8s ease 0s infinite, fadeout-anime 8s linear 0s infinite;
	}

	@keyframes ef-w3-anime {
		10% {
			bottom: -5vw;
			right: -14vw;
		}
		95% {
			bottom: 7vw;
			right: 10vw;
			transform: rotateY(360deg);
		}
		100% {
			bottom: -5vw;
			right: -14vw;
		}
	}

	.ef-w4 {
		bottom: -2vw;
		right: 8vw;
		animation: ef-w4-anime 14s ease 0s infinite, fadeout-anime 14s linear 0s infinite;
	}

	@keyframes ef-w4-anime {
		30% {
			bottom: -2vw;
			right: 8vw;
		}

		95% {
			bottom: 10vw;
			right: 32vw;
			transform: rotateY(180deg);
			transform: scale(-1, 1);
		}
		100% {
			bottom: -2vw;
			right: 8vw;
		}
	}

	/*

	bottom +12vw  right +24vw
	アニメーション速度は多少ばらす
	軽いものほど早く動く

	*/

	@keyframes fadeout-anime {
		60% {
			opacity: 1;
		}
		95% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.bg-effect {
		position: fixed;
		width: 100%;
		height: 100%;
	}

	.ef-fairy {
		position: fixed;
		width: 5vw;
		height: 5vw;
	}

	.ef-f1 {
		bottom: -2vw;
		right: -2vw;
		animation: ef-f1-anime 14s ease 0s infinite, fadeout-anime 14s linear 0s infinite;
	}

	@keyframes ef-f1-anime {
		95% {
			bottom: 26vw;
			right: 34vw;
		}
		100% {
			bottom: -2vw;
			right: -2vw;
		}
	}

	.ef-f2 {
		bottom: -6vw;
		right: 10vw;
		animation: ef-f2-anime 10s ease 0s infinite, fadeout-anime 10s linear 0s infinite;
		animation-delay: -1s;
	}

	@keyframes ef-f2-anime {
		95% {
			bottom: 22vw;
			right: 46vw;
		}
		100% {
			bottom: -6vw;
			right: 10vw;
		}
	}

	.ef-f3 {
		bottom: -6vw;
		right: 26vw;
		animation: ef-f3-anime 12s ease 0s infinite, fadeout-anime 12s linear 0s infinite;
		animation-delay: -2s;
	}

	@keyframes ef-f3-anime {
		95% {
			bottom: 22vw;
			right: 62vw;
		}
		100% {
			bottom: -6vw;
			right: 26vw;
		}
	}

	.ef-f4 {
		bottom: 10vw;
		right: -19vw;
		animation: ef-f4-anime 9s ease -3s infinite, fadeout-anime 9s linear -3s infinite;
	}

	@keyframes ef-f4-anime {
		95% {
			bottom: 38vw;
			right: 17vw;
		}
		100% {
			bottom: 10vw;
			right: -19vw;
		}
	}

	.ef-f5 {
		bottom: -8vw;
		right: -16vw;
		animation: ef-f5-anime 11s ease 0s infinite, fadeout-anime 11s linear 0s infinite;
	}

	@keyframes ef-f5-anime {
		95% {
			bottom: 20vw;
			right: 20vw;
		}
		100% {
			bottom: -8vw;
			right: -16vw;
		}
	}

	.ef-f6 {
		bottom: -1vw;
		right: 16vw;
		animation: ef-f6-anime 14s ease 7s infinite, fadeout-anime 14s linear 7s infinite;
	}

	@keyframes ef-f6-anime {
		95% {
			bottom: 27vw;
			right: 52vw;
		}
		100% {
			bottom: -1vw;
			right: 16vw;
		}
	}

	.ef-fairy-d {
		position: fixed;
		width: 2vw;
		height: 2vw;
	}

	.ef-fd1 {
		bottom: -6vw;
		right: -6vw;
		animation: ef-fd1-anime 16s ease 0s infinite, fadeout-anime 16s linear 0s infinite;
	}

	@keyframes ef-fd1-anime {
		95% {
			bottom: 22vw;
			right: 30vw;
		}
		100% {
			bottom: -6vw;
			right: -6vw;
		}
	}

	.ef-fd2 {
		bottom: -10vw;
		right: -22vw;
		animation: ef-fd2-anime 12s ease -4s infinite, fadeout-anime 12s linear -4s infinite;
	}

	@keyframes ef-fd2-anime {
		95% {
			bottom: 18vw;
			right: 14vw;
		}
		100% {
			bottom: -10vw;
			right: -22vw;
		}
	}

	.ef-fd3 {
		bottom: -4vw;
		right: -16vw;
		animation: ef-fd3-anime 12s ease -2s infinite, fadeout-anime 12s linear -2s infinite;
	}

	@keyframes ef-fd3-anime {
		95% {
			bottom: 24vw;
			right: 20vw;
		}
		100% {
			bottom: -4vw;
			right: -16vw;
		}
	}

	.ef-wing {
		position: fixed;
		width: 4vw;
		height: 4vw;
	}

	.ef-w1 {
		bottom: -2vw;
		right: -2vw;
		animation: ef-w1-anime 8s ease 2s infinite, fadeout-anime 8s linear 2s infinite;
	}

	@keyframes ef-w1-anime {
		20% {
			bottom: -2vw;
			right: -2vw;
		}
		95% {
			bottom: 26vw;
			right: 34vw;
			transform: rotateY(180deg);
			transform: scale(-1, 1);
		}
		100% {
			bottom: -2vw;
			right: -2vw;
		}
	}

	.ef-w2 {
		bottom: -7vw;
		right: 21vw;
		animation: ef-w2-anime 6s ease 0s infinite, fadeout-anime 6s linear 0s infinite;
	}

	@keyframes ef-w2-anime {
		10% {
			bottom: -7vw;
			right: 21vw;
		}
		95% {
			bottom: 21vw;
			right: 57vw;
			transform: rotateY(360deg);
		}
		100% {
			bottom: -7vw;
			right: 21vw;
		}
	}

	.ef-w3 {
		bottom: -5vw;
		right: -14vw;
		animation: ef-w3-anime 8s ease 0s infinite, fadeout-anime 8s linear 0s infinite;
	}

	@keyframes ef-w3-anime {
		10% {
			bottom: -5vw;
			right: -14vw;
		}
		95% {
			bottom: 23vw;
			right: 22vw;
			transform: rotateY(360deg);
		}
		100% {
			bottom: -5vw;
			right: -14vw;
		}
	}

	.ef-w4 {
		bottom: -2vw;
		right: 8vw;
		animation: ef-w4-anime 14s ease 0s infinite, fadeout-anime 14s linear 0s infinite;
	}

	@keyframes ef-w4-anime {
		30% {
			bottom: -2vw;
			right: 8vw;
		}

		95% {
			bottom: 26vw;
			right: 44vw;
			transform: rotateY(180deg);
			transform: scale(-1, 1);
		}
		100% {
			bottom: -2vw;
			right: 8vw;
		}
	}

	/*

	bottom +28vw  right +36vw
	アニメーション速度は多少ばらす
	軽いものほど早く動く

	*/

	@keyframes fadeout-anime {
		60% {
			opacity: 1;
		}
		95% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
}
</style>