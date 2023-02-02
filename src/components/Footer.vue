<template>
	<footer class="footer">
		<div class="f-ali-cen-jus-around_dis f-direction-column_mob">
			<img  @click="logoscroll()" class="footer-logo" src="../assets//logo/neverlandf_logo1.png">
			<!-- Display用 -->
			<div class="f-jus-space-around width-60p fs-1_2rem dis-only">
				<router-link to="/">
					<span class="footer-hoveranim co-white">Home</span>
				</router-link>
				<router-link to="/about">
					<span class="footer-hoveranim co-white">About</span>
				</router-link>
				<router-link to="/news">
					<span class="footer-hoveranim co-white">News</span>
				</router-link>
				<router-link to="/gallery">
					<span class="footer-hoveranim co-white">Gallery</span>
				</router-link>
				<router-link to="/game">
					<span class="footer-hoveranim co-white">Game</span>
				</router-link>
				<router-link to="/shop">
					<span class="footer-hoveranim co-white">Shop</span>
				</router-link>
				<router-link to="/works">
					<span class="footer-hoveranim co-white">Works</span>
				</router-link>
			</div>
			<!-- Mobile用 -->
			<div class="width-100p fs-1_2rem text-m-rl-auto mob-only">
				<div class="f-jus-space-around m-bottom-1rem_mob">
					<router-link to="/" class="width-30p_mob text-center">
						<span class="co-white_mob">Home</span>
					</router-link>
				</div>
				<div class="f-jus-space-around m-bottom-1rem_mob">
					<router-link to="/about" class="width-30p_mob text-center">
						<span class="co-white_mob">About</span>
					</router-link>
					<router-link to="/news" class="width-30p_mob text-center">
						<span class="co-white_mob">News</span>
					</router-link>
					<router-link to="/gallery" class="width-30p_mob text-center">
						<span class="co-white_mob width-40p_mob">Gallery</span>
					</router-link>
				</div>
				<div class="f-jus-space-around m-bottom-1rem_mob">
					<router-link to="/game" class="width-30p_mob text-center">
						<span class="co-white_mob width-40p_mob">Game</span>
					</router-link>
					<router-link to="/shop" class="width-30p_mob text-center">
						<span class="co-white_mob">Shop</span>
					</router-link>
					<router-link to="/works" class="width-30p_mob text-center">
						<span class="co-white_mob">Works</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="footer-whiteline m-top-05rem m-bottom-2rem m-rl-auto"></div>
		<div class="width-90p f-jus-space-around fs-0_8rem m-bottom-1rem m-rl-auto">
			<a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
			<!-- <a href="https://twitter.com/tkcpail34" target="_blank" rel="noopener noreferrer"> -->
				<div class="f-ali-jus-center co-white footer-hoveranim d-flex_important">
					<i class="fab fa-twitter-square fs-1_2rem"></i>
					<!-- <span class="m-right-05rem">『雨地屋しろー』Twitter</span> -->
					<span class="m-right-05rem">『仮ユーザー』Twitter</span>
					<i class="fas fa-external-link-alt"></i>
				</div>
			</a>
		</div>
		<div class="f-jus-space-between width-90p m-rl-auto fs-0_8rem m-bottom-1rem">
			<span></span>
			<div class="f-jus-space-around width-25p_dis width-50p_mob">
				<router-link to="/information">
					<span class="footer-hoveranim co-white">Information</span>
				</router-link>
				<router-link to="/links">
					<span class="footer-hoveranim co-white">Link</span>
				</router-link>
				<router-link to="/contact">
					<span class="footer-hoveranim co-white">Contact</span>
				</router-link>
			</div>
		</div>
		<div class="width-100p fs-0_8rem co-white f-ali-jus-center m-bottom-2rem">
			<div>
				<p>当サイトは基本的にリンクフリーです。</p>
				<p>リンクをしていただく際のURLはトップページへお願いします。</p>
				<p>詳細は<router-link to="/information"><span class="footer-hoveranim footer-linkline co-white">こちら</span></router-link></p>
			</div>
		</div>
		<div class="width-100p fs-0_8rem f-jus-center co-white">
			<small>© 2022 corpname inc.</small>
		</div>
		<div class="footer-topbt-position">
			<a href="#" class="footer-btnarrow"><i class="fas fa-chevron-left co-white_mob mob-only m-right-05rem_mob fs-0_8rem_mob"></i>page top</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	methods: {
		logoscroll: function () {
			// console.log(this.$route.path)
			if (this.$route.path === '/') {
				window.scroll({top: 0, behavior: 'smooth'});
			} else {
				this.$router.push('/')
			}
		},
	}
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) { 
	.footer {
		background-color: #e7b06c;
		padding: 1.5vw 10vw;
		margin-top: 30vw;
	}

	.footer-logo {
		height: 6.75vw;
		width: 18vw;
	}

	.footer-whiteline {
		width: 90%;
		height: 0.05vw;
		background: #fafafa;
	}

	.footer-hoveranim {
		position: relative;
		display: inline-block;
		text-decoration: none;
	}

	.footer-hoveranim::after {
		position: absolute;
		bottom: -0.1vw;
		left: 0;
		content: '';
		width: 100%;
		height: 0.05vw;
		background: #fafafa;
		transform: scale(0, 1);
		transform-origin: right top;
		transition: transform .3s;
	}

	.footer-hoveranim:hover::after {
		transform-origin: left top;
		transform: scale(1, 1);
	}

	.footer-topbt-position {
		position: relative;
		right: -77vw;
		bottom: 2.5vw;
	}

	.footer-btnarrow{
		/*矢印の基点とするためrelativeを指定*/
		position: relative;
		/*ボタンの形状*/
		border: 0.07vw solid #e7b06c;
		padding: 0.5vw 2.1vw;
		display: inline-block;
		text-align: m-rl-auto;
		text-decoration: none;
		color: #fafafa;
		outline: none;
		/*アニメーションの指定*/
		transition: all .2s linear;
		transform:rotateZ(90deg)
	}

	.footer-btnarrow:hover{
		background:#fafafa;
		color:#e7b06c;
	}

	/*矢印と下線の形状*/
	.footer-btnarrow::before{
		content:"";
		/*絶対配置で下線の位置を決める*/
		position: absolute;
		top:50%;
		right:8.1vw;
		/*下線の形状*/
		width:2.8vw;
		height:0.07vw;
		background:#fafafa;
		/*アニメーションの指定*/
		transition: all .2s linear;
	}

	.footer-btnarrow::after{
		content:"";
		/*絶対配置で矢印の位置を決める*/
		position: absolute;
		top: 23%;
		right: 10.5vw;
		/*矢印の形状*/
		width:0.07vw;
		height:0.8vw;
		background:#fafafa;
		transform:skewX(136deg);
		/*アニメーションの指定*/
		transition: all .2s linear;
	}

	/*hoverした際の移動*/
	.footer-btnarrow:hover::before{
		right:10.7vw;
		background:#e7b06c;
	}

	.footer-btnarrow:hover::after{
		right:13vw;
		background:#e7b06c;
	}
}


@media screen and (max-aspect-ratio: 1/1) {
	.footer {
		background-color: #e7b06c;
		padding: 4vw 10vw;
		margin-top: 30vw;
	}

	.footer-logo {
		width: 30vw;
	}

	.footer-whiteline {
		width: 100%;
		height: 0.05vw;
		background: #fafafa;
		margin-bottom: 1rem;
	}

	.footer-topbt-position {
		position: relative;
		right: -65vw;
		bottom: 6.5vw;
	}

	.footer-btnarrow{
		/*矢印の基点とするためrelativeを指定*/
		position: relative;
		/*ボタンの形状*/
		border: 0.07vw solid #e7b06c;
		padding: 0.5vw 2.1vw;
		display: inline-block;
		text-align: center;
		text-decoration: none;
		color: #fafafa;
		outline: none;
		/*アニメーションの指定*/
		transition: all .2s linear;
		transform:rotateZ(90deg)
	}

	.footer-linkline {
		/* background-color: #fafafa;
		width: 100%;
		height: 0.15vw;
		margin: 0.5rem 0 1rem 0; */
		border-bottom: 0.15vw solid #fafafa;
	}
}
</style>