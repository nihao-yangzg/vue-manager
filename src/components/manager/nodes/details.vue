<template>
<div id="details">
    <div class="title">
        <span>
        <span style="cursor: pointer;" @click="gotoNodes">节点管理</span>
        <span style="margin: 0 5px;">/</span>
        <span>节点详情</span></span>
        
    </div>
    <div class="content">
        <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="备份对象" name="first">
                    <div id="object-content"style="margin:0 auto; text-align:center;">
                    <div class="object">
                         <div  style=" margin:0 auto; text-align:center;  padding: 10px 10px;">
                            <div class='object-title'>
                                文件
                            </div>
                            <div class="object-content">
                                <div v-for="item in tableData2">
                                    <div class='row'>
                                         {{item.dir}}
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    
                        <div  style="margin:0 auto; text-align:center;  padding: 10px 10px;">
                            <el-table
                            :data="tableData2"
                            border
                            tooltip-effect="dark"
                            style="width:100%;"
                            highlight-current-row
                            >
                            <el-table-column
                            property="dir"
                            label="路径"
                            align="center"
                            >
                            </el-table-column>
                        
                            </el-table>
                        </div>
                    </div>
                    <div class="object">
                        <div  style=" margin:0 auto; text-align:center; padding: 10px 10px;">
                            <el-table
                            :data="tableData2"
                            border
                            tooltip-effect="dark"
                            style="width:100%;"
                            highlight-current-row
                            >
                            <el-table-column
                            property="dir"
                            label="路径"
                            align="center"
                            >
                            </el-table-column>
                        
                            </el-table>
                        </div>
                   
                        <div style=" margin:0 auto; text-align:center;  padding: 10px 10px;">
                            <el-table
                            :data="tableData3"
                            border
                            tooltip-effect="dark"
                            style="width:100%;"
                            highlight-current-row
                            >
                            <el-table-column
                            property="dir"
                            label="路径"
                            align="center"
                            >
                            </el-table-column>
                        
                            </el-table>
                        </div>
                    </div>
                    <div id="object">
                    </div>
                    </div>
                   
                    

            </el-tab-pane>
            <el-tab-pane label="备份任务" name="second">
            </el-tab-pane>
            <el-tab-pane label="备份数据" name="third">
            </el-tab-pane>
        </el-tabs>
        </template>
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
          tableData2: [{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'}],
        tableData3: [{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'},{dir: '/root/documents/main.js'}],
        top: 40,
        currentRow: null,
        addformshow: false,
        editformshow: false,
         activeName: 'first',
      }
    },
   

    methods: {
      gotoNodes: function(){
          this.$router.push('/index/nodes');
      },
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
      handleClick(tab, event) {
        console.log(tab, event);
      },
      
      
    }
  }
</script>
<style scoped>
    #details{
        width: 100%;
        text-align: left;
         height:100%;
        overflow-y: auto;
    }
    #details .title{
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
     #object-content:after{
        content: '';
        display:block;
        clear: both;
     }
     .object{
         width: 50%;
         margin: 0 auto;
         float:left;
     }
     .object-title{
         background-color:rgb(36,147,110);
         height: 30px;
     }
    div.row{
        height: 30px;
        margin: 5px 0;
    }
</style>

