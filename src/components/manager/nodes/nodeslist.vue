<template>
<div id="nodeslist">
    <div class="title">
        <span>节点管理</span>
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
            property="hostname"
            label="节点名"
            >
            <template scope='scope'>
                <span @click="details(scope.row.hostname)" style="color: rgb(36,147,110); cursor: pointer;">{{scope.row.hostname}}</span>
            </template>
          </el-table-column>
          <el-table-column
            property="ip"
            label="ip地址"
            >
          </el-table-column>
         
          </el-table-column>
          <el-table-column
            property="description"
            label="说明">
          </el-table-column>
        </el-table>
        <div class="edit" v-bind:style="{position: 'absolute', right: '10px', top: '0px'}">
            <span class="icon icon-edit" style="color: green;" v-on:click="showEdit"></span>
            <span class="icon icon-trash" style="color: red;" @click="deleteNode"></span>
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
  import FormEdit from './edit'
  import FormAdd from './add'
  export default {
    components:{
      FormEdit,
      FormAdd
    },
    data() {
      return {
        tableData3: [{
          hostname: 'node01',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'physical node, httpd server',

        }, {
          hostname: 'node02',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'vitural machine, nginx server',
        }, {
          hostname: 'node03',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'vitural machine, ntp server',
          dir: '/'
        }, {
          hostname: 'node04',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'rabbitmq server',
        }, {
          hostname: 'node05',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'physical node, storage server',
        }, {
          hostname: 'node06',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'vitural machine, idle',
        }, {
          hostname: 'node07',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'vitural machine, idle',
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
      },
      deleteNode() {
        this.$confirm('确定要删除该节点吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            }).catch(() => {

            });
      },
      details: function(item){
          console.log(item);
          let route = this.$route.path;
          this.$router.push(route + '/details?node=' + item);
      }
    }
  }
</script>
<style scoped>
    #nodeslist{
        width: 100%;
        text-align: left;
       
    }
    #nodeslist .title{
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
     
</style>

