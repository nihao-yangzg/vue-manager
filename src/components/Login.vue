<template>
<div class="container">
    <div class="main">
        <div class="title">
            登 录
        </div>
        <div class="contents">
            <div class="content">
                <span class="icon icon-user"></span>
                <input type="text" placeholder="username" autofocus="autofocus">
            </div>
            <div class="content">
                <span class="icon icon-key"></span>
                <input type="password" placeholder="password">
            </div>
            <div class="button">
                <!--button>LOGIN</button-->
                <span @click="login">Login</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data: function(){
            return {}
        }, 
        methods: {
            login: function(){
                this.$router.push({ path: '/index/user'});
            }
        }
    }
</script>

<style scoped>
    div.container {
        width:100%;
        height:100%;
    background-color: rgb(12,72,66);
    }
    .main{
        // background-color: #ffffff;
        // opacity: 0.8;
        height: 300px;
        width: 400px;
        // border: solid rgb(36,147,110) 1px;
        // border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -200px;
        /*margin: 0 auto;*/
    }
    .title{
        margin-top: 30px;
        // padding-left: 50px;
        // text-align:left;
        font-size: 26px;
        color: rgb(36,147,110);
    }
    .contents{
        margin-top: 20px;
    }
    button{
        background-color: rgb(36,147,110);
        color: white;
        height:40px;
        width: 302px;
        border: solid 1px rgb(36,147,110);
        border-radius: 5px;
        padding:0;
        margin-top: 20px;
    }
    input {
        margin: 3px 0;
        height: 30px;
        width: 250px;
        border:none;
        padding: 2px 10px;
        font-size: 18px;
        color:rgb(36,147,110);
        background-color: transparent;
        float:right;
        outline:none;
    }

    .content{
        height: 40px;
        width: 300px;
        margin: 20px auto;
        border-bottom: solid 1px rgb(36,147,110);
        border-top: none;
        border-left: none;
        border-right: none;
        
    }
    .content.active{
         border-bottom: solid 1px rgb(36,147,110);
    }
    span.icon{
        padding-left:10px;
        color: rgb(36,147,110);
        line-height: 40px;
    }
    div.button{
        text-align:right;
        padding-right: 50px;
        color: rgb(36,147,110);
        font-size: 20px;
        font-weight: normal;
        margin-top: 50px;
    }
    div.button>span{
        cursor: pointer;
    }
</style>
