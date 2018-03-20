import Tabbar from '../components/public/Tabbar.vue'
// discovery
import Discovery from '../page/home/Discovery.vue'
// import Commend from '../components/discovery/Commend.vue'
// import Publish from '../components/discovery/Publish.vue'
// import SpecialNews from '../components/discovery/SpecialNews.vue'
// follow
import Follow from '../page/home/Follow.vue'
// import Content from '../components/follow/Content.vue'
import News from '../page/home/News.vue'
import Mine from '../page/home/Mine.vue'
import Article from '../page/article/Article.vue'
import Fans from '../components/mine/Fans.vue'


export default[
    {path:'/article/:id',component:Article},
    {path:"/",component:Follow},  
    {path:"/follow",component:Follow},
    {path:"/discovery",component:Discovery},
    {path:"/news",component:News},
    {path:"/mine",component:Mine},
    {path:"/mine/fans",component:Fans},

    // {path:"/discovery/commdend", component:Commend},          
    // {path:"/discovery/publish",component:Publish},
    // {path:"/discovery/specialNews",component:SpecialNews},
    // {path:"/follow", component:},
]