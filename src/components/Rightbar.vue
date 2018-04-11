<template>
	<div class="rightbar">
		<ul class="connect">
			<li class="weibo">
				<icon name="weibo" scale="3"></icon>
			</li>
			<li class="email">
				<icon name="email" scale="3"></icon>
			</li>
			<li class="wchat">
				<icon name="wchat" scale="3"></icon>
			</li>
		</ul>
		<div class="hot">
			<h3>热门推荐</h3>
			<ul>
				<li>gh</li>
			</ul>
		</div>
		<div class="last">
			<h3>最新文章</h3>
			<ul>
				<li v-for="item in lastList">
					<router-link :to="'/skill/' + item.s_id">{{item.s_title}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'rightbar',
		data() {
			return {
				lastList:''
			}
		},
		methods:{
			getLast() {
				this.$http.get("http://127.0.0.1/bootstrap/skill.php"
					)
				.then(res=>{
					this.lastList=res.data;
				}).catch(error=>console.log(error));
			}
		},
		created() {
			this.getLast();

		}
	}
</script>

<style scoped>
	.rightbar {
		width: 300px;
		display: inline-block;
		vertical-align: top;
		font-size: 16px;
		margin-left: 20px;

	}
	h3 {
		padding: 5px 0;
		text-align: left;
		font-size: 18px;
		color: #666;
		border-top: 1px solid #ddd;
	}
	.connect {
		display: flex;
		display:-webkit-flex;
	}
	.connect li {
		flex: 1;
		font-size: 16px;
		color: #666;
	}
	.last a {
		color: #999;
		text-align: left;
		padding: 8px;
		border-bottom: 1px dashed #ddd;
		display: block;/*内联需变成块状不换行*/
		word-break: keep-all;/*不换行*/
		white-space: nowrap;/*不换行*/
		overflow: hidden;
		text-overflow: ellipsis;/*文本溢出显示省略标记需与overflow-hidden;一起使用*/
	}
	.last a:hover {
		color: blue;
	}
</style>