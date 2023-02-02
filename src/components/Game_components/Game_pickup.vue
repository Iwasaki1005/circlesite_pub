<template>
	<div class="sa sa--up">
		<img id="gamepickup" class="gamepickup m-bottom-2rem" v-bind:src="this.datapickthumsrc">
	</div>
</template>

<script>

export default {
	name: 'GamePickup',
	props: {
		gamelist: Array,
		datapickthumsrc: null,
	},
	mounted: function() {
		this.scrollanime_js()
		this.pickupcheck()
	},
	methods: {
		pickupcheck : function () {
			this.$emit('pickupcheck')
		},
	},
}
</script>

<style>
.gamepickup {
	width: 100%;
}
</style>