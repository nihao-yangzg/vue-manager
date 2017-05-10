<template>
<div id="log">
    <div class="title">
        <span>日志管理</span>
        <div id="search">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="search"/>
        </div>
    </div>
    <div class="content">

        <table border='0' width='100%'>
          <thead>
            <tr>
              <th>时间</th>
              <th>事件</th>
              <th>源节点</th>
              <th>类型</th>
              <th>介质</th>
              <th>方式</th>
              <th>目的节点</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData">
              <td>{{item.time}}</td>
              <td>{{item.event}}</td>
              <td>{{item.snode}}</td>
              <td>{{item.type}}</td>
              <td>{{item.media}}</td>
              <td>{{item.method}}</td>
              <td>{{item.dnode}}</td>
              <td>{{item.status}}</td>
            </tr>
          </tbody>
        </table>
      
                
    </div>
    
   <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
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
        tableData: [{
          time: '2017-04-10 09:57:47',
          event: 'backup',
          snode: 'node01',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'restore',
          media: 'disk',
          type: 'volume',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'system',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        },{
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'file',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
          snode: 'node01',
           event: 'backup',
          media: 'disk',
          type: 'database',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
        }, {
          time: '2017-04-10 09:57:47',
           event: 'restore',
          snode: 'node01',
          media: 'disk',
          type: 'system',
          method: 'whole',
          dnode: 'node03',
          status: 'start'
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
    #log{
         position:absolute;
        bottom:50px;
        top: 20px;
        right: 0px;
        left: 20px;
        overflow:auto;
        border-bottom: solid 1px #a9a9a9;
        text-align:left;
    }
    #log .title{
        height: 30px;
        line-height:30px;
        padding: 10px 20px;
        margin: 0px;
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
    .logtitle{

    }
    .oneline{
      display: inline;
      float:left;
    }
    .logtitle .items, .logcontent .items{
      width: 12.5%;
    }
    .logtitle .items div, .logcontent .items div{
      padding: 10px 20px;
      font-weight:bold;
      
    }

    table {
    border-collapse: collapse;
    border-top:solid 1px#343536;
    border-bottom:solid 1px #343536;
}
table td{
    border-top: solid 1px #aaaaaa;
    /*border-radius: 3px;*/
    height:40px;
    vertical-align: center;
    text-align:left;
}
table tbody tr{
}
table tr:nth-child(even){
    background-color:#fbfbfb;
}
table th{
     background-color:#fbfbfb; 
     height:40px;
}
table tbody{
  overflow-y:auto;
}
</style>

