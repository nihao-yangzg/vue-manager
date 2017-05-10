<template>
<div id="log">
    <div class="title">
        <span>报表管理</span>
        
    </div>
    <div style="margin-left:20px; margin-right:20px; height:100%; position: relative; vertical-align:top;">
    
    <div class="content" v-bind:class="{leave:!showtable&&showcontrol, come: showtable&&showcontrol}">
        <div class="dirs" style="position: relative;">
            <el-table
            :data="logs"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%"
            >
           <el-table-column
            property="hostname"
            label="节点名"
            width="160">
          </el-table-column>
           <el-table-column
            property="dir"
            label="路径" >
            <template scope="scope">
                <div style="line-height: 25px;" v-for="item in scope.row.dir">
                   <a style="text-decoration:none;" href="">{{item}}</a>
                </div>
            </template> 
          </el-table-column>
        </el-table>
        </div>
       <!--<div id="search" style="position: absolute; top: 3px; right: 3px;">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="search"/>
        </div>
        -->
    </div>
    <div class="log" style='position:relative;' v-bind:class="{'zoom-in': !showtable&&showcontrol, 'zoom-out': showtable&&showcontrol}" >
        
        
        <div class="logtitle">
            <span class="zoom icon" v-bind:class="{'icon-double-angle-left':showtable, 'icon-double-angle-right':!showtable}" @click="zoom"></span>
        <!--<div style="width: 20px; height:20px; border: solid 1px black; border-radius: 11px;margin-left: 20px; position: absolute; top: 10px; bottom: 10px; left:10px;">
        // </div>
        // <div style="width: 8px; height: 8px; border-style: solid; border-width:1px 1px 0 0; border-color: black; transform: rotate(-135deg);  position: absolute;top: 15px; bottom: 10px; left:20px;"></div>
        -->
       
       
        </div>
         <div class="location">
             <span>{{selected.hostname}}</span>
             <span>{{selected.log}}</span>
        </div>
         <!--div style="position: absolute; top:3px; left:40px; border-style:solid; border-color:rgb(238, 241, 246); border-width: 0 1px 1px 1px;">
            <div class="block">
                <el-date-picker
                v-model="value6"
                type="daterange"
                placeholder="Pick a range">
                </el-date-picker>
            </div>
        </div-->
        <div class='logcontent'>
             <p v-for="item in logcontent">
            {{item}}
             </p>
            <button style="height: 30px; width: 70px; line-height:20px; padding: 0 4px;text-align:center; border: solid 1px rgb(36, 147, 110); background-color:white; margin: 5px 0;" >continue</button>
             
        </div>
       
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
        logs: [{
            hostname: 'node01',
            dir: ['/root/login', '/usr/local/httpd']
        }, {
            hostname: 'node02',
            dir:  ['/root/login', '/root/login.log', '/usr/local/httpd']
        }, {
            hostname: 'node03',
            dir: ['/etc/ntp', '/root/login', ]
        }, {
            hostname: 'node04',
            dir: ['/etc/network', '/root/login', '/root/login', ]
        }],
        
        top: 40,
        currentRow: null,
        addformshow: false,
        editformshow: false,
        showtable: true,
        showcontrol: false,
        selected:{
            hostname: 'node01',
            log: '/root/login'
        },
        logcontent: [
            "2017-04-10 09:57:50,992 [DEBUG] [Thread-173:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:57:53,988 [DEBUG] [Thread-174:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:57:56,992 [DEBUG] [Thread-175:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:57:59,986 [DEBUG] [Thread-176:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:02,984 [DEBUG] [Thread-177:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:05,988 [DEBUG] [Thread-178:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:08,992 [DEBUG] [Thread-179:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:11,990 [DEBUG] [Thread-180:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:14,982 [DEBUG] [Thread-181:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:02,984 [DEBUG] [Thread-177:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:05,988 [DEBUG] [Thread-178:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:08,992 [DEBUG] [Thread-179:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:11,990 [DEBUG] [Thread-180:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}",
            "2017-04-10 09:58:14,982 [DEBUG] [Thread-181:140723096053504] [django:26] - node hb info : {'token': 'UNICORN-AGENT-TOKEN', 'type': 'NODE_STATUS', 'id': '2b01dd2c-1b57-11e7-a355-c89cdcf2e95b'}"
        ],
        value6:''
      }
    },
   

    methods: {
      zoom: function(){
          if (!this.showcontrol) {
              this.showcontrol = true;
          }
          this.showtable = !this.showtable;
      },
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
    #log{
        width: 100%;
        text-align: left;
        height:100%;
    }
    #log .title{
        height: 30px;
        line-height:30px;
        padding: 10px 20px;
        margin: 20px 20px;
        background-color:  rgb(36,147,110);
    }
    
    .content {
        
        margin: 0px 0 10px 0px;
        position: absolute;
        top: 0px;
        left: 0;
        width: 45%;
    }
    .content.leave {
        left: -50%;
        animation: leave 0.5s;
    }
    .content.come {
        left: 0%;
        animation: come 0.5s;
    }
    @keyframes leave{
        0% {
            left: 0%;
        }
        100%{
            left: -50%;
        }
    }
    @keyframes come{
        0%{
            left: -45%;
        }
        100%{
            left: 0%;
        }
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
     div.dirs {
     }
    div.log{
       
        width: 54%;
        float: right;
        font-size: 14px;
        color: #777777;
        height: 80%;
        background-color: white;
    }
    div.log.zoom-in{
        width: 100%;
        animation: zoom-in 0.5s;
    }
    div.log.zoom-out{
        margin-left: 20px;
        
        width: 54%;
        float: right;
        animation: zoom-out 0.5s;
    }
    @keyframes zoom-in{
        0%{
            width: 54%;
        }
        
        100%{
            width: 100%;
        }
    }
    @keyframes zoom-out{
        0%{
            width: 100%;
        }
        100%{
            width: 54%;
        }
    }
    div.logtitle{
        height: 40px;
        width:100%;
        background-color:rgb(238, 241, 246);
        line-height: 40px;
        border: solid 1px rgb(223, 230, 236);
    }
    div.log p{
        padding: 5px;
        margin: 0;
    }
    span.zoom.icon{
        margin-left: 20px;
        cursor: pointer;
    }
    span.icon.zoom:hover{
        font-weight: bold;
    }
    div.location{
        position: absolute;
        top: 3px;
        right: 3px;
        color: black;
        line-height: 35px;
    }
    div.location span{
        margin-right: 20px;
    }
    div.logcontent{
        overflow:auto;
        height: inherit;
        padding: 10px;
        border: solid 1px rgb(223, 230, 236);
        border-top:none; 
    }

</style>

