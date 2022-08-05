import request from '@/request'

// 底层模块不应该去处理异常，让业务层去处理错误
export async function signInRequest(body) {
    return await request.post('/signin', {
        account: body.account,
        password: body.password
    })
}

export async function signUpRequest(body) {
    return await request.post('/users/', {
        email: body.email,
        password: body.password
    })
}

export async function getUserInfoRequest(uid) {
    return await request.get(`/users/${uid}`)
}

