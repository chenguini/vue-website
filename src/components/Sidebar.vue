<template>
	<div class="sidebar">
		<ul class="list">
			<template v-for="item in barlist">
				<li @click="showToggle(item)" class="bigtitle" :class="{ 'on-choose': isChoose == item.title }" >
					<router-link :to="item.path">
						<div class="icon">
							<icon :name="item.icon" scale="3"></icon>
						</div>
						{{item.title}}
					</router-link>
					<ul v-if="stutas == item.title">
						<li class="smalltitle" v-for="small in item.smalltitle">
							<router-link to="/">{{small.smallname}}</router-link>
						</li>
					</ul>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'sidebar',
		data() {
			return {
				barlist:[
					{
						title:"全部",
						icon:"bar-all",
						path:"/home"
					},
					{
						title:"Web",
						icon:"bar-web",
						path:"/home/web",
						smalltitle:[
							{
								smallname:"html",
								smallpath:"../pages/Home.vue"
							},
							{
								smallname:"web",
								smallpath:"../pages/Home.vue"
							}
						]
					},
					{
						title:"PHP",
						icon:"bar-php",
						path:"/home/php",
						smalltitle:[
							{
								smallname:"html",
								smallpath:"../pages/Home.vue"
							},
							{
								smallname:"web",
								smallpath:"../pages/Home.vue"
							}
						]
					},
					{
						title:"MySql",
						icon:"bar-mysql",
						path:"/home/mysql",
						smalltitle:[
							{
								smallname:"html",
								smallpath:"../pages/Home.vue"
							},
							{
								smallname:"web",
								smallpath:"../pages/Home.vue"
							}
						]
					},
					{
						title:"生活小记",
						icon:"bar-day",
						path:"/home/day",
						smalltitle:[
							{
								smallname:"html",
								smallpath:"../pages/Home.vue"
							},
							{
								smallname:"web",
								smallpath:"../pages/Home.vue"
							}
						]
					}
					
				],
				stutas:"全部",
				isChoose:"全部"
			}
		},
		methods:{ 
			showToggle:function(item){ 
				if (this.stutas == item.title) {
					this.stutas = ""
				}else {
					this.stutas = item.title;
					this.isChoose = item.title
				}
			}
		}
	}
</script>

<style scoped>
	.sidebar {
		float: left;
		width: 200px;
		border-bottom: 1px solid #ececec;
		border-right: 1px solid #ececec;
		color: #000;
		margin-left: 60px;
		margin-top: 35px;
	}
	.smalltitle {
		padding-left: 40px;
	}
	.bigtitle {
		border-bottom: 1px dashed #ececec;
		line-height: 28px;
	}
	li {
		color: #000;
	}
	a {
		color: #000;
		display: block;
		padding: 12px 10px;
	}
	.list a:hover,.on-choose {
		color: #4285f4;
	}
	.router-link-exact-active {
		color: #4285f4;
	}
	.icon {
		float: left;
		padding-right: 5px;
	}
</style>