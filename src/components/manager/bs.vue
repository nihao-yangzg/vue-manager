<template>
<div id="group" >
    <div class="title">
        <span>备份与还原管理</span>
        <div id="search">
          <span class="icon icon-search"></span>
          <input type="text" placeholder="search"/>
        </div>
    </div>
    <div class="content" style="text-align: center;" >
        <div style="margin: 0 auto;">
             <div class="items" v-for="item in tableData3" style="float: left; border:solid 1px gray; ">
            
            <div class="subtitle" style="width: 400px; height: 30px; background-color: grey;">{{item.source}}</div>
            <div class="subcontent" style="margin-left: 40px; padding: 10px 0;">
                <div>
                     <span>数据源</span>
                     <div class="data">{{item.sdir}}</div>
                </div>
                     <div v-for="subitem in item.destination">
                        <span for="">备份主机</span>
                        <div class="data">{{subitem}}</div>
                    </div>
               
                
                <div>
                    <span for="">描述</span>
                    <div class="data">{{item.description}}</div>
                </div>
            </div>
        
        </div>
        </div>
       
    </div>
    
   
    
</div>
  
</template>

<script>
  export default {
   
    data() {
      return {
        tableData3: [{
            id: '001',
            source: 'node01',
            sdir: '/tmpxfs',
            destination: ['node03'],
            strategy: '每天2：10：00',
            type: '备份',
            description: 'node03 backup for node01'
        }, {
            id: '002',
            source: 'node02',
            sdir: '/tmpxfs',
            destination: ['node03'],
            type: '还原',
            strategy: '每天2：10：00',
            description: 'node03 restore for node02'
        }, {
            id: '003',
            source: 'node03',
            sdir: '/tmpxfs',
            destination: ['node04'],
            type: '备份',
            strategy: '每天2：10：00',
            description: 'node04 backup for node03'
        }, {
            id: '004',
            source: 'node06',
            sdir: '/tmpxfs',
            destination: ['node08'],
            type: '备份',
            strategy: '每天2：10：00',
            description: 'node08 backup for node06'
        }, {
            id: '004',
            source: 'node05',
            sdir: '/tmpxfs',
            destination: ['node09'],
            type: '还原',
            strategy: '每天2：10：00',
            description: 'node09 restore for node05'
        }, {
            id: '004',
            source: 'node06',
            sdir: '/tmpxfs',
            destination: ['node08'],
            type: '备份',
            strategy: '每天2：10：00',
            description: 'node08 backup for node06'
        }, {
            id: '004',
            source: 'node05',
            sdir: '/tmpxfs',
            destination: ['node09'],
            type: '还原',
            strategy: '每天2：10：00',
            description: 'node09 restore for node05'
        }, {
            id: '004',
            source: 'node06',
            sdir: '/tmpxfs',
            destination: ['node08'],
            type: '备份',
            strategy: '每天2：10：00',
            description: 'node08 backup for node06'
        }, {
            id: '004',
            source: 'node05',
            sdir: '/tmpxfs',
            destination: ['node09'],
            type: '还原',
            strategy: '每天2：10：00',
            description: 'node09 restore for node05'
        }, {
            id: '004',
            source: 'node06',
            sdir: '/tmpxfs',
            destination: ['node08'],
            type: '备份',
            strategy: '每天2：10：00',
            description: 'node08 backup for node06'
        }, {
            id: '004',
            source: 'node05',
            sdir: '/tmpxfs',
            destination: ['node09'],
            type: '还原',
            strategy: '每天2：10：00',
            description: 'node09 restore for node05'
        }, {
            id: '004',
            source: 'node06',
            sdir: '/tmpxfs',
            destination: ['node08'],
            type: '备份',
            strategy: '每天2：10：00',
            description: 'node08 backup for node06'
        }, {
            id: '004',
            source: 'node05',
            sdir: '/tmpxfs',
            destination: ['node09'],
            type: '还原',
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
      
     
    }
  }
</script>
<style scoped>
    #group{
        width: 100%;
        text-align: left;
        height: 100%;
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
        height: 100%;
        overflow:hidden;
        display:inline-block;
        
    }
    .content:hover {
        overflow: auto;
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
     div.subcontent .data{
         display: inline;
     }
</style>

