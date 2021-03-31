import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import Home from './components/home/base.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
    {
    path: '/',
    component: Home
    }
]

const router = new VueRouter({
    mode: 'history', // ★ 追加
    routes
    })

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
