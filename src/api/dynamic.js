import request from '@/request'

export async function getDynamicRequest() {
    return await request.get('/dynamic')
}

export async function getVideoDetailInfoRequest(vid) {
    return await request.get(`/video/${vid}`)
}

export async function getPostDetailInfoRequest(pid) {
    return await request.get(`/post/${pid}`)
}
