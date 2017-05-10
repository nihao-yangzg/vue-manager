<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  width:100%;
  height: 100%;
}
body{
  margin:0;
}

div.el-message-box{
  border-radius: 0;
}
div.el-message-box button.el-button.el-button--default{
  border-radius: 0;
  background-color: white;
}
div.el-message-box button.el-button.el-button--default:hover{
  border-color: rgb(36,147,110);
  color: rgb(36,147,110);
}
div.el-message-box button.el-button.el-button--default.el-button--primary {
  border-color: rgb(36,147,110);
  background-color: rgb(36,147,110);
}
div.el-message-box button.el-button.el-button--default.el-button--primary:hover{
  color: white;
}
div.el-step__head.is-success.is-text{
    background-color: rgb(36,147,110);
    border-color: rgb(36,147,110);
}
div.el-step__title.is-success{
  color:  rgb(36,147,110);
}
</style>
