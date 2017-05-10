<template>
    <div class='export'>
        <div class="subtitle">导出格式选择</div>
        <div class="contents">
            <el-tooltip class="item" effect="dark" content="导出为office xlsx格式" placement="right">
                <el-button class="images" title="xlsx">
                    <img src="/static/image/excel.png" alt="xlsx" style="height:64px; width:64px;"/>
                </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="导出为json格式" placement="right">
                <el-button class="images">
                    <img src="/static/image/json_file.png" alt="json" style="height:64px; width:64px;"/>
                </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="导出为xml格式" placement="left">
                <el-button class="images" >
                    <img src="/static/image/xml4.png" alt="xml" style="height:64px; width:64px;"/>
                </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="导出为txt格式" placement="right">
                <el-button class="images" >
                    <img src="/static/image/txt.png" alt="txt" style="height:64px; width:64px; cursor: pointer;" />
                </el-button>
            </el-tooltip>
           
        </div>
        <div class='bottom'>
            <span @click="drop">Drop</span>
        </div>
    </div>
    
</template>
<script>
    export default {
        data(){
            return {
                styles: [{
                        name: 'excel',
                        img: '/static/image/excel.png'    
                    },{
                        name: 'json',
                        img: '/static/image/json_file.png'
                    },{
                        name: 'xml',
                        img: '/static/image/xml4.png'
                    },{
                        name: 'txt',
                        img: '/static/image/txt.png'
                    }],
                value5: [],
            }
        },
        methods: {
            drop: function(){
                this.$emit('hide');
            },
            
        }
    }
</script>
<style scoped>
    .subtitle{
       text-align: center;
       line-height: 60px;
       height: 60px;
       margin-bottom: 20px;
       font-size: 20px;
       border-bottom: solid 1px rgb(36, 147, 110);
     }
     div.export {
       width: 400px;
       margin-bottom: 20px;
       
     }
     div.contents{
         text-align: center;
         margin-bottom: 40px;
     }
     div.contents button.images{
         display: block;
         text-align:center;
         height: 100px;
         margin: 0 auto;
     }
     div.bottom{
         height: 30px;
         text-align: center;
         color: rgb(36, 147, 110);
         
     }
     div.bottom span{
         cursor: pointer;
     }
</style>