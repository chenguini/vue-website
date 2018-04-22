<template>
  <div class="home">
    <div class="edit">
      <label for="title">标题:</label>
      <input type="text" id="title" v-model="title" placeholder="请输入标题">
      <label for="content">内容:</label>
      <!-- <textarea name="content" id="content" rows="20" v-model="content"></textarea> -->
      <UE  :config=config ref="ue"></UE>
      <label for="cate">类型:</label>
      <select  v-model="selected">
        <option v-for="(item,index) in learn" :value ="index">{{item}}</option>
      </select>
      <button @click="postData">提交</button>
    </div>
    
  </div>
    
</template>

<script>
import UE from '../components/UE'
import qs from 'qs'
  export default {
    name:"edit",
    components: {UE},
    data() {
      return {
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        title:"",
        selected:"0",
        learn:[
          "HTML/CSS",
          "JS/jQuery",
          "MySql",
          "PHP"
        ],
        content:"",
        result:""
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        // this.$notify({
        //   title: '获取成功，可在控制台查看！',
        //   message: content,
        //   type: 'success'
        // });
        // console.log(content)
        return content;
      },
      postData() {
      // console.log(this.getUEContent());
      this.$http.post("http://chenguini.top/skill.php?edit=edit",qs.stringify(
          {title: this.title,cate: this.selected,content: this.getUEContent()}
          ))
        .then(res=>{
          this.result=res.data;
          // console.log(this.result);
          // this.$refs.ue.setContent('');
          // this.title = "";
          // this.cate = "";
        }).catch(error=>console.log(error));
      }
    }
  };
</script>
<style scoped>
  textarea {
    width: 100%;
  }
  .edit {
    padding: 30px;
  }
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  select {
    height: 30px;
    border-radius: 5px;
    padding: 5px;
  }
  option {
    margin: 30px;
  }
  button {
    width: 90px;
    height: 30px;
    background-color: pink;
    color: #fff;
    border: none;
    float: right;
  }
</style>
