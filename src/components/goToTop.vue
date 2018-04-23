<template>
	<div class="top" @click="toTop"  :class="{show:isActive}">
		<icon class="topicon" name="totop" scale="3"></icon>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive:false
			}
		},
		methods:{
			toTop(){
				var gotoTop= function(){
					var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
					currentPosition -= 10;//参数10表示间隔的幅度大小，以此来控制速度
					if (currentPosition > 0) {
						window.scrollTo(0, currentPosition);
					}
					else {
						window.scrollTo(0, 0);
						clearInterval(timer);
						timer = null;
					}
				}
				var timer=setInterval(gotoTop,1);
			}
		},
		created(){
            var vm=this;
            window.onscroll=function(){
                if (document.documentElement.scrollTop>60) {
                	// console.log(vm);
                	// console.log(this);
                    vm.isActive=true;
                }else {
                    vm.isActive=false;
                }
            }
        }
	}
</script>

<style scoped>
	.top {
		position: fixed;
		bottom: 80px;
		right: 30px;
		background-color: #696e78;
		opacity: 0.5;
		cursor: pointer;
		height: 50px;
		width: 50px;
		text-align: center;
		border-radius: 25px;
		display: none;
	}
	.show {
		display: block;
	}
	.topicon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.top:hover {
		opacity: 1;
	}
</style>