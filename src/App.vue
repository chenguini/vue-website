<template>
  <div id="app">
    <headers></headers>
    <div class="middle">
      <router-view/>
      <rightbar />
    </div>
    <footers></footers>
    <gototop></gototop>
  </div>
</template>

<script>

import headers from './components/Header'
import footers from './components/Footer'
import rightbar from './components/Rightbar'
import gototop from './components/goToTop'

export default {
  name: 'App',
  components:{
      headers,
      footers,
      rightbar,
      gototop
    },
    created() {
      document.body.removeChild(document.getElementById('loading'))
    }
}
</script>

<style>
body,div,ul,li,p,h2,h3,h4,img {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
}
.middle {
  margin-top: 75px;
  text-align: center;
  /*font-size: 0; 清除两个inline-block之间的间隔*/
}

#app {
  font-family: "Microsoft Yahei","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.home {
    width: 55%;
    text-align: left;
    display: inline-block;
    /*border: 1px solid #ddd;*/
    vertical-align: top;
    position: relative;
    /*min-height: 500px;*/
  }
  .title {
    font-size: 18px;
    color: #555;
  }
.main a,.title {
    text-align: left;
    padding: 8px;
    border-bottom: 1px dashed #ddd;
    display: block;/*内联需变成块状不换行*/
    overflow: hidden;
  }
  .main h4 {
    color: #222;
    font-size: 18px;
    font-weight: normal;
    line-height: 25px;
  }
  .main p {
    overflow:hidden; /*
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; */
    margin: 5px;
    color: #777;
    line-height: 24px;
  }
  .day {
    display: block;
    text-align: right;
    font-size: 13px;
    color: #999;
    margin-right: 10px;
  }
  .main a:hover {
    border-bottom: 1px solid #1E90FF;
  }
  .main a>h4:hover {
    color: #1E90FF;
  }
  input {
    width: 99%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px 0;
    text-indent: 10px;
  }
  input:focus {
    border-radius: 5px;
    border: 1px solid #1E90FF;
  }
  @media screen and (max-width: 700px) {
    .home {
      width: 80%;
    }
    .main p {
      font-size: 13px;
      line-height: 20px;
    }
    .main h4 {
      font-size: 14px;
    }
    .day {
      font-size: 12px;
    }
  }

</style>
