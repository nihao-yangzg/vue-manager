<template>
    <div>
        <div class="subtitle">添加用户组</div>
        <div class="form" action="">
            <div class="form-control">
                <label for="cicle">周期</label>
                <el-select v-model="value5" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-control">
                <label for="strategy">策略</label>
                <input type="text" name="strategy" placeholder="请输入策略">
                <div style="font-size:10px; margin-left: 90px;">如 * * 12:00:00 代表每天12:00:00执行<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; 4th * 12:00:00 代表每月4日12:00:00执行<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; * Mon 12:00:00 代表每周一12:00:00执行</div>
                
            </div>
            <div class="form-control">
                <label for="description">策略描述</label>
                <textarea type="text" name="description" placeholder="description"/>
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
                options: [{
                   value: '选项1',
                    label: 'Month'
                    }, {
                    value: '选项2',
                    label: 'Week'
                    }, {
                    value: '选项3',
                    label: 'Day'
                    }, {
                    value: '选项4',
                    label: 'Hour'
                    }, {
                    value: '选项5',
                    label: 'Minute'
                    }],
                value5: null,
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
</style>