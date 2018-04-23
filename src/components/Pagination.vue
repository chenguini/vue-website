<template>
	<ul class="pagination" >
		<li v-show="current != 1" @click="current-- && goto(current)" ><a href="#">上一页</a></li>
		<li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
			<a href="#" >{{index}}</a>
		</li>
		<li v-show="totalPage != current && totalPage != 0 " @click="current++ && goto(current++)"><a href="#" >下一页</a></li>
	</ul>
</template>

<script>
	export default {
		name:'pagination',
		data (){
			return {
				current:1,
				showItem:5
			}
		},
		props: ['page','totalPage'],
		computed:{
			pages:function(){
				var pag = [];
	            if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
	                   //总页数和要显示的条数那个大就显示多少条
	                var i = Math.min(this.showItem,this.totalPage);
	                while(i){
	                   pag.unshift(i--);
	                }
	            }else{ //当前页数大于显示页数了
	                var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
	                i = this.showItem;
	                if( middle >  (this.totalPage - this.showItem)  ){
	                   	middle = (this.totalPage - this.showItem) + 1
	                }
	                while(i--){
	                   pag.push( middle++ );
	                }
	            }
	            return pag
	        }
        },
     	methods:{
        goto:function(index){
          if(index == this.current) return;
            this.current = index;
            //这里可以发送ajax请求
            this.$emit("listenToChildEvent",this.current);
        }
      }
    }
</script>

<style scoped>
	.pagination {
		position: relative;
		margin-top: 50px;
		text-align: center;
	}
	.pagination li {
		display: inline-block;
		margin:0 5px;
	}
	.pagination li a {
		padding:.5rem 1rem;
		display:inline-block;
		border:1px solid #ddd;
		background:#fff;

		color:#0E90D2;
	}
	.pagination li a:hover {
		background:#eee;
	}
	.pagination li.active a {
		background:#0E90D2;
		color:#fff;
	}
</style>
