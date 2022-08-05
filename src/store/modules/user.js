import { signInRequest, signUpRequest } from '@/api/user'

// state，记住返回的是个对象，所以在{}外面加上()，不然就被当成语句块了
const state = () => ({
    loginStatus: true, // 用户登录状态
    uid: 0 // 用户uid
})

// mutation 类似于注册事件
const mutations = {
    setLoginStatus(state, status) {
        state.loginStatus = status
    },
    setUid(state, id) {
        state.uid = id
    }
}

// action 真正操纵数据的地方，触发mutation来改变数据
// XXX:这里的代码要跟着后端响应结构发生改变
const actions = {
    async signIn(context, data) {
        const response = await signInRequest(data)
        console.log(response);
        if (response.data.code === 1) {
            context.commit('setLoginStatus', true) // 将登录状态设置为true
            context.commit('setUid', response.data.data.uid) // 改变当前uid
        }
        return response.data

    },
    // 注册成功之后不用重新登录
    async signUp(context, data) {
        const response = await signUpRequest(data)
        if (response.data.code === 1) {
            context.commit('setLoginStatus', true)
        }
        return response.data
    }
}

export default {
    namespaced: true, // 可以理解为定义成单个模块，如果为false，则这些状态都是定义在根上的,但是在使用时就要加上模块名即文件名
    state,
    mutations,
    actions,
}