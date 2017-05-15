import NodesList from './nodeslist'
import Details from './details'
var current_path = '/index/nodes/'
export default [
    {
        path: current_path,
        component: NodesList,
        name: 'nodeslist'
    },
    {
        path: current_path + 'details/',
        component: Details,
        name: 'details'
    }
]