<template>
	<div>
		<ul id="Drawermenu" class="drawermenu drawermenu-hide">
			<router-link to="/">
				<h1>
					<img class="drawermenu-logo m-rl-auto closeevent" src="../assets//logo/neverlandf_logo1.png" alt=”ねばーランド.F”>
				</h1>
			</router-link>
			<div class="drawermenu-links">
				<div id="dr-content1" class="drawermenu-container drawermenu-saup opacity-0">
					<router-link to="/">
						<div class="d-flex_dis drawermenu-link drawermenu-link-w50_mobile closeevent">
							<i class="fas fa-home co-brown drawermenu-icon m-right-05rem_dis co-brown"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">H</span><span class="co-grey">ome</span></p>
								<p class="drawermenu-fs2 co-grey">ホーム</p>
							</div>
						</div>
					</router-link>
					<router-link to="/about">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-object-group co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">A</span><span class="co-grey">bout</span></p>
								<p class="drawermenu-fs2 co-grey">概要</p>
							</div>
						</div>
					</router-link>
					<router-link to="/news">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-newspaper co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">N</span><span class="co-grey">ews</span></p>
								<p class="drawermenu-fs2 co-grey">最新情報</p>
							</div>
						</div>
					</router-link>
				</div>
				<div id="dr-content2" class="drawermenu-container drawermenu-saup opacity-0">
					<router-link to="/gallery">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-pen-alt co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">G</span><span class="co-grey">allery</span></p>
								<p class="drawermenu-fs2 co-grey">イラスト一覧</p>
							</div>
						</div>
					</router-link>
					<router-link to="/game">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-gamepad co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">G</span><span class="co-grey">ame</span></p>
								<p class="drawermenu-fs2 co-grey">ゲーム</p>
							</div>
						</div>
					</router-link>
					<router-link to="/shop">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-store-alt co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">S</span><span class="co-grey">hop</span></p>
								<p class="drawermenu-fs2 co-grey">ショップ</p>
							</div>
						</div>
					</router-link>
					<router-link to="/works">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-tablet-alt co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">W</span><span class="co-grey">orks</span></p>
								<p class="drawermenu-fs2 co-grey">活動・お仕事履歴</p>
							</div>
						</div>
					</router-link>
				</div>
				<div id="dr-content3" class="drawermenu-line drawermenu-saup opacity-0"></div>
				<div id="dr-content4" class="drawermenu-container drawermenu-saup opacity-0">
					<router-link to="/information">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-file-alt co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">I</span><span class="co-grey">nfo</span></p>
								<p class="drawermenu-fs2 co-grey">ご案内など</p>
							</div>
						</div>
					</router-link>
					<router-link to="/links">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-external-link-alt co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">L</span><span class="co-grey">ink</span></p>
								<p class="drawermenu-fs2 co-grey">リンク</p>
							</div>
						</div>
					</router-link>
					<router-link to="/contact">
						<div class="d-flex_dis drawermenu-link closeevent">
							<i class="fas fa-envelope co-brown drawermenu-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 drawermenu-fs1"><span class="co-brown">C</span><span class="co-grey">ontact</span></p>
								<p class="drawermenu-fs2 co-grey">連絡・お問い合わせ</p>
							</div>
						</div>
					</router-link>
				</div> 
			</div>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'DrawerMenu',
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) {
	.drawermenu {
		width: 100%;
		height: 100vh;
		padding: 7.5vh 0px;
		background-color: #fff5e7d8;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		top: 0;
		margin: 0 auto;
		z-index: 2;
		opacity: 1;
		transition-duration: 1s;
	}

	.drawermenu-hide {
		opacity: 0;
		z-index: -1;
	}

	.drawermenu-links {
		height: 50vh;
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.drawermenu-fs1 {
		font-size: 1.8rem;
		line-height: 1rem;
	}

	.drawermenu-fs2 {
		font-size: 0.6rem;
		line-height: 1.8rem;
	}

	.drawermenu-icon {
		font-size: 1.6rem;
	}

	.drawermenu-link {
		width: 16vw;
		display: flex;
		justify-content: center;
		transition-duration: 2s;
		padding-top: 1rem;
		padding-bottom: 0.2rem;
		outline: 0.15vw solid transparent;
		outline-offset: 0px;
	}

	.drawermenu-link:hover {
		animation: light .8s infinite;
		outline-color: #e7b06c;
	}

	@keyframes light {
		100% { 
		outline-color: transparent;
		outline-offset: 0.3vw;
		}
	}

	.drawermenu-container {
		width: 90%;
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
	}

	.drawermenu-logo {
		height: 6.75vw;
		width: 18vw;
	}

	.drawermenu-line {
		background-color: #e7b06c;
		height: 0.1vw;
		width: 95%;
	}

	.drawermenu-saup {
		transform: translate(0, 5vh);
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	.drawermenu {
		width: 100%;
		height: 100vh;
		padding: 10vh 0px;
		background-color: #fff5e7d8;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		top: 0;
		margin: 0 auto;
		z-index: 2;
		opacity: 1;
		transition-duration: 1s;
	}

	.drawermenu-hide {
		opacity: 0;
		z-index: -1;
	}

	.drawermenu-links {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.drawermenu-fs1 {
		font-size: 1.8rem;
		line-height: 1rem;
	}

	.drawermenu-fs2 {
		font-size: 0.6rem;
		line-height: 1.8rem;
	}

	.drawermenu-icon {
		font-size: 1.6rem;
	}

	.drawermenu-link {
		width: 35vw;
		display: flex;
		justify-content: center;
		transition-duration: 2s;
		padding-top: 1rem;
		padding-bottom: 0.2rem;
		outline: 0.15vw solid transparent;
		outline-offset: 0px;
		margin-bottom: 0.5rem;
	}

	.drawermenu-link-w50_mobile {
		width: 50vw!important;
	}

	.drawermenu-link:hover {
		animation: light .8s infinite;
		outline-color: #e7b06c;
	}

	@keyframes light {
		100% { 
		outline-color: transparent;
		outline-offset: 0.3vw;
		}
	}

	.drawermenu-container {
		width: 90%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin: 0 auto;
	}

	.drawermenu-logo {
		width: 70vw;
	}

	.drawermenu-line {
		background-color: #e7b06c;
		height: 0.1vw;
		width: 95%;
		margin: 1rem 0 1.5rem 0;
	}

	.drawermenu-saup {
		transform: translate(0, 5vh);
	}
}
</style>