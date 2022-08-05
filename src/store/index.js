import { createStore } from 'vuex'
import user from './modules/user'

export default createStore({
    modules: {
        user,
    },
    strict: true // 表示只能用mutation来改变state
})