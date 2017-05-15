<template>
<div id="group">
    <div class="title">
        <span>备份管理</span>
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
            property="id"
            label="名称"
            width="100">
          </el-table-column>
           <el-table-column
            property="source"
            label="源节点"
            >
          </el-table-column>
           <el-table-column
            property="sdir"
            label="源目录"
            >
          </el-table-column>
          <el-table-column
            property="destination"
            label="备份节点"
            >
          </el-table-column>
           <el-table-column
            property="ddir"
            label="备份目录"
            >
          </el-table-column>
          <el-table-column
            property="strategy"
            label="策略"
            >
          </el-table-column>
          </el-table-column>
           
          <el-table-column
            property="description"
            label="描述"
            >
          </el-table-column>
        </el-table>
        <div class="edit" v-bind:style="{position: 'absolute', right: '10px', top: '0px'}">
            <span class="icon icon-edit" v-bind:class="{disabled:!currentRow}"  v-on:click="showEdit"></span>
            <span class="icon icon-trash" v-bind:class="{disabled:!currentRow}" @click="deleteBackup"  ></span>
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
  import FormEdit from './backrestore/edit'
  import FormAdd from './backrestore/add'
  export default {
    components:{
      FormEdit,
      FormAdd
    },
    data() {
      return {
        tableData3: [{
            id: '001',
            source: 'node01',
            sdir: '/tmpxfs',
            destination: 'node03',
            ddir: '/root/',
            strategy: '每天2：10：00',
            description: 'node03 backup for node01'
        }, {
            id: '002',
            source: 'node02',
            sdir: '/tmpxfs',
            destination: 'node03',
            ddir: '/root/',
            strategy: '每天2：10：00',
            description: 'node03 restore for node02'
        }, {
            id: '003',
            source: 'node03',
            sdir: '/tmpxfs',
            destination: 'node04',
            ddir: '/root/',
            strategy: '每天2：10：00',
            description: 'node04 backup for node03'
        }, {
            id: '004',
            source: 'node06',
            sdir: '/tmpxfs',
            destination: 'node08',
            ddir: '/root/',
            strategy: '每天2：10：00',
            description: 'node08 backup for node06'
        }, {
            id: '004',
            source: 'node05',
            sdir: '/tmpxfs',
            destination: 'node09',
            ddir: '/root/',
            strategy: '每天2：10：00',
            description: 'node09 restore for node05'
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
          if (!this.currentRow) {
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
      },
      deleteBackup(){
        this.$confirm('确定要删除该备份作业吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            }).catch(() => {

            });
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

