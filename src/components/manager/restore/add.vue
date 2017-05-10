<template>
    <div id="restore-add">
        <div class="subtitle">添加还原</div>
        <div class="drop">
            <span class="icon icon-remove" @click="hideEdit"></span>
        </div>
        <div class="form" action="">
            <div>
                <el-steps :space="100" :active="active" finish-status="success">
                <el-step title="选择节点"></el-step>
                <el-step title="选择对象"></el-step>
                <el-step title="选择还原点"></el-step>
                </el-steps>
            </div>
            
            <div class="current" v-if="active>=1">
                <div class="current-title">选择节点： </div>
                <div class="current-content">{{currentNode}}</div>
            </div>
            <div class="current" v-if="active>=2">
                <div class="current-title">选择对象：</div>
                <div class="current-content">{{currentType}}</div>
            </div>
            <div class="current" v-if="active>=3">
                <div class="current-title">选择还原点：</div>
                <div class="current-content">{{currentBackupPoint}}</div>
            </div>
            
            <div id="step1" v-if="active==0" >
                <div class="step">
                    <div class="step-title">选择节点</div>
                    <div v-for="(item, index) in cnodes">
                        <div v-if="index<8" class="node"  @click="selectNode(item)" v-bind:class="{active: currentNode==item}">
                            <span >{{item}}</span>
                        </div>
                    </div>
                    <div v-if="cnodes.length>=8">
                        <div class="node more" @click="showNodeModal" v-bind:class="{active:isMore(currentNode, cnodes, 8)}">
                            <span>...</span>
                        </div>
                    </div>
                </div>
            </div>
           
             <div id="step2" v-if="active==1">
                <div class="step">
                    <div class="step-title">选择对象</div>
                    <div v-for="item in ctypes">
                        <div class="node"  @click="selectType(item)" v-bind:class="{active: currentType==item}">
                            <span >{{item}}</span>
                        </div>
                    </div>
               </div>
            </div>
            <div id="step3" v-if="active==2">
                <div class="step">
                     <div class="step-title">选择还原点</div>
                     <div v-for="(item, index) in ctimes">
                        <div v-if="index < 7" class="node" @click="selectBackupPoint(item)" v-bind:class="{active: currentBackupPoint==item}">
                            <span >{{item}}</span>
                        </div>
                    </div>
                     <div v-if="ctimes.length>=7">
                        <div class="node more" @click="showBackupPointModal" v-bind:class="{active:isMore(currentBackupPoint, ctimes, 7)}">
                            <span>...</span>
                        </div>
                    </div>
                </div>
               
            </div>
            
            <div class='step-control'>
                <span  class='button' style="margin-top: 12px; " @click="ahead" v-if="active!=0">上一步</span>
                <span  class='button' style="margin-top: 12px; " @click="next" v-if="active < 2" v-bind:class="{disabled: !isEnabled()}">下一步</span>
                <span  class='button' style="margin-top: 12px; " @click="next" v-if="active == 2">完 成</span>
            </div>
                <div class="bottom" v-if="active==3">
            
                <span class="button" @click="hideEdit">取消</span>
                <span class="button submit">提交</span>
            </div>
        </div>
        <div class="modal" v-if="show_node_modal">
            <div class="modal-container">
                <div class="modal-title" style="height: 40px; border-bottom: solid 1px #909090; text-align:center; margin-top: 20px;">选择节点</div>
                <div class="modal-content" style="border-bottom:solid 1px #909090;">
                    <div style="height: 200px; overflow:auto; margin: 10px;">
                        <div v-for="item in cnodes" style="display:inline-block;">
                            <div v-bind:class="{active: currentModalNode==item}" @click="selectModalNode(item)" style=" border:solid 1px #afafaf; margin: 4px; padding: 5px; cursor: pointer;">{{item}}</div>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div style="margin: 10px;">
                        <button @click="show_node_modal=false;">取消</button>
                        <button class="submit" @click="confirmNode">确定</button>
                    </div>
                </div>
            </div>
           
        </div>
        <div class="modal" v-if="show_backup_point_modal">
            <div class="modal-container">
                <div class="modal-title" style="height: 40px; border-bottom: solid 1px #909090; text-align:center; margin-top: 20px;">选择还原点</div>
                <div class="modal-content" style="border-bottom:solid 1px #909090;">
                    <div style="height: 200px; overflow:auto; margin: 10px;">
                        <div v-for="item in ctimes" style="display:inline-block;">
                            <div v-bind:class="{active: current_modal_backup_point==item}" @click="selectModalBackupPoint(item)" style=" border:solid 1px #afafaf; margin: 4px; padding: 5px; cursor: pointer;">{{item}}</div>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div style="margin: 10px;">
                        <button @click="show_backup_point_modal=false;">取消</button>
                        <button class="submit" @click="confirmBackupPoint">确定</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                cnodes: ['node01', 'node02', 'node03.inspur.com', 'node102034950304', 'node05', 'node06', 'node07','node08', 'node09', 'node10'],
                ctypes: ['database', 'system', 'file', 'column'],
                ctimes: ['2017-05-01 12:00:23', '2017-04-23 01:00:00', '2017-04-20 10:00:00', '2017-04-18 23:10:10', '2017-03-22 02:02:02','2017-03-21 01:00:00', '2017-03-20 10:01:00', '2017-03-18 23:10:10', '2017-03-12 02:02:02'],
                currentType: null,
                currentNode: null,
                currentBackupPoint: null,
                value5: null,
                value4: null,
                value3: null,
                value2: null,
                active: 0,
                currentModalNode: null,
                show_node_modal:false,
                show_backup_point_modal: false,
                current_modal_backup_point: null,
            }
        },
        
        methods: {
            hideEdit: function(){
                this.$emit('hide');
            },
            showNodeModal: function(){
                this.show_node_modal = true;
            },
            showBackupPointModal: function(){
                this.show_backup_point_modal = true;
            },
            isMore: function(current_value, list_value, num){
                if (!current_value) {
                    return false;
                }
                for(let i = 0; i < num && i < list_value.length; i++) {
                    if (current_value == list_value[i]) {
                        return false;
                    }
                }
                return true;

            },
            setCurrentValue (){
                if (this.active < 3) this.currentBackupPoint = null;
                if (this.active < 2) this.currentType = null;
                if (this.active < 1) this.currentNode = null;
            },
            next() {
                if (!this.isEnabled()) {
                    return;
                }
                if (this.active++ > 2) this.active = 0;
                this.setCurrentValue();
            },
            ahead() {
                if (this.active-- < 0) this.active = 0;
                this.setCurrentValue();
                
            },
            selectNode: function(item){
                this.currentNode = item;
            },
            selectType: function(item) {
                this.currentType = item;
            },
            selectBackupPoint: function(item) {
                this.currentBackupPoint = item;
            },
            isEnabled: function(){
                if (this.active == 0) {
                    return !!this.currentNode;
                } else if (this.active == 1) {
                    return !!this.currentType;
                } else if (this.active == 2) {
                    return !!this.currentBackupPoint;
                } else {
                    return false;
                }
            },
             selectModalNode: function(item){
                this.currentModalNode = item;
            },
            selectModalBackupPoint: function(item) {
                this.current_modal_backup_point = item;
            },
            confirmNode: function(){
                this.currentNode = this.currentModalNode;
                this.show_node_modal = false;
            },
            confirmBackupPoint: function(){
                this.currentBackupPoint = this.current_modal_backup_point;
                this.show_backup_point_modal = false;
            }
        }
    }
</script>
<style scoped>
    #store-add{
        width: 400px;
        overflow-y:auto;
    }
    .subtitle{
       text-align: center;
       margin: 20px 0;
     }
     .form {
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
          width: 188px;
     }
     div.form-control textarea {
         width: 188px;
         height: 150px;
     }
     div.form-control input,div.form-control textarea {
          
          background: white;
          border:solid 1px;
          border-color: rgba(12,72,66,0.5);
          
          padding: 4px 5px;
               
     }
     div.form-control input:focus, div.form-control textarea:focus{
          border-color: rgba(12,72,66,0.5);
          box-shadow:0 0 3px rgba(12,72,66,0.8);
          transition: border-color 0.35s ease-in-out 0s;
          transition: box-shadow 0.35s ease-in-out 0s;
     }
     div.form-control textarea {
         resize: none;
     }
     div.form-control input[disabled="disabled"] {
        border-color: gray;
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
     .step:after{
         content: '';
         display: block;
         clear: both; 
     }
     #step1{
         max-width: 360px;
         text-align:center;
     }
     .node{
         display:block;
         border:solid 1px #afafaf;
         margin: 6px;
         padding:5px;
         cursor:pointer;
     }
     .node.active,
     .node:hover{
         background-color:  rgb(36, 147, 110);
         color:white;
     }
     .node span{

     }
     .step{
         border:solid 1px #afafaf;
         display: block;
         margin-right: 20px;
         text-align: center;
     }
     .step-title{
         text-align:center;
         margin:20px 0;
     }
     div.current{
         margin: 15px 0;
         font-size: 14px;
         height: 20px;
         line-height: 20px;
     }
     div.current-title{
         float:left;
         display:block;
     }
     div.current-content{
         float:left;
         border:solid 1px rgb(36, 147, 110);
         border-radius: 3px;
         margin-left: 15px;
         padding: 0px 5px;
     }
     div.step-control:after{
         content: '';
         display:block;
         clear: both;
         
     }
     div.step-control span.button{
         border: solid 1px #afafaf;
         font-size:12px;
         padding: 0 2px;
         height: 20px;
         line-height: 20px;
         width: auto;
     }
      div.step-control span.button.disabled{
          opacity: 0.6;
          cursor: auto;
      }
      .submit-enter-active{
       
       animation: show-in 0.5s;    
     }
     .submit-leave-active {
       animation: show-out 0.5s;
     }
     div.drop{
         position:absolute;
         top: 20px;
         left: 20px;
         opacity:0.4;
     }
     div.drop:hover{
         cursor:pointer;
         opacity: 1;
     }
     div.modal{
         position: fixed;
         top: 0px;
         left: 0;
         bottom:0;
         right:0;
         text-align:center;
         background-color: rgba(0,0,0,0.4);
         
     }
     div.modal::after{
         content: '';
         display: inline-block;
         height:100%;
         width: 0;
         vertical-align: middle;
     }
     div.modal-container{
         width: 800px;
         display: inline-block;
         vertical-align: middle;
         overflow:hidden;
         text-align:left;
         background-color: white;
         opacity:1;
     }
     div.modal-content .active{
         background-color:rgb(36, 147, 110);
         color:white;
     }
     div.modal-footer {
         float:right;
         margin: 10px 20px;;
     }
     div.modal-footer button{
         border: solid 1px #afafaf;
         background-color:white;
         margin-right: 20px;
         padding:2px 4px;
     }
     div.modal-footer button:hover{
         border:solid 1px rgb(36, 147, 110);
         transition: all ease 0.5s;
     }
     div.modal-footer button.submit{
         background-color: rgb(36, 147, 110);
         border: solid 1px rgb(20, 100, 100);
         color:white;
     }
     div.modal-footer .submit:hover{
     }


</style>