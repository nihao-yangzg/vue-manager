<template>
    <div>
        <div class="subtitle">添加角色</div>
        <div class="form" action="">
            <div class="form-control">
                <label for="username">名称</label>
                <input type="text" name="username" placeholder="username">
            </div>
            <div class="form-control">
                <label for="description">描述</label>
                <textarea type="text" name="description" placeholder="user description"/>
            </div>
            <div class="form-control">
                <label for="shell">用户
                 <!--span class="icon icon-external-link" style="color:rgb(36, 147, 110); cursor: pointer;" @click="showAddPriority"></span-->
                 </label>
                    <div class="forselect">
                        <el-tag v-for="(ii,index) in priority_options"  type="gray" style="margin:5px; cursor: pointer;">
                            <span @click="prioritySelect(ii, index)">
                                {{ii.label}}
                            </span>
                                
                        </el-tag>
                    </div>
                    <div class="selected">
                        <el-tag
                        v-for="(tag,index) in priority_selected"
                        :key="tag.label"
                        type="success"
                        style="margin:5px; cursor: pointer;"
                        >
                        <span @click="cancelPrioritySelect(tag, index)">
                            {{tag.label}}
                            
                        </span>
                        </el-tag>
                    </div>
                
                
            </div>
            <div class="form-control">
                <label for="shell">权限</span></label>
                    <div class="forselect">
                        <el-tag v-for="(ii,index) in group_options"  type="gray" style="margin:5px; cursor: pointer;">
                            <span @click="groupSelect(ii, index)">
                                {{ii.label}}
                            </span>
                                
                        </el-tag>
                    </div>
                    <div class="selected">
                        <el-tag
                        v-for="(tag,index) in group_selected"
                        :key="tag.label"
                        type="primary"
                        style="margin:5px; cursor: pointer;"
                        >
                        <span @click="cancelGroupSelect(tag, index)">
                            {{tag.label}}
                            
                        </span>
                        </el-tag>
                    </div>
                
                
            </div>
            <div class="bottom">
            <span class="button" @click="hideEdit">取消</span>
            <span class="button submit">提交</span>
            </div>
            
        </div>
       
    </div>
    
</template>
<script>
    export default {
        data(){
            return {
                priority_options:[{
                    value: 'user1',
                    label: 'user1',
                }, {
                    value: 'user2',
                    label: 'user2'
                },{
                    value: 'user3',
                    label: 'user3'
                },{
                    value: 'user4',
                    label: 'user4'
                },{
                    value: 'user5',
                    label: 'user5'
                },{
                    value: 'user6',
                    label: 'user6'
                },{
                    value: 'user7',
                    label: 'user7'
                },{
                    value: 'user8',
                    label: 'user8'
                },{
                    value: 'user9',
                    label: 'user9'
                },{
                    value: 'user10',
                    label: 'user10'
                }],
               
                group_options : [{
                    value: 'user1',
                    label: 'user1',
                }, {
                    value: 'user2',
                    label: 'user2'
                },{
                    value: 'user3',
                    label: 'user3'
                },{
                    value: 'user4',
                    label: 'user4'
                },{
                    value: 'user5',
                    label: 'user5'
                },{
                    value: 'user6',
                    label: 'user6'
                },{
                    value: 'user7',
                    label: 'user7'
                },{
                    value: 'user8',
                    label: 'user8'
                },{
                    value: 'user9',
                    label: 'user9'
                },{
                    value: 'user10',
                    label: 'user10'
                }],
                value5: [],
                priority_selected: [],
                group_selected: [],
            }
        },
        methods: {
            hideEdit: function(){
                this.$emit('hide');
            },
            prioritySelect: function(item, index){
                console.log('selected: ' + item + index);
                this.priority_options.splice(index,1);
                this.priority_selected.push(item);
            },
            cancelPrioritySelect: function(item, index) {
                this.priority_selected.splice(index, 1);
                this.priority_options.push(item);
            },
            groupSelect: function(item, index){
                console.log('selected: ' + item + index);
                this.group_options.splice(index,1);
                this.group_selected.push(item);
            },
            cancelGroupSelect: function(item, index) {
                this.group_selected.splice(index, 1);
                this.group_options.push(item);
            },
            showAddPriority: function(){
                this.$emit("showadd")
            }


        }
    }
</script>
<style scoped>
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
          width: 200px;
     }
     div.form-control textarea {
         width: 200px;
         height: 80px;
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
     div.select {
        //  border: solid 1px rgb(36,147,110);
     }
     div.forselect{
         margin-left: 90px;
         max-height: 120px;
        //  height: 80px;
        //  border: solid 1px grey;
     }
     div.selected {
         min-height: 35px;
         margin-top: 20px;
         margin-left: 90px;
         margin-right: 10px;
         border: solid 1px rgb(36,147,110);
         max-height:120px;
     }

     
</style>