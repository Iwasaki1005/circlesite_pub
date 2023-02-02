<template>
	<div>
		<h3>FontAwesome インストール実験場</h3>
		<!-- Add the style and icon you want -->
		<font-awesome-icon icon="fa-solid fa-user-secret" />
		<font-awesome-icon icon="fa-solid fa-gamepad-modern" />
		<font-awesome-icon icon="pen-nib" class="icon-check-circle" />
		<p>ラージサイズ</p>
		<!-- T-shirt sizes -->
		<font-awesome-icon icon="fa-solid fa-user-secret" size="xs" />
		<font-awesome-icon icon="fa-solid fa-user-secret" size="lg" />
		<!-- X-factor sizing -->
		<font-awesome-icon icon="fa-solid fa-user-secret" size="6x" />
		<p>アニメーション</p>
		<font-awesome-icon icon="fa-solid fa-heart" beat />
		<font-awesome-icon icon="fa-solid fa-circle-info" beat-fade />
		<font-awesome-icon icon="fa-solid fa-basketball" bounce />
		<font-awesome-icon icon="fa-solid fa-triangle-exclamation" fade />
		<font-awesome-icon icon="fa-solid fa-compact-disc" flip />
		<font-awesome-icon icon="fa-solid fa-bell" shake />
		<font-awesome-icon icon="fa-solid fa-cog" spin />
		<font-awesome-icon icon="fa-solid fa-compass" spin spin-reverse />
		<font-awesome-icon icon="fa-solid fa-spinner" spin-pulse />
		<p>アニメ２</p>
		<font-awesome-icon icon="fa-solid fa-user-secret" spin />
	</div>
</template>

<script>
export default {
	name: '',
}
</script>

<style>
.icon-check-circle {
  color: #98fb98
}
</style>