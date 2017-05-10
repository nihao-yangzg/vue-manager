<template>
    <div class="body">
        <div class="modal">
            <div class="modal-title">
                删除
            </div>
            <div class="modal-body">
                确认要删除这条数据吗？
            </div>
            <div class="modal-bottom">
                <button class="drop">取消</button>
                <buttom class="confirm">确认</buttom>
            </div>
        </div>
    
    </div>


</template>

<style scoped>
    div.body{
        display: inline-block;
        position: fixed;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index:1000;
        background-color: rgba(0,0,0,0.4);
         text-align: center;
         height: 100%;
    }
    div.modal{
        background-color: white;
         display: inline-block;
        height: 300px;
        width: 600px;
        text-align: center;
            vertical-align: middle;   
    }
</style>