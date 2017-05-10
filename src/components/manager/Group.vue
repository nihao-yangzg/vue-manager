<template>
<div id="group">
    <div class="title">
        <span>用户组管理</span>
        <div id="search">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="search"/>
        </div>
    </div>
    <div class="content">
        <el-table
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width:100%;"
            highlight-current-row
            @current-change="handleCurrentChange"
            >
           <el-table-column
            property="name"
            label="组名"
            width="120">
          </el-table-column>
           <el-table-column
            property="priority"
            label="权限" >
            <template scope="scope">
               <el-tag v-for="ii in scope.row.priority"  type="primary" style="margin:5px;">
                         {{ii}}
               </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            property="description"
            label="描述"
            >
          </el-table-column>
        </el-table>
        <div class="edit" v-bind:style="{position: 'absolute', right: '10px', top: '0px'}">
            <span class="icon icon-edit" v-bind:class="{disabled:!currentRow}" v-on:click="showEdit"></span>
            <span class="icon icon-trash" v-bind:class="{disabled:!currentRow}" ></span>
            <span class="icon icon-download-alt"></span>
             <span class="icon icon-plus" style="color: green;" v-on:click="showAdd"></span>
        </div>
        
    </div>
    
    <transition name="formshow">
    <div v-if="editformshow" class="useropt">
        <form-edit @hide="hideEdit"></form-edit>
    </div>
    </transition>
    <transition name="formshow">
      <div v-if="addformshow" class="useropt">
        <form-add @hide="hideAdd"></form-add>
      </div>
    </transition>
    
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
        tableData3: [{
          name: 'plain',
          priority: ['node:wr', 'restore:wrx', 'view:wr', 'log:r'],
          description: 'plain user group'
        }, {
          name: 'admin',
          priority: ['user:wr', 'group:wr', 'role:wr', 'node:wr', 'restore:wrx', 'view:wr', 'log:r'],
          description: 'system administrator'
        }, {
          name: 'root',
          priority: ['user:wr', 'group:wr', 'role:wr', 'node:wr', 'restore:wrx', 'view:wr', 'log:r'],
          description: 'system root'
        }, {
          name: 'guest',
          priority: ['node:r', 'restore:r', 'view:r', 'log:r'],
          description: 'system guest'
        }],
        top: 40,
        currentRow: null,
        addformshow: false,
        editformshow: false,
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
        color: green;
    }
    span.icon.icon-edit.disabled {
    color: gray;
    cursor: auto;
    }
    span.icon.disabled:hover{
        font-weight: normal;
    }
    span.icon.icon-trash {
        color: red;
    }
    span.icon.icon-trash.disabled {
        color: gray;
        cursor: auto;
    }
</style>

