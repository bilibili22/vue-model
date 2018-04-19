<template>
  <div class="container">
    <header></header>
    <div class = "content">
      <router-view></router-view>
    </div>
    <footer>
      <ul>
        <router-link to = "/" tag = "li">
          <span></span>
          <p>首页</p>
        </router-link>
        <router-link to = "/kind" tag = "li">
          <span></span>
          <p>分类</p>
        </router-link>
        <router-link to = "/cart" tag = "li">
          <span></span>
          <p>购物车</p>
        </router-link>
        <router-link to = "/user" tag = "li">
          <span></span>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html, body, .container{
  width: 100%;
  height:100%;
}
.container {
  display: flex;
  flex-direction: column;
}
.container header{
  width: 100%;
  height: 44px;
  background-color: #f66;
}
.container .content{
  width: 100%;
  flex: 1;
}
.container footer{
  width: 100%;
  height: 50px;
  background-color: #eee;
}
.container footer ul{
  width: 100%;
  height:100%;
  display: flex;
}
.container footer ul li{
  flex: 1;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-link-exact-active.router-link-active{
  color: #f66;
}
</style>
