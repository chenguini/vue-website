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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	#loading img {
		width: 40%;
		height: 40%;
	}
</style>