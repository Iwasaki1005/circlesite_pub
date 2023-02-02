export default {
	methods: {
		illustselect: function (column) {
			const screen = document.getElementById('gallery-gallerymodal-screen');
			/* データに差分いらすとのクラスを入れる */
			this.difil = (column.differenceses);
			/* データに差分いらすとのsrcを入れる */
			this.difilsrc = (column.difsrc);
			/* データに説明文のテキストを入れる */
			this.seldes = (column.description);
			/* データにリンクのデータを入れる */
			this.sellinktxt = (column.linktext);
			this.sellinksrc = (column.linksrc);
			/* 画像のsrcを書き換え */
			screen.setAttribute('src', column.src);
			/* リストスクロール */
			var illustlist = document.getElementById('gallery-gallerymodal-illist')
			var element = document.getElementById(column.thumclass);
			var rect = element.getBoundingClientRect();
			var eletop = rect.top;
			var innerWidth = window.innerWidth;
			var vw02 = innerWidth * 0.02;
			var position = eletop - vw02;
			illustlist.scrollBy({
				top: position,
				behavior: 'smooth',
			});
			/* 選択中のframeのクラスを追加*/
				/* 関係のないものからクラス削除 */
				var removeselect = document.getElementsByClassName('gallery-gallerymodal-illist-icon')
				Array.prototype.forEach.call(removeselect, function (element) {
					element.classList.remove("gallery-gallerymodal-illist-icon-select");
				});
				/* 該当のやつにクラス追加 */
				element.classList.add('gallery-gallerymodal-illist-icon-select')
			/* ここまで */
			// htmlからスクロールバーを隠す
			document.querySelectorAll("html, body").forEach(elm => elm.classList.add("scrollbar"));
		},
		differenceselect : function (index,column) {
			const screen = document.getElementById('gallery-gallerymodal-screen');
			/* 画像のsrcを書き換え */
			screen.setAttribute('src', this.difilsrc[index]);
			/* 選択中のframeのクラスを追加*/
				/* 関係のないものからクラス削除 */
				var removeselect = document.getElementsByClassName('gallery-gallerymodal-illist-icon')
				Array.prototype.forEach.call(removeselect, function (element) {
					element.classList.remove("gallery-gallerymodal-illist-icon-select");
				});
				/* 該当のやつにクラス追加 */
				var defeleadd = document.getElementById(column);
				defeleadd.classList.add('gallery-gallerymodal-illist-icon-select')
			/* ここまで */
			// htmlからスクロールバーを隠す
			document.querySelectorAll("html, body").forEach(elm => elm.classList.add("scrollbar"));
		},
		screenopen: function (index) {
			this.modalscreen = true;
			const screen = document.getElementById('gallery-gallerymodal-screen');
			this.difil = (this.list[index].differenceses);
			/* データに差分いらすとのsrcを入れる */
			this.difilsrc = (this.list[index].difsrc);
			/* データに説明文のテキストを入れる */
			this.seldes = (this.list[index].description);
			/* データにリンクのデータを入れる */
			this.sellinktxt = (this.list[index].linktext);
			this.sellinksrc = (this.list[index].linksrc);
			/* 画像のsrcを書き換え */
			screen.setAttribute('src', this.list[index].src);
			/* リストスクロール */
			setTimeout(() => {
				var illustlist = document.getElementById('gallery-gallerymodal-illist')
				var element = document.getElementById(this.list[index].thumclass);
				var rect = element.getBoundingClientRect();
				var eletop = rect.top;
				var innerWidth = window.innerWidth;
				var vw02 = innerWidth * 0.02;
				var position = eletop - vw02;
				illustlist.scrollBy({
					top: position,
					behavior: 'smooth',
				});
			}, 50)

			// 再宣言
			var element = document.getElementById(this.list[index].thumclass);
			/* 選択中のframeのクラスを追加*/
				/* 関係のないものからクラス削除 */
				var removeselect = document.getElementsByClassName('gallery-gallerymodal-illist-icon')
				Array.prototype.forEach.call(removeselect, function (element) {
					element.classList.remove("gallery-gallerymodal-illist-icon-select");
				});
				/* 該当のやつにクラス追加 */
				element.classList.add('gallery-gallerymodal-illist-icon-select')
			/* ここまで */

			// htmlからスクロールバーを隠す
			document.querySelectorAll("html, body").forEach(elm => elm.classList.add("scrollbar"));
		},
		screenclose: function () {
			this.modalscreen = false;
			// htmlにスクロールバーを再表示
			document.querySelectorAll("html, body").forEach(elm => elm.classList.remove("scrollbar"));
		},
		addtag : function (column) {
			this.activetag.push(column)
			this.filter()
		},
		removetag : function (column) {
			const targettag = column
			const activetagcall = this.activetag
			const passindex = activetagcall.findIndex(element => element === targettag);
			this.activetag.splice( passindex, 1 );
			this.filter()
		},
		tagallremove : function() {
			this.activetag.splice(0, this.activetag.length)
			this.filter()
		},
		filter : function () {
			//全写真の分だけforループで消すか否かの判定を行う
			for (let i = 0; i < this.list.length; i++) {
				//該当写真毎に行う処理//
				//☆Step1 activeになっているタグ一覧を確認
				const decisiontag = this.activetag;
				const certaintags = decisiontag.filter((n)=> {
					//☆Step2 該当する写真のタグをデータから取り込む
					const altertags = this.list[i].tag;
						if(altertags.indexOf(n) == -1) {
							return n;
						}
					}
				);
				//☆ はずれタグが無い場合の処理
				if (typeof certaintags === "undefined" || certaintags.length === 0) {
					if (this.list[i].active == false) {
						this.list[i].active = true;
					}
				}
				else {
					this.list[i].active = false;
				}
			}
		},
		ratingswitch : function () {
			if (this.rating == false) {
				this.activetag.push('rating=a')
				this.filter()
			}
			else {
				let targettag = 'rating=a'
				let activetagcall = this.activetag
				let passindex = activetagcall.findIndex(element => element === targettag);
				this.activetag.splice( passindex, 1 );
				this.filter()
			}
		},
		modalfuncopen : function () {
			/* ホバー時にハイドクラスを取り除く*/
			var removeselect = document.getElementsByClassName('modalmarker')
			Array.prototype.forEach.call(removeselect, function (element) {
				element.classList.remove("modal-hide");
			});
		},
		modalfuncclose : function () {
			/* ホバーから外れた時ににハイドクラスを追加*/
			var removeselect = document.getElementsByClassName('modalmarker')
			Array.prototype.forEach.call(removeselect, function (element) {
				element.classList.add("modal-hide");
			});
		},
	}
}
