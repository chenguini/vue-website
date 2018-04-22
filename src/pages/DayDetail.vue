<template>
	<div class="home">
		<loading v-if="isShow"></loading>
		<div class="content-box">
			<h3>{{dataList.d_title}}</h3>
			<span>发布日期：{{dataList.d_day}}</span>
			<pre >{{dataList.d_content}}</pre>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'daydetail',
		data (){
			return {
				dataList:"",
				isShow:true
			}
		},
		methods:{
			getData() {
				this.$http.get("http://chenguini.top/skill.php?d_id=" + this.$route.params.d_id
					)
				.then(res=>{
					this.dataList=res.data;
					this.isShow = false;
// console.log(this.$route.params.d_id);
// 					console.log(this.dataList);
				}).catch(error=>console.log(error));
			}
		},
		mounted() {
			this.getData();

		},
		watch: {
			"$route": "getData"
		}
	}
</script>

<style scoped>
	.content-box {
		margin: 30px 20px;
	}
	.content-box h3 {
		color: #555;
		text-align: center;
		padding: 30px;
	}
	.content-box pre { 
		white-space: pre-wrap; /*css-3*/ 
		white-space: -moz-pre-wrap; /*Mozilla,since1999*/ 
		white-space: -pre-wrap; /*Opera4-6*/ 
		white-space: -o-pre-wrap; /*Opera7*/ 
		word-wrap: break-word; /*InternetExplorer5.5+*/ 
		margin: 5px 25px;
		text-align: left;
		color: #333;
	} 
	.content-box span {
		display: block;
		color: #999;
		text-align: right;
		padding-right: 10px;
	}
</style>