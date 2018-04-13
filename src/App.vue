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
    display: inline-block;
    border: 1px solid #ddd;
    vertical-align: top;
    font-size: 16px;
  }
  @media screen and (max-width: 700px) {
    .home {
      width: 80%;
    }
  }

</style>
