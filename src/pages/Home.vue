<template>
	
	<div class="home">
		<div class="swiper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in pic" :key=index>
					<img :src="item.url" alt="">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
				<!-- <div class="swiper-button-prev  swiper-button-white" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
			</swiper>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper,swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

	export default {
		name:'home',
		data (){
			return {
				data:'',
				pic:[
					{
						url:require('../assets/image/door.jpg')
					},
					{
						url:require('../assets/image/dusk.jpg')
					},
					{
						url:require('../assets/image/library.jpg')
					}
				],
				 swiperOption: {
         			spaceBetween: 30,
          			loop: true,
          			centeredSlides: true,
          			zoom: true,
          			effect: 'fade',
          			autoplay: {
          				delay: 2500,
          				disableOnInteraction: false
          			},
        		  	// navigation: {
           		// 	 	nextEl: '.swiper-button-next',
           		// 	 	prevEl: '.swiper-button-prev'
          			// },
          			pagination: {
          				el: '.swiper-pagination',
          				clickable: true
          			}
       			}
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		methods:{
			getData() {
				this.$http.get("http://127.0.0.1/bootstrap/skill.php"
					)
				.then(res=>{
					this.data=res.data;
				}).catch(error=>console.log(error));
			}
		},
		created() {
			this.getData();

		}
	}
</script>

<style scoped>
	.home {
		width: 700px;
		display: inline-block;
		border: 1px solid #ddd;
		background-color: #fff;
		vertical-align: top;
		font-size: 16px;
	}
	.swiper {
		padding: 25px;
		width: 550px;
		height: 330px;
		margin: 0 auto;
	}
	.swiper img{
		width: 550px;
		height: 330px;
	}
	
</style>