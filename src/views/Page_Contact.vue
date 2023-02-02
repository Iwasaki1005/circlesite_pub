<template>
	<div>
		<section id="Contact" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Contact</span></h2>
			<VerticalLine />
			<div class="sa sa--up">
				<p id="contactform-guide" class="text-center tr-duration-05s">
					こちらのページから管理人へ問い合わせ<span class="dis-only">、</span><br class="mob-only">連絡をすることができます。<br><br class="mob-only">
					下記フォーマットにご記入いただき<span class="dis-only">、</span><br class="mob-only">「入力内容の確認」ボタンを押して<br class="mob-only">内容をご確認のうえ、送信してください。
				</p>
			</div>
			<div class="sa sa--up">
				<form id="contactform" name="contactform" onsubmit="return false;" class="m-rl-auto m-top-3rem tr-duration-05s">
					<div class="p-relative m-bottom-2rem_dis m-bottom-1_5rem_mob">
						<input name="ご用件" v-model="contact_index" type="text" id="inquiry-index" required>
						<label for="name"><i class="fas fa-pen"></i> ご用件</label>
					</div>
					<div class="p-relative m-bottom-2rem_dis m-bottom-1_5rem_mob">
						<input name="メールアドレス"  v-model="contact_mail" type="text" id="inquiry-email" required>
						<label for="email"><i class="fas fa-envelope"></i> メールアドレス</label>
					</div>
					<div class="p-relative m-bottom-2rem_dis m-bottom-1_5rem_mob">
						<textarea name="お問合せ内容"  v-model="contact_message" id="inquiry-opinion" rows="8" required></textarea>
						<label for="message"><i class="fas fa-comments"></i> お問合せ内容</label>
					</div>
					
					<!-- 送信ボタン -->
					<div id="submit-confirm" class="">
						<div class="bt-typeA bt-typeA-border d-block m-rl-auto">
							<button class="bt-typeA-border-inner font-E1 font-J1" type="submit"><i class="fas fa-paper-plane m-right-05rem"></i>送信</button>
						</div>
					</div>

					<!-- 送信中の表示 -->
					<div id="submitting" class="d-none">
						<div class="bt-typeA bt-typeA-border d-block m-rl-auto">
							<button class="bt-typeA-border-inner font-E1 font-J1" type="button"><i class="fas fa-spinner fa-spin m-right-05rem"></i><span>送信中...</span></button>
						</div>
					</div>

					<!-- 送信失敗の表示 -->
					<div id="submit-failed" class="d-none">
						<p class="text-center co-error m-bottom-2rem">通信に失敗しました。<br>お手数ですが、通信状態のよい環境でもう一度送信してください。</p>
						<div id="submit-confirm-retry" class="bt-typeA bt-typeA-border d-block m-rl-auto">
							<button class="bt-typeA-border-inner font-E1 font-J1" type="submit"><i class="fas fa-paper-plane m-right-05rem"></i>再送信</button>
						</div>
					</div>
				</form>

				<!-- 送信成功の表示 -->
				<div id="submit-success" class="d-none tr-duration-05s opacity-0">
					<p class="text-center">
						お問い合わせありがとうございました。<br>お問い合わせ内容の送信が完了しました。
					</p>
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
	name: 'Page_Contact',
	components: {
		VerticalLine,
		BackToHome,
		Footer,
	},
	methods: { 
		mailsend: function () {
			//  ID宣言  //
			const submitting = document.getElementById('submitting');
			const submit_success = document.getElementById('submit-success');
			const submit_failed = document.getElementById('submit-failed');
			const submit_confirm = document.getElementById('submit-confirm');
			const contactform = document.getElementById('contactform');
			const contactformguide = document.getElementById('contactform-guide')
			const submitconfirmretry = document.getElementById('submit-confirm-retry')
			// 送信の処理
			submit_confirm.addEventListener('click', function(){
				if(!document.getElementById('contactform').checkValidity()){
					// 入力内容にエラーあり フォーム側でエラー表示するのでここでは何もしない//
				} else{
					// 送信のボタン、及び再送信フォームを非表示にして送信中のボタンを表示
					submit_confirm.classList.add('d-none')
					submit_failed.classList.add('d-none')
					submitting.classList.remove('d-none')
					// 入力フォームの内容を取得
					var inquiryemail = document.getElementById('inquiry-email');
					var inquiryindex = document.getElementById('inquiry-index');
					var inquiryopinion = document.getElementById('inquiry-opinion');
					var usermail = inquiryemail.value
					var userindex = inquiryindex.value
					var usertext = inquiryopinion.value
					var jsontrans = {
						"user_mail": usermail,
						"user_text": usertext,
						"user_index": userindex,
					}
					// フォームのデータをjsonに変換
					var jsondata = JSON.stringify(jsontrans)
					// ajax通信でjsonデータを送信
					var myXml = new XMLHttpRequest();
					myXml.onreadystatechange = function() {
						if (myXml.readyState === 4) {
							if (myXml.status == 200) {
								//通信成功時
								// お問い合わせフォームを透明度0に
								contactform.classList.add('opacity-0')
								contactformguide.classList.add('opacity-0')
								// 0.55秒後 お問い合わせフォームを完全消去 
								setTimeout(function(){
									contactform.classList.add('d-none')
									contactformguide.classList.add('d-none')
								}, 550);
								// 0.6秒後 送信成功メッセージのnoneを削除
								setTimeout(function(){
									submit_success.classList.remove('d-none')
								}, 600);
								// 0.65秒後 送信成功メッセージの透明度を削除
								setTimeout(function(){
									submit_success.classList.remove('opacity-0')
								}, 650);
							} else {
								//通信失敗時
								// 通信中ボタンを消して再送信ボタンを表示
								submitting.classList.add('d-none')
								submit_failed.classList.remove('d-none')
							}
						}
					}
					myXml.onload = function(){
						//通信完了時
					}
					myXml.open("POST", "php/inquiry.php", true);
						myXml.send(jsondata);
					}
			});
			// 再送信の処理
			submitconfirmretry.addEventListener('click', function(){
				if(!document.getElementById('contactform').checkValidity()){
					// 入力内容にエラーあり フォーム側でエラー表示するのでここでは何もしない//
				} else{
					// 送信のボタン、及び再送信フォームを非表示にして送信中のボタンを表示
					submit_confirm.classList.add('d-none')
					submit_failed.classList.add('d-none')
					submitting.classList.remove('d-none')
					// 入力フォームの内容を取得
					var inquiryemail = document.getElementById('inquiry-email');
					var inquiryindex = document.getElementById('inquiry-index');
					var inquiryopinion = document.getElementById('inquiry-opinion');
					var usermail = inquiryemail.value
					var userindex = inquiryindex.value
					var usertext = inquiryopinion.value
					var jsontrans = {
						"user_mail": usermail,
						"user_text": usertext,
						"user_index": userindex,
					}
					// console.log("jsonで書き出す");

					var jsondata = JSON.stringify(jsontrans)

					var myXml = new XMLHttpRequest();
					myXml.onreadystatechange = function() {
						if (myXml.readyState === 4) {
							if (myXml.status == 200) {
								//通信成功時
								// お問い合わせフォームを透明度0に
								contactform.classList.add('opacity-0')
								contactformguide.classList.add('opacity-0')
								// 0.55秒後 お問い合わせフォームを完全消去 
								setTimeout(function(){
									contactform.classList.add('d-none')
									contactformguide.classList.add('d-none')
								}, 550);
								// 0.6秒後 送信成功メッセージのnoneを削除
								setTimeout(function(){
									submit_success.classList.remove('d-none')
								}, 600);
								// 0.65秒後 送信成功メッセージの透明度を削除
								setTimeout(function(){
									submit_success.classList.remove('opacity-0')
								}, 650);
							} else {
								//通信失敗時
								// 通信中ボタンを消して再送信ボタンを表示
								submitting.classList.add('d-none')
								submit_failed.classList.remove('d-none')
							}
						}
					}
					myXml.onload = function(){
						//通信完了時 特に何もなし
					}
					myXml.open("POST", "php/inquiry.php", true);
						myXml.send(jsondata);
					}
			});
		},
	},
	mounted: function() {
		this.scrollanime_js()
		this.mailsend()
	},
	data: () => ({
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Contact',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) {
	form {
		width: 60%;
	}

	input, textarea {
		width: 100%;
		padding: 1vw;
		outline: 0;
		border: 0.07vw solid #e7b06c;
		color: #333;
		font-family: Kosugi Maru, sans-serif;
		font-size: 1.4vw;
		background: transparent;
		font-size: 15px;
	}

	textarea {
		height: 16rem;
	}

	label {
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		padding: 0.7vw;
		color: #e7b06c;
		cursor: text;
		transition: 0.2s;
	}

	input:focus~label,
	input:valid~label,
	textarea:focus~label,
	textarea:valid~label {
		top: -2.5vw;
		font-size: 1vw;
	}
}

@media screen and (max-aspect-ratio: 1/1) {
	form {
		width: 100%;
	}

	input, textarea {
		width: 100%;
		padding: 1vw;
		outline: 0;
		border: 0.07vw solid #e7b06c;
		color: #e7b06c;
		background: transparent;
		font-size: 15px;
	}

	textarea {
		height: 16rem;
	}

	label {
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		padding: 0.7vw;
		color: #e7b06c;
		cursor: text;
		transition: 0.2s;
	}

	input:focus~label,
	input:valid~label,
	textarea:focus~label,
	textarea:valid~label {
		top: -4vw;
		font-size: 1.5vw;
	}
}
</style>