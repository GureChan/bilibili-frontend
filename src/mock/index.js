const Mock = require("mockjs")

const Random = Mock.Random
// 自定义
Random.time('mm:ss')
Random.integer(0, 100)
Random.ctitle(1, 20)
Random.cname()

const videoTemplate = {
    "videoViewList|200": [{
        "image": "@image",
        "playsCount|0-99999999": 0,
        "duration": "@integer(0,100):@time('mm:ss')",
        "title": "@ctitle(1,20)",
        "uploader": "@cname()"
    }]
}

const liveTemplate = {
    "liveList|200":[{
        "image":"@image",
        "streamer":"@cname()",
        "viewersNumber|0-10000":0,
        "title":"@ctitle(1,20)",
        "category":"@cname()"
    }]
}
const videoData = Mock.mock(videoTemplate)
// recommend 视图分页，index和size可以不指定，那就按照默认来，size为10
// https://blog.csdn.net/qq_20495901/article/details/124997667
Mock.mock(/http:\/\/localhost:8080\/api\/v1\/videos(\?index=(\d)+&size=(\d)+)?/, 'get', (options) => {
    // options里带body(post里的数据，get里为空对象),type,url
    const beginIndex = options.url.indexOf('?') // 先找到?的下标
    let index = 1, size = 10
    if (beginIndex !== -1) {
        // 有传参数进来的话，就按照用户的要求返回数据
        const params = options.url.substring(beginIndex + 1)
        /*
        例如传进来的url = http://localhost:8080/api/v1/videos?index=1&size=20
        那params = index=1&size=20
         */
        const paramList = params.split('&') // ["index=1","size=20"]
        const paramsList = paramList.map(param => {
            const temp = param.split('=') // ["index","1"]
            return {
                [temp[0]]: temp[1] // 如果要将变量作为key值，需要加[]
            }
        }); // 不清楚为什么不加分号下面就会报错⁉️
        [{index}, {size}] = [...paramsList] // [{index:1},{size=20}]
        index = Number.parseInt(index)
        size = Number.parseInt(size)
    }
    // 根据传入的参数把数据给传出去
    const data = Object.values(videoData)[0] // Object.values返回的是一个数组
    const totalPages = Math.ceil(data.length / size)
    if (index > totalPages || index <= 0) {
        return Mock.mock([])
    } else {
        const dataFragment = data.slice((index - 1) * size,index * size) // [(1-1)*20,1*20) = 0-19
        return Mock.mock(dataFragment)
    }
});

const liveData = Mock.mock(liveTemplate)

Mock.mock(/http:\/\/localhost:8080\/api\/v1\/live(\?index=(\d)+&size=(\d)+)?/, 'get', (options) => {
    // options里带body(post里的数据，get里为空对象),type,url
    const beginIndex = options.url.indexOf('?') // 先找到?的下标
    let index = 1, size = 10
    if (beginIndex !== -1) {
        // 有传参数进来的话，就按照用户的要求返回数据
        const params = options.url.substring(beginIndex + 1)
        /*
        例如传进来的url = http://localhost:8080/api/v1/videos?index=1&size=20
        那params = index=1&size=20
         */
        const paramList = params.split('&') // ["index=1","size=20"]
        const paramsList = paramList.map(param => {
            const temp = param.split('=') // ["index","1"]
            return {
                [temp[0]]: temp[1] // 如果要将变量作为key值，需要加[]
            }
        }); // 不清楚为什么不加分号下面就会报错⁉️
        [{index}, {size}] = [...paramsList] // [{index:1},{size=20}]
        index = Number.parseInt(index)
        size = Number.parseInt(size)
    }
    // 根据传入的参数把数据给传出去
    const data = Object.values(liveData)[0] // Object.values返回的是一个数组
    const totalPages = Math.ceil(data.length / size)
    if (index > totalPages || index <= 0) {
        return Mock.mock([])
    } else {
        const dataFragment = data.slice((index - 1) * size,index * size) // [(1-1)*20,1*20) = 0-19
        return Mock.mock(dataFragment)
    }
});