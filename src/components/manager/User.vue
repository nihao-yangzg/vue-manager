<template>
<div id="user">
    <div class="title">
        <span>用户管理</span>
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
            property="username"
            label="用户名"
            >
          </el-table-column>
          
          
           <el-table-column
            property="priority"
            label="角色" >
            <template scope="scope">
               <el-tag v-for="ii in scope.row.roles"  type="primary" style="margin:5px;">
                         {{ii}}
               </el-tag>
            </template>
            
          </el-table-column>
          <el-table-column
            property="mailbox"
            label="邮箱"
            >
          </el-table-column>
          <el-table-column
            property="description"
            label="描述"
            >
          </el-table-column>
        </el-table>
        <div class="edit" v-bind:style="{position: 'absolute', right: '10px', top: '0px'}">
            <span class="icon icon-plus" style="color: green;" v-on:click="showAdd"></span>
            <span class="icon icon-edit"  v-bind:class="{disabled:!currentRow}" v-on:click="showEdit"></span>
            <span class="icon icon-download-alt" v-on:click="showExportForm"></span>
            <span class="icon icon-trash"  v-bind:class="{disabled:!currentRow}" v-on:click="deleteuser" ></span>
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
    <div v-if='showDelete'>
        <delete-modal></delete-modal>
    
    </div>
    <transition name="formshow">
      <div v-if='showExport' class="useropt">
        <export v-on:hide="hideExport"></export>
      </div>
    </transition>
</div>
  
</template>

<script scoped>
  import FormEdit from './user/edit'
  import FormAdd from './user/add'
  import DeleteModal from './delete.vue'
  import Export from './export.vue'
  export default {
    components:{
      FormEdit,
      FormAdd,
      DeleteModal,
      Export,
    },
    data() {
      return {
        tableData3: [{
          username: 'user1',
          description: 'plain user',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],
          
        }, {
          username: 'user2',
          description: 'administrator',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],

        }, {
          username: 'user3',
          description: 'plain user',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],

        }, {
          username: 'user2',
          description: 'plain user',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],
        }, {
          username: 'user4',
          description: 'plain user',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],
        }, {
          username: 'user5',
          description: 'plain user',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],
        }, {
          username: 'user6',
          description: 'plain user',
          mailbox: 'user1@ttt.com',
          roles: ['admin'],
        }],
        details: {
          username: 'user3', 
          mailbox: 'user3@ttt.com',
          priority: ['nodes', 'backandrestore', 'view', 'log'],
          opritions:['add strategy']
        },
        top: 40,
        currentRow: null,
        addformshow: false,
        editformshow: false,
        showDelete: false,
        showExport: false,
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
      showExportForm: function(){
          this.showExport = true;
      },
      hideExport: function(){
          this.showExport = false;
      },
      deleteuser: function(){
         this.$msgbox({
          title: '删除提示',
          message: '是否确认删除此条目',
          showCancelButton: true,
          confirmButtonText: '是',
          cancelButtonText: '否'
         });
      },
      showEdit: function(){
        if (!this.currentRow){
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
    #user{
        width: 100%;
        text-align: left;
       
    }
    #user .title{
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
     
</style>

<style>
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
  div.form-control input{
          width: 200px;
          background: white;
          border:solid 1px;
          border-color: rgba(12,72,66,0.5);
          padding: 4px 5px;
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
