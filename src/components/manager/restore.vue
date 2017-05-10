<template>
<div id="restore">
    <div class="title">
        <span>还原管理</span>
        <div id="search">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="search"/>
        </div>
    </div>
    <div class="content">
        <div class="operations">
            <div  class='button-group'>
            <span class="icon icon-plus" style="color: green;" v-on:click="showAdd" title="添加"></span>
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
    </div>
    <div class="content">
        <el-tabs type="card">
        <el-tab-pane label="当前正在执行">
            <div class="bigadd" title="添加还原任务" @click="showAdd">
                <img src="/static/image/add162.png" alt="" style="height:64px; width:64px; color: red;">
            </div>
            <el-table
            :data="tableData2"
            border
            tooltip-effect="dark"
            style="width:100%;"
            highlight-current-row
            @current-change="handleCurrentChange"
            >
            <el-table-column
            property="host"
            label="节点"
            >
            </el-table-column>
            
            <el-table-column
            property="type"
            label="还原对象"
            >
            </el-table-column>
            <el-table-column
            property="starttime"
            label="开始时间"
            >
            </el-table-column>
            <el-table-column
            property="endtime"
            label="结束时间"
            >
            </el-table-column>
            <el-table-column
            property="status"
            label="状态"
            >
            </el-table-column>
            </el-table>
        
        
        </el-tab-pane>
        <el-tab-pane label="近期已执行">
            <el-table
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width:100%;"
            highlight-current-row
            @current-change="handleCurrentChange"
            >
            <el-table-column
            property="host"
            label="节点"
            >
            </el-table-column>
            
            <el-table-column
            property="type"
            label="还原对象"
            >
            </el-table-column>
            <el-table-column
            property="starttime"
            label="开始时间"
            >
            </el-table-column>
            <el-table-column
            property="endtime"
            label="结束时间"
            >
            </el-table-column>
            <el-table-column
            property="status"
            label="状态"
            >
            </el-table-column>
            </el-table>
        </el-tab-pane>
        </el-tabs>
       
       
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
    import FormAdd from './restore/add'
    import FormEdit from './restore/edit'
    export default {
        components: {
            FormAdd,
            FormEdit
        },
        data: function(){
            return {
                tableData2: [
                    {
                        host: 'node01',                        
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        
                        type: 'database',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        
                        type: 'database',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                         starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    }
                ],
                tableData3: [
                    {
                        host: 'node01',                        
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        
                        type: 'database',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        
                        type: 'database',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                         starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                         starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    },
                    {
                        host: 'node01',
                        starttime: '2017-05-05:20:20:20',
                        endtime: '2017-05-05:20:20:22',
                        type: 'database',
                        status: 'success'
                    }
                ],
                currentRow: null,
                addformshow: false,
                editformshow: false,
            }

        },
        methods: {
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
            }
        }

    }
</script>
<style scoped>
     #restore{
        width: 100%;
        text-align: left;
       
    }
    #restore .title{
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

    div.operations {
        margin-bottom: 10px;
        padding: 0px;
        height: 30px;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index:2000;
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
      div.bigadd{

         height:64px;
         text-align:center;
         border:solid 1px #bbbbbb;
         margin-bottom: 10px;
         padding: 8px 0;
         cursor: pointer;
         opacity: 0.4;
         transition: all ease 0.5s;
      }
      div.bigadd:hover{
          border-color: #afafaf;
          box-shadow: 0px 0px 2px #afafaf inset;
          opacity: 0.8;
          transition: all ease 0.5s;
      }
</style>