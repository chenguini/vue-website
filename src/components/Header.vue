<template>
	<div class="header">
		<router-link to="/home">
			<div class="icon">
				<icon name="logo" scale="4"></icon>
			</div>
			<div class="name">博客</div>
		</router-link>
		<ul class="list">
			<li><router-link class="nav-item" to="/home">首页</router-link></li>
			<li @mouseover="overShow" @mouseout="outHide">
				<router-link class="nav-item" to="/list">
					学习<icon name="down" scale="2"></icon>
				</router-link>
				<ul class="learn" :class="{show:showText,hide:hideText}">
					<li v-for="(learn,index) in learn"><router-link  :to="'/list/' + index">{{learn}}</router-link></li>
				</ul>
			</li>
			<li><router-link class="nav-item" to="/day">生活</router-link></li>
			<li><router-link class="nav-item" to="/login">我的博客</router-link></li>
		</ul>
		<div class="weather">
			<iframe width="300" scrolling="no" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=34&icon=1&num=3"></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		name:'headers',
		data (){
			return {
				learn:[
					"HTML/CSS",
					"JS/jQuery",
					"MySql",
					"PHP"
				],
				showText: false,
				hideText: true
			}
		},
		methods:{
			overShow () {
				this.showText = !this.showText
				this.hideText = !this.hideText
			},
			outHide () {
				this.showText = !this.showText
				this.hideText = !this.hideText
			}
		}
	}
</script>

<style scoped>
	.header {
		height: 60px;
		width: 100%;
		background-color: #fff;
		color: #000;
		border-bottom: 1px solid #ddd;
		position: fixed;
		top: 0;
		z-index: 2000;
		font-size: 16px;
	}
	.list {
		float: left;
	}
	.list>li {
		padding: 0 20px;
		text-align: center;
		line-height: 57px;
		float: left;
	}
	.header .weather {
		float: right;
		margin-top: 17px;
		
	}
	.icon {
		float: left;
		line-height: 90px;
		margin-left: 60px;
	}
	.name {
		float: left;
		line-height: 57px;
		font-size: 20px;
		margin-left: 5px;
		color: #000;
	}
	.nav-item {
		display: block;
		color: #000;
	}
	.nav-item:hover {
		color: #1E90FF;
	}
	.router-link-active {
		color: #1E90FF;
		border-bottom: 3px solid #1E90FF;
	}
	.learn {
		clear: both;
		position: absolute;
		background-color: #fff;
		border: 1px solid #ccc;
		line-height: 30px;
	}
	.learn a{
		color: #333;
		display: block;
		padding: 5px 15px;
	}
	.learn a:hover{
		color: #1E90FF;
	}
	.learn .router-link-active {
		color: #1E90FF;
		border: none;
	}
	
	.show{
		display: block;
	}
	.hide{
		display: none;
	}
	@media screen and (max-width: 700px) {
		.weather {
			display: none;
		}
		.list>li {
			padding: 0 5px;
		}
		.icon {
			line-height: 90px;
			margin-left: 20px;
		}
		.learn a {
			color: #333;
			display: block;
			padding: 5px 10px;
		}
		.name {
			font-size: 16px;
		}
		.header {
			font-size: 15px;
		}
	}
	
	
</style>