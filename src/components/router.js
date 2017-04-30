import User from '@/components/manager/User.vue'
import Group from '@/components/manager/Group.vue'
import Priority from '@/components/manager/Priority.vue'
import Store from '@/components/manager/store.vue'
import Nodes from '@/components/manager/nodes.vue'
import Strategy from '@/components/manager/strategy.vue'
import Backrestore from '@/components/manager/backrestore.vue'
import Log from '@/components/manager/log.vue'
import Views from '@/components/manager/views.vue'
export default [
    {
        path: '/index/user',
        component: User,
        name: 'user'
    },
    {
        path: '/index/group',
        component: Group,
        name: 'group'
    },
    {
        path: '/index/priority',
        component: Priority,
        name: 'priority'
    },
    {
        path: '/index/store',
        component: Store,
        name: 'store'
    }, 
    {
        path: '/index/nodes',
        component: Nodes,
        name: 'nodes'
    },
    {
        path: '/index/strategy',
        component: Strategy,
        name: 'strategy'
    }, 
    {
        path: '/index/backrestore',
        component: Backrestore,
        name: 'backrestore'
    }, 
    {
        path: '/index/log',
        component: Log,
        name: 'log'
    }, 
    {
        path: '/index/views',
        component: Views,
        name: 'views'
    }, 
]