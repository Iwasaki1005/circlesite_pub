<template>
	<div id="NeverLand-top" class="main-top">
		<div class="main-top-dia-con">
			<img class="main-top-dia" src="../../assets/sprite/triangle1.svg">
		</div>
		<div class="main-top-logo-grid f-ali-jus-center_dis">
			<img class="main-top-logo" src="../../assets/logo/neverlandf_logo1.png" alt=”ねばーランド.Fロゴ”>
		</div>
		<div class="main-top-tips1">
			<img class="main-top-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy1.png">
			<img class="main-top-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy2.png">
		</div>
		<div class="main-top-tips2">
			<img class="main-top-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy3.png">
			<img class="main-top-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy1.png">
			<img class="main-top-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy2.png">
			<img class="main-top-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy3.png">
		</div>
		<div class="main-top-visual">
			<!-- visual -->
		</div>
	</div>
</template>

<script>
export default {
  name: 'MainTop',
  data: () => ({
      isActive: false,
  }),
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) {
	.main-top {
		height: 140vh;
		min-height: 60vw;
		width: 100%;
		display: grid;
		grid-template-rows: minmax(34vw, 80vh) minmax(8vw, 20vh) minmax(17vw, 40vh);
		grid-template-columns: 30% 20% 50%;
		/* background-color: aqua; */
	}

	.main-top-logo {
		width: 25vw;
	}

	.main-top-logo-grid {
		grid-row: 1 / 2;
		grid-column: 1 / 3;
	}

	.main-top-tips1 {
		grid-row: 2 / 3;
		grid-column: 1 / 3;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 1.5rem;
	}

	.main-top-tips2 {
		grid-row: 3 / 4;
		grid-column: 1 / 3;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 0 1.5rem;
	}

	.main-top-visual {
		grid-row: 1 / 4;
		grid-column: 2 / 4;
		/* background-color: rgba(252, 154, 129, 0.479); */
	}

	.main-top-banner {
		width: 20vw;
		box-shadow: 0 0 0.8vw 0.1vw #e7b06c;
	}

	.main-top-banner:hover {
		width: 20vw;
		box-shadow: 0 0 0.8vw 0.1vw #f69ac3;
	}

	.main-top-dia-con {
		grid-row: 1 / 3;
		grid-column: 1 / 2;
		display: flex;
		align-items: flex-start;
	}

	.main-top-dia {
		width: 10vw;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.main-top {
		height: 137.5vh;
		width: 100%;
		display: grid;
		grid-template-rows: 100vh 12.5vh 25vh;
		grid-template-columns: 20% 30% 50%;
	}

	.main-top-logo {
		width: 60vw;
		margin-bottom: 1rem;
		margin-left: 0.5rem;
	}

	.main-top-logo-grid {
		grid-row: 1 / 2;
		grid-column: 1 / 4;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	.main-top-tips1 {
		grid-row: 2 / 3;
		grid-column: 1 / 4;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.main-top-tips2 {
		grid-row: 3 / 4;
		grid-column: 1 / 4;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.main-top-visual {
		grid-row: 1 / 3;
		grid-column: 1 / 4;
	}

	.main-top-banner {
		width: 40vw;
		box-shadow: 0 0 0.8vw 0.1vw #e7b06c;
	}

	.main-top-dia {
		width: 30vw;
	}

	.main-top-dia-con {
		grid-row: 1 / 2;
		grid-column: 1 / 3;
		display: flex;
		align-items: flex-start;
	}
}
</style>