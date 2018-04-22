<template>
	<div class="home">
		<loading v-if="isShow"></loading>
		<div class="content-box">
			<h3>{{dataList.s_title}}</h3>
			<span>发布日期：{{dataList.s_day}}</span>
			<div v-html="dataList.s_content"></div>
		</div>
	</div>
</template>

<script>

import loading from '../components/Loading'

	export default {
		name:'skill',
		data (){
			return {
				dataList:"",
				isShow:true
			}
		},
		components:{
			loading
		},
		methods:{
			getData() {
				this.$http.get("http://chenguini.top/skill.php?s_id=" + this.$route.params.s_id
					)
				.then(res=>{
					this.dataList=res.data;
					this.isShow = false;
					// console.log(this.dataList);
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
	.content-box div { 
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
	.fade-enter-active, .fade-leave-active {
		transition: opacity 5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>