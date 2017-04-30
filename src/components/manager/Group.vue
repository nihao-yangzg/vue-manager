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
            property="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            property="address"
            label="地址">
          </el-table-column>
        </el-table>
        <div class="edit" v-bind:style="{position: 'absolute', right: '10px', top: '0px'}">
            <span class="icon icon-edit" style="color: green;" v-on:click="showEdit"></span>
            <span class="icon icon-trash" style="color: red;" ></span>
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
        margin: 20px 20px;
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
     div.form-control {
       width: 400px;
       margin-bottom: 20px;
       
      
     }
     div.form-control label {
       width: 80px;
       display: block;
       float: left;
       margin-right: 10px;
       line-height: 35px;
     }
     div.form-control input{
          height: 25px;
          width: 200px;
          background: white;
          border:solid 1px;
          border-color: rgba(12,72,66,0.5);
          
          padding: 4px 5px;
               
     }
     div.form-control input:focus{
          border-color: rgba(12,72,66,1);
          box-shadow:0 0 3px rgba(12,72,66,1);
          transition: border-color 0.35s ease-in-out 0s;
          transition: box-shadow 0.35s ease-in-out 0s;
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

