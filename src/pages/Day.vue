<template>
	<div class="home">
		<div class="title">生活</div>
		<ul class="main">
			<li v-for="item in dataList">
				<router-link :to="'/day/' + item.d_id">
					<h4>{{item.d_title}}</h4>
					<p>{{contentLimit(item)}}</p>
					<span class="day">发布时间：{{item.d_day}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'day',
		data (){
			return {
				dataList:''
			}
		},
		methods:{
			getData() {
				this.$http.get("http://chenguini.top/skill.php?day=day"
					)
				.then(res=>{
					this.dataList=res.data;
				}).catch(error=>console.log(error));
			},
			contentLimit(item) {
				if (item.d_content.length>145) {
					return  item.d_content.substr(0,145) + '...' ;
				}else {
					return item.d_content;
				}
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

<style>
	
</style>