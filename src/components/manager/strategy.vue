<template>
<div id="group">
    <div class="title">
        <span>策略管理</span>
        
    </div>
    <div class="operations">
        <div  class='button-group'>
           <span class="icon icon-plus" style="color: green;" v-on:click="showAdd" title="添加"></span>
        </div>
        <div class='button-group'>
            <span class="icon icon-edit" style="color: green;" v-on:click="showEdit"></span>
        </div>
        <div  class='button-group'>
            <span class="icon icon-trash" style="color: red;" ></span>
        </div>
       <div  class='button-group'>
             <span class="icon icon-magnet"></span>
        </div>
        
        <div  class='button-group'>
            <span class="icon icon-download-alt"></span>
        </div>
        <div  class='button-group'>
             <span class="icon icon-upload-alt"></span>
        </div>
       
        
    </div>
    <div id="search">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="search"/>
        </div>
    <div class="content">
         
        <el-table
            :data="tableData3"
            tooltip-effect="dark"
            style="width:100%;"
            highlight-current-row
            @current-change="handleCurrentChange"
            >
            <el-table-column
            property="name"
            label="策略名"
            >
            </el-table-column>
            <el-table-column
            property="object"
            label="对象"
             >
          </el-table-column>
          <el-table-column
            property="time"
            label="备份时间"
             >
          </el-table-column>
          <el-table-column
            property="media"
            label="介质"
            >
          </el-table-column>
            <el-table-column
            property="lifespan"
            label="保存时间（天）"
             >
             <template scope="scope">
               <span>{{scope.row.lifespan}}</span>             
             </template>
          </el-table-column>
           <el-table-column
            property="method"
            label="备份方式"
           >
          </el-table-column>
         
        </el-table>
        
        
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
  import FormEdit from './strategy/edit'
  import FormAdd from './strategy/add'
  export default {
    components:{
      FormEdit,
      FormAdd
    },
    data() {
      return {
        tableData3: [{
          name: 'tape_file_whole_day_03_00',
          object: 'file',
          time: '* * 03:00:00',
          media: 'tape',
          lifespan: '10',
          method: '完全',
        }, {
          name: 'disk_database_increm_week_Mon_03_00',
          object: 'database',
          time: '* Mon 03:00:00',
          media: 'disk',
          lifespan: '10',
          method: '累积增量',
        }, {
           name: 'disk_system_increm_week_Mon_12_00',
          object: 'system',
          time: '* Mon 12:00:00',
          media: 'disk',
          lifespan: '10',
          method: '累积增量',
        }, {
           name: 'disk_column_diff_week_Mon_00_00',
          object: 'column',
          time: '* Mon 00:00:00',
          media: 'disk',
          lifespan: '10',
          method: '差分增量',
        }, {
           name: 'disk_file_increm_month_1st_12_00',
          object: 'database',
          time: '1st * 12:00:00',
          media: 'disk',
          lifespan: '10',
          method: '累积增量',
        }, {
           name: 'tape_database_increm_week_Mon_12_00',
          object: 'database',
          time: '* Mon 12:00:00',
          media: 'tape',
          lifespan: '10',
          method: '累积增量',
        }, {
           name: 'disk_database_diff_week_Mon_12_00',
          object: 'database',
          time: '* Mon 12:00:00',
          media: 'disk',
          lifespan: '10',
          method: '差分增量',
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
        margin: 10px 20px;
        background-color:  rgb(36,147,110);
    }
     #search {
      margin-right: 20px;
      float: right;
      border: solid 1px rgb(36,147,110);
      height: 30px;
      width: 160px;
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
      div.operations {
        margin-left: 20px;
        margin-bottom: 10px;
        padding: 0px;
        height: 30px;
        display: inline;
        float:left;
      }
      .operations .button-group{
        float:left;
        border-style: solid;
        border-color:#a9a9a9;
        border-width: 1px 0 1px 1px;
        height: 30px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
      .operations .button-group:last-child{
        border-right: solid 1px #a9a9a9;
         border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
      }
      .operations .button-group:first-child{
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
     .operations span:hover{
       font-weight: bold;
     }
</style>

