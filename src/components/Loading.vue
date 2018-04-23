<template>
	<div id="loading">
		<img src="../../static/image/loading.gif">
	</div>
</template>

<script>
	export default {
		name:'load',
		data (){
			return {

			}
		}
	}
</script>

<style>
	#loading {
		text-align: center;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 9999;
		transform: translate(-50%,-50%);
	}
	#loading img {
		width: 40%;
		height: 40%;
	}
</style>