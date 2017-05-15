<template>
    <div>
        <div class="subtitle">修改存储设置</div>
        <div class="form" action="">
            <div class="form-control">
                <label for="hostname">节点名</label>
                <input type="text" name="hostname" placeholder="server hostname">
            </div>
            <div class="form-control">
                <label for="ip">ip地址</label>
                <input type="text" name="ip" placeholder="ip address">
            </div>
             <div class="form-control">
                <label for="port">端口</label>
                <input type="text" name="port" placeholder="port"/>
            </div>
            
            <div class="form-control">
                <label for="dir">目录</label>
                <input type="text" name="dir" placeholder="storage dir">
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