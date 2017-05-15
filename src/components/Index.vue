<template>
    <div class="container">
        <div class="topbar">
            <div class="logo">
                Server Manager System
            </div>
            <div class="user" v-on:click="logout">
                <span class="icon icon-user"></span>
                <span style="margin-left: 10px;">username</span>
            </div>
        </div>
        <div class="sidebar">
            <ul id="sidebars">
                <li class="ignore">
                    <span>系统概览</span>
                </li>
                <li @click="selectItem($event, 'dashboard')" v-bind:class="{active: selected=='dashboard'}">
                    <span class="icon icon-dashboard"></span>
                    <span class="item">概览</span>
                </li>
                <li class="ignore">
                    <span>系统管理</span>
                </li>            
                <li @click="selectItem($event, 'user')" v-bind:class="{active: selected=='user'}">
                    <span class="icon icon-user"></span>
                    <span class="item">用户管理</span>
                </li>
                <!--li @click="selectItem($event, 'group')" v-bind:class="{active: selected=='group'}">
                    <span class="icon icon-group"></span>
                    <span class="item">用户组管理</span>
                </li-->
                <li @click="selectItem($event, 'priority')" v-bind:class="{active: selected=='priority'}">
                    <span class="icon icon-magic"></span>
                    <span class="item">角色管理</span>
                </li>
                <li class="ignore">
                    <span>备份管理</span>
                </li>
                <li @click="selectItem($event, 'store')" v-bind:class="{active: selected=='store'}">
                    <span class="icon icon-save"></span>
                    <span class="item">存储管理</span>
                </li>
                <li @click="selectItem($event, 'strategy')" v-bind:class="{active: selected=='strategy'}">
                    <span class="icon icon-tags"></span>
                    <span class="item">策略管理</span>
                </li>
                <li @click="selectItem($event, 'nodes')" v-bind:class="{active: selected=='nodes'}">
                    <span class="icon icon-magnet"></span>
                    <span class="item">节点管理</span>
                </li>
                <li @click="selectItem($event, 'backup')" v-bind:class="{active: selected=='backup'}">
                    <span class="icon icon-random"></span>
                    <span class="item">备份</span>
                </li>
                 <li @click="selectItem($event, 'restore')" v-bind:class="{active: selected=='restore'}">
                    <span class="icon icon-reply"></span>
                    <span class="item">还原</span>
                </li>
                <li class="ignore">
                    <span>日志</span>
                </li>
                <li @click="selectItem($event, 'log')" v-bind:class="{active: selected=='log'}">
                    <span class="icon  icon-file-alt"></span>
                    <span class='item'>日志查看</span>
                </li>
                <li class="ignore">
                    <span>报表</span>
                </li>
                <li @click="selectItem($event, 'views')" v-bind:class="{active: selected=='views'}">
                    <span class="icon icon-table"></span>
                    <span class="item">报表管理</span>                    
                </li>
                <li class="ignore">
                    <span>账户管理</span>
                </li>
                <li @click="selectItem($event, 'account')" v-bind:class="{active: selected=='account'}">
                    <span class="icon icon-user"></span>
                    <span class="item">我的账户</span>
                </li>
            </ul>
        </div>
        <div class="contents">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            
            return {
                sidebars: {
                    manager: [
                        {
                            name: '用户管理',
                            isActive: true,
                            icon: '',
                            route: 'user'
                        },
                        {
                            name: '用户组管理',
                            isActive: false,
                            icon: '',
                            route: 'group'
                        },
                        {
                            name: '权限管理',
                            isActive: false,
                            icon: '',
                            route: 'priority'
                        }
                    ],
                    store: [
                        {
                            name: '存储管理',
                            isActive: false,
                            icon: '',
                            route: 'store'
                        },
                        {
                            name: '策略管理',
                            isActive: false,
                            icon: '',
                            route: 'strategy'
                        },
                        {
                            name: '节点管理',
                            isActive: false,
                            icon: '',
                            route: 'nodes'
                        },
                        {
                            name: '备份与还原',
                            isActive: false,
                            icon: '',
                            route: 'backrestore'
                        }
                    ],
                    views: [
                        {
                            name: '报表',
                            isActive: false,
                            icon: '',
                            route: 'views'
                        }
                    ],
                    logs: [
                        {
                            name: '日志',
                            isActive: false,
                            icon: '',
                            route: 'log'
                        }
                    ]
                },
                activeItem: null,
                selected: 'user'
            }
        },
        methods: {
            selectItem: function(e, route){
                this.$router.push({path: '/index/' + route});
                this.selected = route;
                // let parent = document.getElementById("sidebars");
                // let sblings = parent.children;
                // for (let item of sblings) {
                //     var classes = item.className;
                //     if (classes.indexOf('active') >= 0) {
                //         classes = classes.replace('active', '');
                //     }
                //     item.className = classes;
                //     // removeClass(item, 'active');
                // }
                // if (e.target.tagName == 'LI'){
                //     e.target.className = "active";
                // } else {
                //     e.target.parentNode.className='active';
                // }
                // console.log(sblings);
            },
            logout: function(){
                let self = this;
                this.$confirm('确实要注销吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        self.$router.push({path: '/'});
                    }).catch(() => {

                    });
                //  this.$msgbox({
                //     title: '删除提示',
                //     message: '是否确认删除此条目',
                //     showCancelButton: true,
                //     confirmButtonText: '是',
                //     cancelButtonText: '否'
                //     });
                // this.$router.push({path: '/'});
            },
            
        },
        created: function(){
                let path = this.$route.path;
                let items = path.split('/')
                let route = items[2];
                this.selected = route;
                console.log(this.activeItem);
                
       }
        
    }
</script>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
    }
    .topbar{
        width: 100%;
        height: 50px;
        background-color: rgb(12,72,66);
        
    }
    .logo{
        color: rgb(36,147,110);
        font-size: 24px;
        line-height: 50px;
        padding-left: 10px;
        float:left;
    }
    .user{
        color: rgb(36,147,110);
        font-size: 24px;
        line-height: 50px;
        float:right;
        padding-right: 10px;
        cursor: pointer;
    }
    .sidebar{
        position: absolute;
        left: 0;
        top: 50px;
        // top: 0;
        width: 200px;
        // height: 100%;
        bottom: 0;
        background-color:#efefef;
        font-size: 14px;
        overflow:hidden;
    
    }
    .sidebar:hover{
        overflow:auto;
    }
    .sidebar ul{
        padding-left: 0;
    }
    .sidebar ul li{
        list-style:none;
        height: 35px;
        text-align: left;
        padding-left:30px;
        cursor: pointer;
    }
    .sidebar ul li span{
        line-height: 35px;
    }
    .sidebar ul li span.icon{
        font-size: 18px;
        margin-right: 10px;
    }
    .sidebar ul li.active{
        background-color: rgb(36,147,110);
        color: white;
    }
    .contents {
        position: absolute;
        top: 50px;
        left: 200px;
        right:0px;
        bottom: 0px;
         overflow:hidden;
    }
</style>
