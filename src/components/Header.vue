<template>
	<div class="header">
		<div class="icon">
			<icon name="logo" scale="4"></icon>
		</div>
		<div class="name">博客</div>
		<ul>
			<li><router-link class="nav-item" to="/">首页</router-link></li>
			<li><router-link class="nav-item" to="/list">文章</router-link></li>
			<li><router-link class="nav-item" to="/about">列表</router-link></li>
			<li><router-link class="nav-item" to="/myblog">我的博客</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'headers',
		data (){
			return {

			}
		}
	}
</script>

<style scoped>
	.header {
		height: 60px;
		background-color: #fff;
		color: #000;
		border-bottom: 1px solid #ddd;
		overflow: hidden;
	}
	.header li {
		float: left;
		margin-left: 32px;
		text-align: center;
		line-height: 57px;
		display: inline-block;
	}
	.icon {
		float: left;
		line-height: 90px;
		margin-left: 60px;
	}
	.name {
		float: left;
		line-height: 57px;
		font-size: 24px;
		margin-left: 5px;
	}
	.nav-item {
		display: block;
		color: #000;
	}
	.nav-item:hover {
		color: #ccc;
	}
	.router-link-exact-active {
		color: #ccc;
		border-bottom: 3px solid #ccc;
	}
	
	
</style>