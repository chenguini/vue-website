<template>
	<div class="home">
		<h2>{{dataList.s_title}}</h2>
		<span>发布日期：{{dataList.s_day}}</span>
		<pre >{{dataList.s_content}}</pre>
	</div>
</template>

<script>
	export default {
		name:'skill',
		data (){
			return {
				dataList:""
			}
		},
		methods:{
			getData() {
				this.$http.get("http://chenguini.top/skill.php?s_id=" + this.$route.params.s_id
					)
				.then(res=>{
					this.dataList=res.data;

					// console.log(this.dataList);
				}).catch(error=>console.log(error));
			}
		},
		created() {
			this.getData();

		},
		watch: {
			"$route": "getData"
		}
	}
</script>

<style scoped>
	.home h2 {
		color: #222;
		margin-top: 30px;
		margin-bottom: 15px;
	}
	pre { 
		white-space: pre-wrap; /*css-3*/ 
		white-space: -moz-pre-wrap; /*Mozilla,since1999*/ 
		white-space: -pre-wrap; /*Opera4-6*/ 
		white-space: -o-pre-wrap; /*Opera7*/ 
		word-wrap: break-word; /*InternetExplorer5.5+*/ 
		margin: 5px 25px;
		text-align: left;
		color: #333;
	} 
	.home span {
		display: block;
		color: #999;
		text-align: right;
		padding-right: 10px;
	}
</style>