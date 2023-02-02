<template>
	<div class="links-creator-container">
		<div v-for="(column,index) in creators" :key="column.title" class="links-creator-card1">
			<div class="links-creator-content">
				<div class="links-creator-imgbx1"><img v-bind:src="creators[index].iconsrc"></div>
				<div class="links-creator-contentbx1">
					<h3 class="co-white f-weight-normal">{{ creators[index].name }}<br><span class="font-E3">{{ creators[index].title }}</span></h3>
				</div>
			</div>
			<ul class="links-creator-sci1">
				<li v-if="creators[index].activelink.includes('hp')" style="--i:1">
					<a class="co-white fs-1_2rem" v-bind:href="creators[index].hpsrc"><i class="fas fa-home"></i></a>
				</li>
				<li v-if="creators[index].activelink.includes('twitter')" style="--i:2">
					<a class="co-white fs-1_2rem" v-bind:href="creators[index].twittersrc"><i class="fab fa-twitter-square"></i></a>
				</li>
				<li v-if="creators[index].activelink.includes('github')" style="--i:3">
					<a class="co-white fs-1_2rem" v-bind:href="creators[index].githubsrc"><i class="fab fa-github-square"></i></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'LinksCreator',
  data: () => ({
      isActive: false,
  }),
  props: {
		creators: Array,
  },
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) {
.links-creator-container {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 2.8vw 0;
}

.links-creator-container .links-creator-card1 {
	position: relative;
	width: 20vw;
	height: 28vw;
	background-color: #e7b06c;
	margin: 1.4vw;
	box-shadow: 0 1vw 1.7vw rgba(0,0,0,0.2);
	border-radius: 1vw;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blue(0.7vw);
}

.links-creator-container .links-creator-card1 .links-creator-content {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	opacity: 0.5;
	transition: 0.5s;
}

.links-creator-container .links-creator-card1:hover .links-creator-content {
	opacity: 1;
	transform: translateY(-1.4vw);
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-imgbx1 {
	position: relative;
	width: 10vw;
	height: 10vw;
	border-radius: 50%;
	overflow: hidden;
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-imgbx1 img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-contentbx1 h3 {
	text-transform: uppercase;
	text-align: center;
	margin: 1.4vw 0 0.7vw;
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-contentbx1 h3 span {
	text-transform: initial;
}

.links-creator-container .links-creator-card1 .links-creator-sci1 {
	position: absolute;
	bottom: 3.5vw;
	display: flex;
}

.links-creator-container .links-creator-card1 .links-creator-sci1 li {
	list-style: none;
	margin: 0 0.7vw;
	transform: translateY(1.4vw);
	transition: 0.5s;
	transition-delay: calc(0.1s * var(--i));
}

.links-creator-container .links-creator-card1:hover .links-creator-sci1 li {
	transform: translateY(0px);
	opacity: 1;
}
}

@media screen and (max-aspect-ratio: 1/1) {
.links-creator-container {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 2.8vw 0;
}

.links-creator-container .links-creator-card1 {
	position: relative;
	width: 35vw;
	height: 50vw;
	background-color: #e7b06c;
	margin: 1.4vw;
	box-shadow: 0 1vw 1.7vw rgba(0,0,0,0.2);
	border-radius: 1vw;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blue(0.7vw);
}

.links-creator-container .links-creator-card1 .links-creator-content {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	opacity: 0.5;
	transition: 0.5s;
}

.links-creator-container .links-creator-card1:hover .links-creator-content {
	opacity: 1;
	transform: translateY(-1.4vw);
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-imgbx1 {
	position: relative;
	width: 15vw;
	height: 15vw;
	border-radius: 50%;
	overflow: hidden;
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-imgbx1 img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-contentbx1 h3 {
	text-transform: uppercase;
	text-align: center;
	margin: 1.4vw 0 0.7vw;
}

.links-creator-container .links-creator-card1 .links-creator-content .links-creator-contentbx1 h3 span {
	text-transform: initial;
}

.links-creator-container .links-creator-card1 .links-creator-sci1 {
	position: absolute;
	bottom: 3.5vw;
	display: flex;
}

.links-creator-container .links-creator-card1 .links-creator-sci1 li {
	list-style: none;
	margin: 0 0.7vw;
	transform: translateY(1.4vw);
	transition: 0.5s;
	transition-delay: calc(0.1s * var(--i));
}

.links-creator-container .links-creator-card1:hover .links-creator-sci1 li {
	transform: translateY(0px);
	opacity: 1;
}
}
</style>