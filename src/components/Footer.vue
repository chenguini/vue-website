<template>
  <div class="footer">
    <div class="icon">
      <icon name="tree1" scale="4"></icon>
    </div>
    <div class="content">
      <p>平安喜乐，万事胜意</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'footers',
    data (){
      return {

      }
    }
  }
</script>

<style scoped>
  .footer {
    margin-top: 20px;
    overflow: hidden;
  }
  .icon {
    width: 37px;
    height: 37px;
    position: relative;
    animation:myfirst 5s linear 2s infinite alternate;
    /* Firefox: */
    -moz-animation:myfirst 5s linear 2s infinite alternate;
    /* Safari and Chrome: */
    -webkit-animation:myfirst 5s linear 2s infinite alternate;
    /* Opera: */
    -o-animation:myfirst 5s linear 2s infinite alternate;
  }
  @keyframes myfirst
  {
    from  {left:15%; top:0px;}
    to {left:85%; top:0px;}
  }
  @-webkit-keyframes myfirst /* Safari and Chrome */
  {
    from  {left:15%; top:0px;}
    to {left:85%; top:0px;}
  }
  .content {
    color: #999;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: #f5f6f5;
    border-top: 1px solid #ddd;
  }
</style>