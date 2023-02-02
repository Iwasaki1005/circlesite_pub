<template>
	<div id="Loading">
		<div id="Pr_line"></div>
	</div>
</template>

<script>
import ProgressBar from 'progressbar.js'

export default {
	name: 'Loading',
	mounted: function() {
		// progressbar.js@1.0.0 version is used
		// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

		let Pr_line = document.getElementById('Pr_line');

		let bar = new ProgressBar.Line(Pr_line, {
			strokeWidth: 4,
			easing: 'easeInOut',
			duration: 1400,
			color: '#FFEA82',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: {width: '100%', height: '100%'},
			text: {
				style: {
					// Text color.
					// Default: same as stroke color (options.color)
					color: '#999',
					position: 'absolute',
					right: '49vw',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},
			from: {color: '#FFEA82'},
			to: {color: '#ED6A5A'},
			step: (state, bar) => {
				bar.setText(Math.round(bar.value() * 100) + ' %');
			}
		});

		let loading = document.getElementById('Loading');

		bar.animate(1.0, function () {
			loading.classList.add('fadeout');
				setTimeout(function(){ 
				loading.style.display = "none"; 
			}, 1000);
		});
	},
}
</script>

<style>
#Pr_line {
	width: 100vw;
	height: 0.2vw;
	position: fixed;
	top: 49vh;
	z-index: 900;
}

#Loading {
	background-color: #fafafa;
	width: calc(100vw - calc(100vw - 100%));
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 800;
}
</style>