<template>
  <div id="app">
    <headers></headers>
    <div class="middle">
      <router-view/>
      <rightbar />
    </div>
    <footers></footers>
  </div>
</template>

<script>

import headers from './components/Header'
import footers from './components/Footer'
import sidebar from './components/Sidebar'
import rightbar from './components/Rightbar'

export default {
  name: 'App',
  components:{
      headers,
      footers,
      sidebar,
      rightbar
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
  font-family: Microsoft YaHei,Arial,"Arial Narrow",Georgia,Helvetica,sans-serif;
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
    border: 1px solid #ddd;
    vertical-align: top;
    font-size: 16px;
  }
  .title {
    font-size: 24px;
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
    padding: 5px;
    color: #222;
  }
  .main p {
    overflow:hidden; /*
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; */
    margin: 5px;
    color: #666;
  }
  .day {
    display: block;
    text-align: right;
    color: #999;
    margin-right: 10px;
  }
  .main a:hover {
    border-bottom: 1px solid #1E90FF;
  }
  .main a>h4:hover {
    color: #1E90FF;
  }
  @media screen and (max-width: 700px) {
    .home {
      width: 80%;
    }
  }

</style>
