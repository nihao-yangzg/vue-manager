<template>
<div id="group">
    
    <div class="content">
       <div class="item">
            <div class="title1">
                <span>我的信息</span>
            </div>
            <div class="content1">
                <div class="title2">账户名</div>
                <div class="content2">{{account.username}}</div>
                <div class="title2">邮箱</div>
                <div class="content2">
                    
                    <div v-if="resetmailbox" style="margin-left: 100px;">
                        <form action="" class="account-form">
                            <div class="account-form-control">
                                <label for="new-mailbox">新邮箱</label>
                                <input type="text" name='new-mailbox' v-model="account.mailbox" focus="focus">
                               
                            </div>
                             <button class="account-button" @click="resetmailbox=false" >取消</button>
                             <button class="account-button" @click="resetmailbox=false" >确定</button>
                        </form>
                    </div>
                    <div v-else>
                        <span >{{account.mailbox}}</span>
                        <span class='reset icon icon-edit' @click="resetmailbox=true"></span>
                    </div>
                </div>
                <div class="title2">密码</div>
                <div class="content2">
                    <div v-if="resetpwdshow" style="margin-left: 100px;">
                    <form class="account-form">
                        <div class="account-form-control">
                            <label for="old-pwd">旧密码</label>
                            <input type="password" name='old-pwd'>
                        </div>
                        <div class="account-form-control">
                            <label for="new-pwd">新密码</label>
                            <input type="password" name='new-pwd'>
                        </div>
                        <div class="account-form-control">
                            <label for="retype-pwd">再次输入</label>
                            <input type="password" name='retype-pwd'>
                        </div>
                        <button class="account-button" @click="resetpwdshow=false">取消</button>
                        <button class="account-button" @click="resetpwdshow=false">确定</button>
                        
                    </form>
                    </div>
                    <div v-else>
                    <span @click="resetpwdshow=true" class="reset">修改密码</span>
                    
                    </div>
                </div>
            </div>
            <div class="title1">
                <span>上次登录信息</span>
            </div>
            <div class="content1">
                <div class="title2">
                    登录时间
                </div>
                <div class="content2">
                    {{account.time}}
                </div>
                <div class="title2">
                    客户端信息
                </div>
                <div class="content2">
                    {{account.terminal}}
                </div>
                <div class="title2">
                    客户端IP地址
                </div>
                <div class="content2">
                    {{account.ip}}
                </div>
                <div class="title2">
                    客户端系统
                </div>
                <div class="content2">
                    {{account.system}}
                </div>
            </div>
       </div>
       <div class="item">
            <div class="title1">
                <span>账户异常情况</span>
            </div>
            <div class="content1">
                <div  class="content2">上次会话结束后,共发生过<span style="color:red;"> {{account.tries}} </span>登录重试</div>
            </div>
        </div>
       <div class="item">
            <div class="title1">本此会话</div>
            <div class="content1">
                <div class="title2">有效期剩余</div>
                <div class="content2">{{account.expiredate}}</div>
            </div>
        </div>
      
        
    </div>
    
   
</div>
  
</template>

<script>
  import FormEdit from './group/edit'
  import FormAdd from './group/add'
  export default {
    components:{
      FormEdit,
      FormAdd
    },
    data() {
      return {
        account:{
            username: 'visitor01',
            mailbox: 'visitor01@visitor.com',
            time: 'Thu, 11 May 2017 01:11:15 GMT',
            terminal: 'Mozilla/5.0 (X11; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0',
            ip: '1.2.3.4',
            system: 'microsoft windows 7',
            tries: 2,
            expiredate: '10 days'
        },
        top: 40,
        currentRow: null,
        addformshow: false,
        editformshow: false,
        resetpwdshow: false,
        resetmailbox: false,
      }
    },
   

    methods: {
      
      // showedit(row, column, cell, event){
      //   //   console.log(event.target.offsetLeft);
      //     console.log(event.target.offsetTop);
      //     this.top = 40 + event.target.offsetTop;
          
      // },
      // hideedit(row, column, cell, event){
      //     console.log(row)
      //     console.log(column)
      //     console.log(cell)
      //     this.top = 0;
         
      // },
      showEdit: function(){
        if(!this.currentRow ){
          return;
        }
        this.editformshow = true;
      },
       hideEdit: function(){
        this.editformshow = false;
      },
      showAdd: function(){
        this.addformshow = true;
      },
      hideAdd: function(){
        this.addformshow = false;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>
<style scoped>
    #group{
        width: 100%;
        text-align: left;
       
    }
    #group .title{
        height: 30px;
        line-height:30px;
        padding: 10px 20px;
        margin: 10px 20px;
        background-color:  rgb(36,147,110);
    }
     #search {
      float: right;
      border: solid 1px rgb(36,147,110);
      height: 30px;
      width: 120px;
      border-radius: 15px;
      padding-left: 10px;
      background-color: white;
    } 
    #search input{
      width: 80px;
      border: none;
      background-color: transparent;
    }
    
    .content {
        margin: 10px 20px;
        position: relative;
    }
    .content .edit {
        line-height: 40px;
        z-index: 1000;
    }
     .content .edit span{
       cursor: pointer;
       padding-right: 4px;
     }
     .content .edit span:hover{
       font-weight: bold;
     }
     .useropt {
       background-color: white;
       border:solid 1px rgba(12,72,66,0.5);
       position: absolute;
       top: 0;
       right: 0;
       bottom: 0;
       z-index: 2000;
     }
     .useropt .subtitle{
       text-align: center;
       margin: 20px 0;
     }
     .useropt .form {
       margin-left: 50px;
     }
     
     span.button{
       border: solid rgb(36, 147, 110) 1px;
       display: block;
       float: left;
       text-align: center;
       width: 60px;
       height: 25px;
       line-height: 25px;
       margin-bottom: 20px;
       margin-right: 20px;
       cursor: pointer;
     }
     span.button.submit{
       background-color: rgb(36, 147, 110);
       color: white;
     }
     div.bottom{
       margin-bottom: 20px;
     }
     .useropt div.form span.el-tag.el-tag--primary{
       background-color: rgba(36, 147, 110,0.9);
       color: white;
     }
     div.el-select-dropdown.is-multiple .el-select-dropdown__item.selected{
       color:rgb(36, 147, 110);

     }
     .useropt input.el-input__inner{
       border-radius: 0;
      
     }

     .formshow-enter-active{
       
       animation: fold-in 0.5s;    
     }
     .formshow-leave-active {
       animation: fold-out 0.5s;
     }
    @keyframes fold-in {
      0% {
        position: absolute;
        right: -400px;
      }
      
      100% {
        position: absolute;
        right: 0;
      }
    }
      @keyframes fold-out {
        0% {
        position: absolute;
          right: 0;
        }
        100%{
        position: absolute;
          right: -400px;
        }
      }
          span.icon.icon-edit {
        color: rgb(36,147,110); ;
    }
    
    .content .item {
        border-bottom: solid 1px rgba(36, 147, 110,0.5);
        font-size: 14px;
    }
    .content .item .title1{
        height:25px;
        line-height: 25px;
        background-color: rgba(36, 147, 110,0.5);
        padding: 5px 20px;
        color: rgb(12,72,66);;

    }
    .content .item .title2{
        margin-left: 60px;
        float:left;
        width: 100px;
        padding: 3px 0;
        line-height: 20px;
    }
    .content .item .content2{
        margin-left: 60px;
         padding: 3px 0;
        line-height: 20px;
    }
    .content .item .content2::after{
        content:'';
        display: block;
        clear: both; 
    }
    .reset{
        color:rgb(36,147,110); 
    }
    .reset:hover{
        cursor: pointer;
        
    }
    div.account-form-control {
        margin-bottom: 5px;
    }
    div.account-form-control label{
        width: 60px;
        display:block;
        float:left;
        line-height: 28px;
    }
    div.account-form-control input {
        width: 200px;
        padding: 3px;
        background-color:white;
        border:solid 1px #9f9f9f;
    }
    button.account-button{
        width: 50px;
        height: 25px;
        border: solid 1px #9f9f9f;
        background-color: white;
    }
    button.account-button:hover{
        cursor: pointer;
        border-color: rgb(36,147,110);
        transition: all ease 0.5s;
        color: rgb(36,147,110);
    }
</style>

