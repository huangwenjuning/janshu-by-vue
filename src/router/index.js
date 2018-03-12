import Tabbar from '../components/public/Tabbar.vue'
// discovery
import Discovery from '../page/home/Discovery.vue'
import Commend from '../components/discovery/Commend.vue'
import Publish from '../components/discovery/Publish.vue'
import SpecialNews from '../components/discovery/SpecialNews.vue'
// follow
import Add from '../page/home/Add.vue'
import Follow from '../page/home/Follow.vue'
import News from '../page/home/News.vue'
import Mine from '../page/home/Mine.vue'



export default[
    {path:"/",component:Tabbar},  
    {path:"/follow",component:Follow},
    {path:"/discovery",component:Discovery},
    {path:"/add",component:Add},
    {path:"/news",component:News},
    {path:"/mine",component:Mine},
    // {path:"/discovery/commdend", component:Commend},          
    // {path:"/discovery/publish",component:Publish},
    // {path:"/discovery/specialNews",component:SpecialNews},
    // {path:"/follow", component:},
]