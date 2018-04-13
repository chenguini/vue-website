<template>
	<div class="rightbar">
		<h3>关于我</h3>
		<div class="connect">
			<a href="https://weibo.com/u/5331673770?refer_flag=1001030201" target="_blank" class="weibo">
				<icon name="weibo" scale="3"></icon>
				<p>微博</p>
			</a>
			<a class="email" title="chengn07@163.com">
				<icon name="email" scale="3"></icon>
				<p>邮箱</p>
			</a>
			<a class="wchat" @click="changeTip">
				<icon name="wchat" scale="3"></icon>
				<p>微信</p>
				<div class="tips" v-bind:class="{ tipsactive: isTips }">
					<img src="../assets/image/wchat.png" alt="">
				</div>
			</a>
		</div>		
		<div class="last">
			<h3>最新文章</h3>
			<ul>
				<li v-for="item in lastList">
					<router-link :to="'/skill/' + item.s_id">{{item.s_title}}</router-link>
				</li>
			</ul>
		</div>
		<div class="hot">
			<h3>热门推荐</h3>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'rightbar',
		data() {
			return {
				lastList:'',
				isTips:false
			}
		},
		methods:{
			getLast() {
				this.$http.get("http://chenguini.top/skill.php"
					)
				.then(res=>{
					this.lastList=res.data;
				}).catch(error=>console.log(error));
			},
			changeTip() {
				this.isTips = !this.isTips;
			}
		},
		created() {
			this.getLast();

		}
	}
</script>

<style scoped>
	.rightbar {
		width: 22%;
		display: inline-block;
		vertical-align: top;
		font-size: 16px;
		margin-left: 20px;
	}
	.connect {
		display: flex;
		display:-webkit-flex;
		margin-bottom: 8px;

	}
	.connect a {
		display: block;
		flex: 1;
		font-size: 16px;
		color: #999;
		margin: 10px;
		overflow: hidden;
		transition: width 2s;
		-moz-transition: width 2s;	/* Firefox 4 */
		-webkit-transition: width 2s;	/* Safari 和 Chrome */
		-o-transition: width 2s;	/* Opera */
	}
	 a:hover {
		color: #1E90FF;
		font-weight: bold;
	}
	h3 {
		padding: 10px 8px;
		text-align: left;
		font-size: 18px;
		color: #666;
		border-top: 1px solid #ddd;
	}
	.last a {
		color: #777;
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
		color: #1E90FF;
	}
	.wchat {
		position:relative;
		cursor: pointer;
	}
	.wchat div.tips{
		position:absolute;
		top:-80px;
		left:10px;
		display:none;
	}
	.tips img{
		width: 80px;
	}
	.wchat div.tipsactive{
		display:block;
	}
	@media screen and (max-width: 700px) {
		.rightbar {
			display: none;
		}
	}

</style>