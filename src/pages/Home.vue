<template>
	
	<div class="home">
		<loading v-if="isShow"></loading>
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
		<ul class="main">
			<li v-for="item in dataList">
				<router-link :to="'/skill/' + item.s_id">
					<h4>{{item.s_title}}</h4>
					<p v-text="contentLimit(item)"></p>
					<span class="day">发布时间：{{item.s_day}}</span>
				</router-link>
			</li>
		</ul>
		<pagination :page="page" :totalPage="totalPage" v-on:listenToChildEvent="changePage"></pagination>
	</div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper,swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import pagination from '../components/Pagination'

Vue.use(VueAwesomeSwiper)

	export default {
		name:'home',
		data (){
			return {
				dataList:'',
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
       			},
       			page:'1',
       			totalPage:'',
				isShow:true
			}
		},
		components:{
			swiper,
			swiperSlide,
			pagination
		},
		methods:{
			getData() {
				this.isShow = true;
				this.$http.get("http://chenguini.top/skill.php?page="+this.page
					)
				.then(res=>{
					this.dataList = res.data['content'];
					this.totalPage = res.data['totalPage'];
					this.isShow = false;
				}).catch(error=>console.log(error));
			},
			contentLimit(item) {
				return  item.s_content.replace(/<\/?.+?>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&nbsp;/g,' ').substr(0,145) + '...' ;
			},
			changePage(data) {
				this.page = data;
				this.getData();
			}
		},
		mounted() {
			this.getData();

		},computed: {
			
		}
	}
</script>

<style scoped>
	.swiper {
		padding: 25px;
		width: 80%;
		margin: 0 auto;
	}
	.swiper img{
		width: 100%;
		height: 30%;
		margin: 0 auto;
	}
	@media screen and (max-width: 768px) {
    .swiper {
      width: 80%;
    }
  }
</style>