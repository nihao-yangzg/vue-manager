<template>
<div id="nodes">
    
    <router-view></router-view>
</div>
  
</template>

<script>
  export default {
    
    data() {
      return {
        tableData3: [{
          hostname: 'node01',
          ip: '1.2.3.4',
          port: '1234',
          dir: '/root/nfs/',
          description: 'physical node, httpd server',

       
        }],
        top: 40,
        currentRow: null,
        addformshow: false,
        editformshow: false,
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
      showEdit: function(){
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
      },
      deleteNode() {
        this.$confirm('确定要删除该节点吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            }).catch(() => {

            });
      }
    }
  }
</script>

<style scoped>
  #nodes{
    height: 100%;
    overflow-y: auto;
  }
</style>
