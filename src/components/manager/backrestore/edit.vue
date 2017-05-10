<template>
    <div>
        <div class="subtitle">用户组编辑</div>
        <div class="form" action="">
            <div class="form-control">
            <label for="source">源节点</label>
            <el-select v-model="value5" placeholder="请选择" >
                <el-option
                v-for="item in nodes"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            </div>
            <div class="form-control">
            <label for="sdir">源目录</label>
            <input type="text" name="sdir" placeholder="sdir"/>
            </div>
            <div class="form-control select">
            <label for="destination">备份节点</label>
            <el-select v-model="value4" placeholder="请选择" >
                <el-option
                v-for="item in nodes"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            </div>
            <div class="form-control">
            <label for="sdir">备份目录</label>
            <input type="text" name="sdir" placeholder="sdir"/>
            </div>
            <div class="form-control">
            <label for="strategy">策略</label>
            <el-select v-model="value2" placeholder="请选择" >
                <el-option
                v-for="item in strategy"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            </div>
            <div class="form-control">
            <label for="type">类型</label>
            <el-select v-model="value3" placeholder="请选择" >
                <el-option
                v-for="item in types"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
               types: [{
                    value: 'restore',
                    label: '恢复'
                },{
                    value: 'backup',
                    label: '备份'
                }],
                strategy: [{
                    value: '* * 12:00:00',
                    label: '每天12：00：00'
                },{
                    value: '* * *:30:00',
                    label: '每小时30:00'
                },{
                    value: '* * 02:10:10',
                    label: '每天2：10：00'
                },{
                    value: '* * *:*:30',
                    label: '每分钟第30秒'
                },{
                    value: '* Mon 00:00:00',
                    label: '每周一00：00：00'
                },{
                    value: '1st * 00：00：00',
                    label: '每月1日00：00：00'
                },{
                    value: '* Sat 03:00:00',
                    label: '每周六03：00：00'
                }],
                nodes: [{
                    value: "node01",
                    label: 'node01'
                },{
                    value: "node02",
                    label: 'node02'
                },{
                    value: "node03",
                    label: 'node03'
                },{
                    value: "node04",
                    label: 'node04'
                },{
                    value: "node05",
                    label: 'node05'
                },{
                    value: "node06",
                    label: 'node06'
                },{
                    value: "node07",
                    label: 'node07'
                },{
                    value: "node08",
                    label: 'node08'
                }],
                value5: null,
                value4: null,
                value3: null,
                value2: null,
            }
        },
        methods: {
            hideEdit: function(){
                this.$emit('hide');
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
     div.el-select input{
         height: 35px;
         
     }
     div.form-control input{
         height: 25px;
         width: 188px;
     }
     div.form-control textarea {
         width: 200px;
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
</style>