<template>
    <div>
        <div class="subtitle">添加用户</div>
        <div class="form" action="">
            <div class="form-control">
            <label for="username">用户名</label>
            <input type="text" name="username" placeholder="username">
            </div>
            <div class="form-control">
            <label for="password">登录密码</label>
            <input type="password" name="password" placeholder="password">
            </div>
            <div class="form-control">
            <label for="description">所属组</label>
            <input type="text" name="description" placeholder="description"/>
            </div>
            <div class="form-control">
            <label for="shell">用户权限</label>
            <el-select v-model="value5" multiple placeholder="请选择" >
                <el-option
                v-for="item in options"
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
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                value5: [],
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
</style>