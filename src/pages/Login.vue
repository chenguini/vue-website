<template>
	<div class="home">
		<div class="login-box">
			<div class="pic">
				<div><icon name="icecream4" scale="5"></icon></div>
				<div><icon name="icecream13" scale="6"></icon></div>
				<div><icon name="icecream6" scale="3"></icon></div>
				<div><icon name="icecream7" scale="8"></icon></div>
				<div><icon name="icecream11" scale="3"></icon></div>
				<div><icon name="icecream3" scale="5"></icon></div>
				<div><icon name="icecream2" scale="4"></icon></div>
				<div><icon name="icecream13" scale="3"></icon></div>
			</div>
			<input v-model="name" type="text" id="name" placeholder="请输入用户名">
			<input v-model="pwd" type="password" id="pwd" placeholder="请输入密码">
			<span class="tip">{{tip}}</span>
			<button @click="checkLogin" class="login-button">登录</button>
		</div>
	</div>
</template>

<script>
import qs from 'qs'

	export default {
		name:'login',
		data (){
			return {
				name:"",
				pwd:"",
				result:"",
				tip:""
			}
		},
		methods: {
			checkLogin(){
				this.$http.post("http://chenguini.top/skill.php",qs.stringify(
					{u_name: this.name,u_pwd: this.pwd}
					))
				.then(res=>{
					this.result=res.data;
					if (this.result != null) {
						sessionStorage.setItem("name", this.result.u_name);;
						this.$router.push('/edit')
					}else {
						this.tip = "账号或密码错误！"
					}
					
				}).catch(error=>console.log(error));
			}
		},
		beforeCreate:function() {
			if (sessionStorage.getItem("name") != null) {
				this.$router.push('/edit')
			}
		}
	}
</script>

<style scoped>
	.login-box {
		width: 50%;
		text-align: center;
		margin: 20px auto 60px auto;
		overflow: hidden;
	}
	.pic {
		height: 60px;
		display: flex;
	}
	.pic div{
		flex: 1;
		line-height: 130px;
	}
	.pic div:hover {
		transform: translate(0px,-5px);
		-ms-transform: translate(0px,-5px); /* IE 9 */
		-webkit-transform: translate(0px,-5px); /* Safari and Chrome */
	}
	#name,#pwd {
		width: 99%;
		height: 30px;
		border-radius: 5px;
		border: 1px solid #ccc;
		margin: 10px 0;
		text-indent: 10px;
	}
	#name:focus,#pwd:focus {
		border-radius: 5px;
		border: 1px solid #1E90FF;
	}
	.tip {
		color: #777;
	}
	.login-button {
		width: 90px;
		height: 30px;
		background-color: pink;
		color: #fff;
		border: none;
		float: right;
	}
	@media screen and (max-width: 700px) {
		.login-box {
			width: 80%;
		}
	}
	
</style>