import { createApp } from 'vue'
import { NavBar, Icon, Search, List, PullRefresh, Button, Tabbar, TabbarItem } from 'vant';
import App from './App.vue'
import router from "@/router";
import store from '@/store'
import './mock' // 获取请求，返回数据

const app = createApp(App)
app.use(NavBar).use(Icon).use(Search).use(List).use(PullRefresh).use(Button).use(Tabbar).use(TabbarItem) // UI组件库
app.use(router)
app.use(store)
app.mount('#app')
