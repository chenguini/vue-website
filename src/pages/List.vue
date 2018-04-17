<template>
	<div class="home">
		<div class="title">学习</div>
		<ul class="main">
			<li v-for="item in dataList">
				<router-link :to="'/skill/' + item.s_id">
					<h4>{{item.s_title}}</h4>
					<p>{{contentLimit(item)}}</p>
					<span class="day">发布时间：{{item.s_day}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'list',
		data (){
			return {
				dataList:'',
				learn:[
					"HTML/CSS",
					"JS/jQuery",
					"MySql",
					"PHP"
				]
			}
		},
		methods:{
			getData() {
				this.$http.get("http://chenguini.top/skill.php?s_cate=" + this.$route.params.index
					)
				.then(res=>{
					this.dataList=res.data;
				}).catch(error=>console.log(error));
			},
			contentLimit(item) {
				return  item.s_content.substr(0,145) + '...' ;
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
	
</style>