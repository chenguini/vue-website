<template>
	<div class="home">
		<loading v-if="isShow"></loading>
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
				dataList:'',
				isShow:true
			}
		},
		methods:{
			getData() {
				this.$http.get("http://chenguini.top/skill.php?day=day"
					)
				.then(res=>{
					this.dataList=res.data;
					this.isShow = false;
				}).catch(error=>console.log(error));
			},
			contentLimit(item) {
				if (item.d_content.length>145) {
					return  item.d_content.replace(/<\/?.+?>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&nbsp;/g,' ').substr(0,145) + '...' ;
				}else {
					return item.d_content;
				}
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

<style>
	
</style>