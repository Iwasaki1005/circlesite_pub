<template>
	<nav id="Globalmenu" class="globalmenu">
		<div class="globalmenu-tb">
			<div id="hamburger-button" class="globalmenu-burger">
				<span id="globalmenu-burger-span1" class="globalmenu-burger-span1"></span>
				<span id="globalmenu-burger-span2" class="globalmenu-burger-span2"></span>
				<span id="globalmenu-burger-span3" class="globalmenu-burger-span3"></span>
			</div>
		</div>
		<div class="globalmenu-index">
			<div class="globalmenu-vertical font-E2"><span class="m-bottom-05rem">NEVER</span><span class="m-bottom-1rem">RAND.F</span>OFFICIAL SITE</div>
		</div>
		<div class="globalmenu-tb">
			<ShareNetwork network="Twitter" url="https://news.vuejs.org/issues/180" title="ねばーランド.F" hashtags="ねばーランド.F">
				<div class="tw-round f-ali-jus-center">
					<i class="fab fa-twitter"></i>
				</div>
			</ShareNetwork>
		</div>
	</nav>
</template>

<script>
export default {
   name: 'Glmenu',
   mounted: function() {
	const dropen = document.getElementById('hamburger-button');
	const drmenu = document.getElementById('Drawermenu');

	const drcontent1 = document.getElementById('dr-content1');
	const drcontent2 = document.getElementById('dr-content2');
	const drcontent3 = document.getElementById('dr-content3');
	const drcontent4 = document.getElementById('dr-content4');

	const glspan1 = document.getElementById('globalmenu-burger-span1');
	const glspan2 = document.getElementById('globalmenu-burger-span2');
	const glspan3 = document.getElementById('globalmenu-burger-span3');

	function DrOpen () {
		//1.位置を少し下にずらす//
		drcontent1.classList.add('drawermenu-saup');
		drcontent2.classList.add('drawermenu-saup');
		drcontent3.classList.add('drawermenu-saup');
		drcontent4.classList.add('drawermenu-saup');
		//2.時間差、アニメーション時間を設定//
		drcontent1.classList.add('tr-delay-01s');
		drcontent2.classList.add('tr-delay-02s');
		drcontent3.classList.add('tr-delay-03s');
		drcontent4.classList.add('tr-delay-04s');
		drcontent1.classList.add('tr-duration-05s');
		drcontent2.classList.add('tr-duration-05s');
		drcontent3.classList.add('tr-duration-05s');
		drcontent4.classList.add('tr-duration-05s');
		//※ここでウェイトがほしい//
		setTimeout(function(){
			//3.透明度と位置の設定のクラスを削除しメニューが開かれる//
			dropen.classList.add('switch-dr');
			drmenu.classList.remove('drawermenu-hide');
			glspan1.classList.add('globalmenu-burger-span1-active');
			glspan2.classList.add('globalmenu-burger-span2-active');
			glspan3.classList.add('globalmenu-burger-span3-active');
			drcontent1.classList.remove('drawermenu-saup');
			drcontent2.classList.remove('drawermenu-saup');
			drcontent3.classList.remove('drawermenu-saup');
			drcontent4.classList.remove('drawermenu-saup');
			drcontent1.classList.remove('opacity-0');
			drcontent2.classList.remove('opacity-0');
			drcontent3.classList.remove('opacity-0');
			drcontent4.classList.remove('opacity-0');
		}, 10);
	}
 
	function DrClose () {
		//1.時間差の設定を削除//
			drcontent1.classList.remove('tr-delay-01s');
			drcontent2.classList.remove('tr-delay-02s');
			drcontent3.classList.remove('tr-delay-03s');
			drcontent4.classList.remove('tr-delay-04s');
			//2.フェードアウト//
			dropen.classList.remove('switch-dr');
			drmenu.classList.add('drawermenu-hide');
			glspan1.classList.remove('globalmenu-burger-span1-active');
			glspan2.classList.remove('globalmenu-burger-span2-active');
			glspan3.classList.remove('globalmenu-burger-span3-active');
			drcontent1.classList.add('opacity-0');
			drcontent2.classList.add('opacity-0');
			drcontent3.classList.add('opacity-0');
			drcontent4.classList.add('opacity-0');
			drcontent1.classList.remove('tr-delay-01s');
			drcontent2.classList.remove('tr-delay-02s');
			drcontent3.classList.remove('tr-delay-03s');
			drcontent4.classList.remove('tr-delay-04s');
			setTimeout(function(){
				//3.アニメーション時間の設定を削除//
				drcontent1.classList.remove('tr-duration-05s');
				drcontent2.classList.remove('tr-duration-05s');
				drcontent3.classList.remove('tr-duration-05s');
				drcontent4.classList.remove('tr-duration-05s');
			}, 200);
	}

	dropen.addEventListener('click', function () {
		if (dropen.classList.contains('switch-dr') == false ) {
			DrOpen();
		}
		else {
			DrClose();
		}
	});

	document.addEventListener('DOMContentLoaded', function(){
	function menuClick(){
		DrClose();
	}
	// 引数に指定したclassの値をもつ要素をすべて取得
	const menus = document.getElementsByClassName('closeevent');
	// 上記で取得したすべての要素に対してクリックイベントを適用
	for(let i = 0; i < menus.length; i++) {
		menus[i].addEventListener('click', menuClick, false);
	}
	}, false);

	},
}
</script>

<style>
.globalmenu-index {
	height: 60vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.globalmenu-tb {
	height: 20vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.globalmenu-vertical {
	writing-mode: vertical-rl;
	color: #e7b06c;
	font-size: 0.8rem;
}

@media screen and (min-aspect-ratio: 1/1) {
	.globalmenu {
		height: 100vh;
		width: 5vw;
		position: fixed;
		top: 0;
		right: 2vw;
	}

	.globalmenu-burger {
		display : block;
		position: fixed;
		right : 2.8vw;
		top   : 4vw;
		width : 3.5vw;
		height: 3.5vw;
		cursor: pointer;
		text-align: center;
	}

	.globalmenu-burger span {
		display : block;
		position: absolute;
		width   : 2.8vw;
		height  : 0.15vw;
		left    : 0.4vw;
		background : #e7b06c;
		transition: 0.5s ease-in-out;
	}

	.globalmenu-burger-span1 {
		top: 0.71vw;
	}

	.globalmenu-burger-span2 {
		top: 1.41vw;
	}

	.globalmenu-burger-span3 {
		top: 2.14vw;
	}

	.globalmenu-burger-span1-active {
		top : 1.14vw;
		left: 0.42vw;
		transform: rotate(315deg);
	}

	.globalmenu-burger-span2-active,
	.globalmenu-burger-span3-active {
		top: 1.14vw;
		transform: rotate(-315deg);
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.globalmenu {
		height: 100vh;
		width: 5vw;
		position: fixed;
		top: 0;
		right: 5vw;
	}

	.globalmenu-burger {
		display : block;
		position: fixed;
		right : 2.8vw;
		top   : 4vw;
		width : 10.5vw;
		height: 10.5vw;
		cursor: pointer;
		text-align: center;
	}

	.globalmenu-burger span {
		display : block;
		position: absolute;
		width   : 8.4vw;
		height  : 0.45vw;
		left    : 0.4vw;
		background : #e7b06c;
		transition: 0.5s ease-in-out;
	}

	.globalmenu-burger-span1 {
		top: 2.5vw;
	}

	.globalmenu-burger-span2 {
		top: 5.25vw;
	}

	.globalmenu-burger-span3 {
		top: 8vw;
	}

	.globalmenu-burger-span1-active {
		top : 5vw;
		left: 0.42vw;
		transform: rotate(315deg);
	}

	.globalmenu-burger-span2-active,
	.globalmenu-burger-span3-active {
		top: 5vw;
		transform: rotate(-315deg);
	}
}
</style>

<style scoped>
	@media screen and (min-aspect-ratio: 1/1) {
	.fa-twitter {
		font-size: 1rem;
		color: white;
		transition: 0.4s;
	}

	.tw-round {
		width: 1.8rem;
		height: 1.8rem;
		background-color: #e7b06c;
		border-radius: 50%;
		transition: 0.4s;
	}

	.tw-round:hover {
		width: 0.1rem;
		height: 0.1rem;
	}

	.tw-round:hover .fa-twitter{
		color: #00acee;
		font-size: 2rem;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.fa-twitter {
		font-size: 1.5rem;
		color: white;
		transition: 0.4s;
	}

	.tw-round {
		width: 2.7rem;
		height: 2.7rem;
		background-color: #e7b06c;
		border-radius: 50%;
		transition: 0.4s;
	}

	.tw-round:hover {
		width: 0.1rem;
		height: 0.1rem;
	}

	.tw-round:hover .fa-twitter{
		color: #00acee;
		font-size: 3rem;
	}
}
</style>