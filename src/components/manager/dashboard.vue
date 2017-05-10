<template>
<div id="dashboard">
    <div class="title">
        <span>系统概况</span>
        
    </div>
    <div class="content">
        <div class="dashboard-image" style="text-align:center; border:solid 1px #9f9f9f; box-shadow:0px 0px 2px #9f9f9f;">
            <div>
                <img src="/static/image/dashboard.png" alt="" style="width:18%; height: 18%;">
                <img src="/static/image/dashboard.png" alt=""style="width:18%; height: 18%;">

                <img src="/static/image/dashboard.png" alt="" style="width:18%; height: 18%;">

                <img src="/static/image/dashboard.png" alt="" style="width:18%; height: 18%;">
                <img src="/static/image/dashboard.png" alt="" style="width:18%; height: 18%;">
            </div>
            
            

        </div>
    </div>
    <div class="content">
        <el-tabs type="border-card">
            
            <el-tab-pane label="数据库">
            <div class="statistic" style="">
                <div style="width: 80px; float:left; height: 30px; padding: 2px 5px;">
                    <el-badge :value="200" class="item" >
                         <el-button size="small">全部</el-button>
                    </el-badge>
                </div>
                <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                    <el-badge :value="189" class="item">
                         <el-button size="small">成功</el-button>
                    </el-badge>
                </div>

                <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                    <el-badge :value="5" class="item">
                         <el-button size="small">失败</el-button>
                    </el-badge>
                </div>
                <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                    <el-badge :value="6" class="item">
                         <el-button size="small">进行中</el-button>
                    </el-badge>
                </div>
            
                <div style=" height: 30px; border:solid 1px #9f9f9f; width: 120px; position: absolute; top: 12px; right: 20px; border-radius: 15px;" >
                    <span class="icon icon-search" style="line-height: 30px; margin-left: 5px;"></span>
                    <input type="text" style="width: 80px; padding: 2px 4px; border:none; outline:none;" placeholder="search">
                </div>
            </div>
                <template>
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="hostname"
                        label="节点名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="method"
                        label="备份方式"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="开始时间">
                    </el-table-column>
                    <el-table-column
                        prop="destination"
                        label="目标位置">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态">
                        <template scope='scope'>
                            <div v-if="scope.row.status=='proceeding'">
                                <i class="icon-spinner icon-spin" style="color: #3a87ad;"></i>
                                <span>进行中</span>
                            </div>
                            <div v-if="scope.row.status=='complete'">
                                <i class="icon icon-ok" style="color: green;"></i>
                                <span>完成</span>
                            </div>
                             <div v-if="scope.row.status=='fail'">
                                <i class="icon  icon-remove" style="color: red;"></i>
                                <span>失败</span>
                            </div>
                        </template>
                    </el-table-column>
                    
                    </el-table>
                </template>
                <div class="block" style="float:right;">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="数据卷">
                <div class="statistic" style="">
                    <div style="width: 80px; float:left; height: 30px; padding: 2px 5px;">
                        <el-badge :value="200" class="item" >
                            <el-button size="small">全部</el-button>
                        </el-badge>
                    </div>
                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="189" class="item">
                            <el-button size="small"> 成功</el-button>
                        </el-badge>
                    </div>

                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="5" class="item">
                            <el-button size="small">失败</el-button>
                        </el-badge>
                    </div>
                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="6" class="item">
                            <el-button size="small">进行中</el-button>
                        </el-badge>
                    </div>
                
                    <div style=" height: 30px; border:solid 1px #9f9f9f; width: 120px; position: absolute; top: 12px; right: 20px; border-radius: 15px;" >
                        <span class="icon icon-search" style="line-height: 30px; margin-left: 5px;"></span>
                        <input type="text" style="width: 80px; padding: 2px 4px; border:none; outline:none;" placeholder="search">
                    </div>
                </div>
                 <template>
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="hostname"
                        label="节点名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="method"
                        label="备份方式"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="开始时间">
                    </el-table-column>
                    <el-table-column
                        prop="destination"
                        label="目标位置">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态">
                        <template scope='scope'>
                            <div v-if="scope.row.status=='proceeding'">
                                <i class="icon-spinner icon-spin" style="color: #3a87ad;"></i>
                                <span>进行中</span>
                            </div>
                            <div v-if="scope.row.status=='complete'">
                                <i class="icon icon-ok" style="color: green;"></i>
                                <span>完成</span>
                            </div>
                             <div v-if="scope.row.status=='fail'">
                                <i class="icon  icon-remove" style="color: red;"></i>
                                <span>失败</span>
                            </div>
                        </template>
                    </el-table-column>
                    
                    </el-table>
                </template>
                <div class="block" style="float:right;">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="文件">
                <div class="statistic" style="">
                    <div style="width: 80px; float:left; height: 30px; padding: 2px 5px;">
                        <el-badge :value="200" class="item" >
                            <el-button size="small">全部</el-button>
                        </el-badge>
                    </div>
                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="189" class="item">
                            <el-button size="small"> 成功</el-button>
                        </el-badge>
                    </div>

                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="5" class="item">
                            <el-button size="small">失败</el-button>
                        </el-badge>
                    </div>
                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="6" class="item">
                            <el-button size="small">进行中</el-button>
                        </el-badge>
                    </div>
                
                    <div style=" height: 30px; border:solid 1px #9f9f9f; width: 120px; position: absolute; top: 12px; right: 20px; border-radius: 15px;" >
                        <span class="icon icon-search" style="line-height: 30px; margin-left: 5px;"></span>
                        <input type="text" style="width: 80px; padding: 2px 4px; border:none; outline:none;" placeholder="search">
                    </div>
                </div>
                <template>
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="hostname"
                        label="节点名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="method"
                        label="备份方式"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="开始时间">
                    </el-table-column>
                    <el-table-column
                        prop="destination"
                        label="目标位置">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态">
                        <template scope='scope'>
                            <div v-if="scope.row.status=='proceeding'">
                                <i class="icon-spinner icon-spin" style="color: #3a87ad;"></i>
                                <span>进行中</span>
                            </div>
                            <div v-if="scope.row.status=='complete'">
                                <i class="icon icon-ok" style="color: green;"></i>
                                <span>完成</span>
                            </div>
                             <div v-if="scope.row.status=='fail'">
                                <i class="icon  icon-remove" style="color: red;"></i>
                                <span>失败</span>
                            </div>
                        </template>
                    </el-table-column>
                    
                    </el-table>
                </template>
                <div class="block" style="float:right;">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="系统">
                <div class="statistic" style="">
                    <div style="width: 80px; float:left; height: 30px; padding: 2px 5px;">
                        <el-badge :value="200" class="item" >
                            <el-button size="small">全部</el-button>
                        </el-badge>
                    </div>
                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="189" class="item">
                            <el-button size="small"> 成功</el-button>
                        </el-badge>
                    </div>

                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="5" class="item">
                            <el-button size="small">失败</el-button>
                        </el-badge>
                    </div>
                    <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                        <el-badge :value="6" class="item">
                            <el-button size="small">进行中</el-button>
                        </el-badge>
                    </div>
                
                    <div style=" height: 30px; border:solid 1px #9f9f9f; width: 120px; position: absolute; top: 12px; right: 20px; border-radius: 15px;" >
                        <span class="icon icon-search" style="line-height: 30px; margin-left: 5px;"></span>
                        <input type="text" style="width: 80px; padding: 2px 4px; border:none; outline:none;" placeholder="search">
                    </div>
                </div>
                <template>
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="hostname"
                        label="节点名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="method"
                        label="备份方式"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="开始时间">
                    </el-table-column>
                    <el-table-column
                        prop="destination"
                        label="目标位置">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态">
                        <template scope='scope'>
                            <div v-if="scope.row.status=='proceeding'">
                                <i class="icon-spinner icon-spin" style="color: #3a87ad;"></i>
                                <span>进行中</span>
                            </div>
                            <div v-if="scope.row.status=='complete'">
                                <i class="icon icon-ok" style="color: green;"></i>
                                <span>完成</span>
                            </div>
                             <div v-if="scope.row.status=='fail'">
                                <i class="icon  icon-remove" style="color: red;"></i>
                                <span>失败</span>
                            </div>
                        </template>
                    </el-table-column>
                    
                    </el-table>
                </template>
                <div class="block" style="float:right;">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
        
    </div>
    <div class="content">
       
        <el-tabs type="border-card">
            <div class="statistic" style="">
                <div style="width: 80px; float:left; height: 30px; padding: 2px 5px;">
                    <el-badge :value="200" class="item" >
                        <el-button size="small">全部</el-button>
                    </el-badge>
                </div>
                <div style="width: 80px; float:left;  height: 30px; padding: 2px 5px;">
                    <el-badge :value="189" class="item">
                        <el-button size="small"> 成功</el-button>
                    </el-badge>
                </div>
                 <div style=" height: 30px; border:solid 1px #9f9f9f; width: 120px; position: absolute; top: 12px; right: 20px; border-radius: 15px;" >
                    <span class="icon icon-search" style="line-height: 30px; margin-left: 5px;"></span>
                    <input type="text" style="width: 80px; padding: 2px 4px; border:none; outline:none;" placeholder="search">
                </div>
            </div>
            <el-tab-pane label="系统备份状态">
                <template>
                    <el-table
                    :data="tableData02"
                    style="width: 100%">
                    <el-table-column
                        prop="hostname"
                        label="节点名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="method"
                        label="备份方式"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="object"
                        label="备份对象">
                    </el-table-column>
                    <el-table-column
                        prop="strategy"
                        label="备份时间">
                    </el-table-column>
                    <el-table-column
                        prop="destination"
                        label="目标节点">
                    </el-table-column>
                     <el-table-column
                        prop="status"
                        label="最近一次执行状态">
                        <template scope='scope'>
                             <div v-if="scope.row.status=='complete'">
                                <i class="icon icon-ok" style="color: green;"></i>
                                <span>成功</span>
                            </div>
                             <div v-if="scope.row.status=='fail'">
                                <i class="icon  icon-remove" style="color: red;"></i>
                                <span>失败</span>
                            </div>
                        </template>
                    </el-table-column>
                    </el-table>
                </template>
                 <div class="block" style="float:right;">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    
</div>
  
</template>

<script scoped>
 
  export default {
   
    data() {
      return {
        tableData: [{
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'proceeding',
          
        }, {
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'complete',
        },  {
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'fail',
        },  {
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'complete',
        },  {
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'proceeding',
        }, {
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'fail',
        },  {
          hostname: 'node01',
          method: '全备份',
          destination: 'node04',
          time: '2017-05-05 00:00:00',
          status: 'proceeding',
        }],
        tableData02: [{
            hostname: 'node01',
            destination: 'node04',
            strategy: '* * 00:00:00',
            method: '增量备份',
            object: 'system',
            status: 'complete'
        },{
            hostname: 'node01',
            destination: 'node04',
            strategy: '* * 00:00:00',
            method: '增量备份',
            object: 'system',
            status: 'complete'
        },{
            hostname: 'node01',
            destination: 'node04',
            strategy: '* * 00:00:00',
            method: '增量备份',
            object: 'system',
            status: 'complete'
        },{
            hostname: 'node01',
            destination: 'node04',
            strategy: '* * 00:00:00',
            method: '增量备份',
            object: 'system',
            status: 'complete'
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
    #dashboard{
        width: 100%;
        text-align: left;
        height:100%;
        overflow-y: auto;
    }
    #dashboard .title{
        height: 30px;
        line-height:30px;
        padding: 10px 20px;
        margin: 10px 20px;
        background-color:  rgb(36,147,110);
    }
   
    .content {
        margin: 10px 20px;
        position: relative;
    }
   
     
</style>

