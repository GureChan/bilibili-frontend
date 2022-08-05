const Mock = require("mockjs")

// // 推荐首页数据
// // const videoTemplate = {
// //     "videoViewList|200": [{
// //         "image": "@dataImage",
// //         "playsCount|0-99999999": 0,
// //         "duration": "@integer(0,100):@time('mm:ss')",
// //         "title": "@ctitle(1,20)",
// //         "uploader": "@cname()"
// //     }]
// // }

// // 直播数据
// // const liveTemplate = {
// //     "liveList|200": [{
// //         "image": "@dataImage",
// //         "streamer": "@cname()",
// //         "viewersNumber|0-10000": 0,
// //         "title": "@ctitle(1,20)",
// //         "category": "@cname()"
// //     }]
// // }

// // 热门数据
// // const HotTemplate = {
// //     "hotList|200": [{
// //         "image": "@image",
// //         "title": "@ctitle(1,20)",
// //         "uploader": "@cname()",
// //         "playsCount|0-99999999": 0,
// //         "uploadTime": "@datetime",
// //         "duration": "@integer(0,100):@time('mm:ss')",
// //     }]
// // }
// // const videoData = Mock.mock(videoTemplate)
// // // recommend 视图分页，index和size可以不指定，那就按照默认来，size为10
// // // https://blog.csdn.net/qq_20495901/article/details/124997667
// // Mock.mock(/http:\/\/localhost:8080\/api\/v1\/videos(\?index=(\d)+&size=(\d)+)?/, 'get', (options) => {
// //     // options里带body(post里的数据，get里为空对象),type,url
// //     const beginIndex = options.url.indexOf('?') // 先找到?的下标
// //     let index = 1, size = 10
// //     if (beginIndex !== -1) {
// //         // 有传参数进来的话，就按照用户的要求返回数据
// //         const params = options.url.substring(beginIndex + 1)
// //         /*
// //         例如传进来的url = http://localhost:8080/api/v1/videos?index=1&size=20
// //         那params = index=1&size=20
// //          */
// //         const paramList = params.split('&') // ["index=1","size=20"]
// //         const paramsList = paramList.map(param => {
// //             const temp = param.split('=') // ["index","1"]
// //             return {
// //                 [temp[0]]: temp[1] // 如果要将变量作为key值，需要加[]
// //             }
// //         }); // BUG:不清楚为什么不加分号下面就会报错⁉️
// //         [{ index }, { size }] = [...paramsList] // [{index:1},{size=20}]
// //         index = Number.parseInt(index)
// //         size = Number.parseInt(size)
// //     }
// //     // 根据传入的参数把数据给传出去
// //     const data = Object.values(videoData)[0] // Object.values返回的是一个数组
// //     const totalPages = Math.ceil(data.length / size)
// //     if (index > totalPages || index <= 0) {
// //         return Mock.mock([])
// //     } else {
// //         const dataFragment = data.slice((index - 1) * size, index * size) // [(1-1)*20,1*20) = 0-19
// //         return Mock.mock(dataFragment)
// //     }
// // });

// // const liveData = Mock.mock(liveTemplate)

// // Mock.mock(/http:\/\/localhost:8080\/api\/v1\/live(\?index=(\d)+&size=(\d)+)?/, 'get', (options) => {
// //     // options里带body(post里的数据，get里为空对象),type,url
// //     const beginIndex = options.url.indexOf('?') // 先找到?的下标
// //     let index = 1, size = 10
// //     if (beginIndex !== -1) {
// //         // 有传参数进来的话，就按照用户的要求返回数据
// //         const params = options.url.substring(beginIndex + 1)
// //         /*
// //         例如传进来的url = http://localhost:8080/api/v1/videos?index=1&size=20
// //         那params = index=1&size=20
// //          */
// //         const paramList = params.split('&') // ["index=1","size=20"]
// //         const paramsList = paramList.map(param => {
// //             const temp = param.split('=') // ["index","1"]
// //             return {
// //                 [temp[0]]: temp[1] // 如果要将变量作为key值，需要加[]
// //             }
// //         }); // 不清楚为什么不加分号下面就会报错⁉️
// //         [{ index }, { size }] = [...paramsList] // [{index:1},{size=20}]
// //         index = Number.parseInt(index)
// //         size = Number.parseInt(size)
// //     }
// //     // 根据传入的参数把数据给传出去
// //     const data = Object.values(liveData)[0] // Object.values返回的是一个数组
// //     const totalPages = Math.ceil(data.length / size)
// //     if (index > totalPages || index <= 0) {
// //         return Mock.mock([])
// //     } else {
// //         const dataFragment = data.slice((index - 1) * size, index * size) // [(1-1)*20,1*20) = 0-19
// //         return Mock.mock(dataFragment)
// //     }
// // });

// // // XXX:取页数和页码可以直接用正则取
// // const hotData = Mock.mock(HotTemplate)
// // Mock.mock(/http:\/\/localhost:8080\/api\/v1\/hot(\?index=(\d)+&size=(\d)+)?/, 'get', (options) => {
// //     const beginIndex = options.url.indexOf('?') // 先找到?的下标
// //     let index = 1, size = 10
// //     if (beginIndex !== -1) {
// //         // 有传参数进来的话，就按照用户的要求返回数据
// //         const params = options.url.substring(beginIndex + 1)
// //         /*
// //         例如传进来的url = http://localhost:8080/api/v1/videos?index=1&size=20
// //         那params = index=1&size=20
// //          */
// //         const paramList = params.split('&') // ["index=1","size=20"]
// //         const paramsList = paramList.map(param => {
// //             const temp = param.split('=') // ["index","1"]
// //             return {
// //                 [temp[0]]: temp[1] // 如果要将变量作为key值，需要加[]
// //             }
// //         }); // 不清楚为什么不加分号下面就会报错⁉️
// //         [{ index }, { size }] = [...paramsList] // [{index:1},{size=20}]
// //         index = Number.parseInt(index)
// //         size = Number.parseInt(size)
// //     }
// //     // 根据传入的参数把数据给传出去
// //     const data = Object.values(hotData)[0] // Object.values返回的是一个数组
// //     const totalPages = Math.ceil(data.length / size)
// //     if (index > totalPages || index <= 0) {
// //         return Mock.mock([])
// //     } else {
// //         const dataFragment = data.slice((index - 1) * size, index * size) // [(1-1)*20,1*20) = 0-19
// //         return Mock.mock(dataFragment)
// //     }
// // })

// // 用户列表 模拟user表
// const userList = [
//     {
//         uid: 1,
//         username: "aa@qq.com",
//         password: 'aa@qq.com-',
//         signature: "",
//         avatar: "",
//         gender: "",
//         email: "aa@qq.com",

//     },
//     {
//         uid: 2,
//         username: "test@gmail.com", // 默认是邮箱名
//         password: "testadmin-",
//         signature: "",
//         avatar: "",
//         gender: "",
//         email: "test@gmail.com",
//     }]

// // 模拟登录
// Mock.mock('http://localhost:8080/api/v1/signin', 'post', (options) => {
//     // 登录的时候可以用用户名登录也可以用邮箱登录，所以需要先判断传入的到底是什么类型的
//     let { account, password } = JSON.parse(options.body)
//     const regexEmail = /^[A-Za-z\d.]+@[a-zA-Z\d]+(\.[A-Za-z\d]+)+$/g
//     let accountType = regexEmail.test(account) ? 'email' : 'username'
//     let userIndex; // 存储登录用户的下标，方便去找该用户的信息
//     let isExist = userList.some((user, index) => {
//         if (account === user[accountType] && password === user.password) {
//             userIndex = index
//             return true
//         }
//     })

//     if (isExist) {
//         // TODO:如果数据存在返回token,set-cookie
//         // XXX:JSON响应规范可能并不合理
//         return {
//             code: 1,
//             data: {
//                 uid: userList[userIndex].uid
//             }
//         }
//     } else {
//         return {
//             code: -1,
//             message: "账号或者密码错误"
//         }
//     }
// })

// // 获取用户信息
// // XXX:API设计不太合理
// const regexUserInfo = /http:\/\/localhost:8080\/api\/v1\/users\/(\d+)/ // 注意这里的(\d+)
// Mock.mock(regexUserInfo, 'get', (options) => {
//     let id = parseInt(regexUserInfo.exec(options.url)[1]); // 注意这里的[1]，0号索引是整个字符串
//     if (id > userList.length) {
//         return {
//             code: -1,
//             message: '资源不存在'
//         }
//     } else {
//         for (const user of userList) {
//             if (user.uid === id) {
//                 return {
//                     code: 1,
//                     data: user
//                 }
//             }
//         }
//     }
// })


// XXX:这里只是模拟数据，后端真正弄表的时候要搞成那种关系模型
// const dynamicVideoTemplate = {
//     "videoList|5": [{
//         "vid|+1": 0,
//         "publisherAvatar": "@dataImage",
//         "publisherName": "@cname",
//         "publishDate": "@datetime",
//         "videoCover": "@dataImage", // 视频封面 动态里用到
//         "likeCount|0-100": 0, // 在视频页面不用具体展示哪个用户like,forward,favourite，只需要显示数据即可
//         "forwardCount|0-100": 0,
//         "favouriteCount|0-100": 0,
//         "duration": "@integer(0,100):@time('mm:ss')",
//         "title": "@csentence",
//         "comment|5-20": [
//             {
//                 "userAvatar": "@dataImage",
//                 "userName": "@cname",
//                 "commentDate": "@datetime",
//                 "commentContent": "@cparagraph",
//                 "likeCount|0-100": 0, // 评论区只显示点赞数，其他的图标只是为了交互
//                 "subComment|5-20": [ // 视频评论区里也有对评论的评论，只划分到此
//                     {
//                         "userAvatar": "@dataImage",
//                         "userName": "@cname",
//                         "commentDate": "@datetime",
//                         "commentContent": "@cparagraph",
//                         "likeCount|0-100": 0,
//                     }
//                 ]
//             }
//         ]
//     }]
// }

const dynamicTextTemplate = {
    "textList|5": [{
        "pid|+1": 0,
        "publisherAvatar": "@dataImage",
        "publisherName": "@cname",
        "publishDate": "@datetime",
        "content": "@cparagraph",
        "likeCount|0-100": 0, // 在视频页面不用具体展示哪个用户like,forward,favourite，只需要显示数据即可
        "forwardCount|0-100": 0,
        "favouriteCount|0-100": 0,
        "forward|5-10": [
            {
                "userAvatar": "@dataImage",
                "userName": "@cname",
                "forwardDate": "@datetime",
                "content": "@cparagraph"
            }
        ],
        "like|5-10": [ // 动态页面展示数组的长度，详情页展示数组里的具体内容
            {
                "userAvatar": "@dataImage",
                "userName": "@cname",
                "signature": "@csentence"
            }
        ],
        "comment|5-20": [
            {
                "userAvatar": "@dataImage",
                "userName": "@cname",
                "commentDate": "@datetime",
                "commentContent": "@cparagraph",
                "likeCount|0-100": 0, // 评论区只显示点赞数，其他的图标只是为了交互
                "subComment|5-20": [ // 视频评论区里也有对评论的评论，只划分到此
                    {
                        "userAvatar": "@dataImage",
                        "userName": "@cname",
                        "commentDate": "@datetime",
                        "commentContent": "@cparagraph",
                        "likeCount|0-100": 0,
                    }
                ]
            }
        ]
    }]
}

// const dynamicVideoData = Mock.mock(dynamicVideoTemplate)
// // 获取所有视频
// Mock.mock('http://localhost:8080/api/v1/dynamic/videos', 'get', () => {
//     return {
//         code: 1,
//         data: dynamicVideoData
//     }
// })

const textData = Mock.mock(dynamicTextTemplate)
// let dynamicData = []
// dynamicData.push(...dynamicVideoData.videoList)
// dynamicData.push(...textData.textList)
// 获取所有动态
// Mock.mock('http://localhost:8080/api/v1/dynamic', 'get', () => {
//     // XXX:应该要根据每个用户关注的UP主来显示动态，但这里不做具体处理
//     return {
//         code: 1,
//         data: dynamicData
//     }
// })

// // 获取视频的详细信息
// const regexVideo = /http:\/\/localhost:8080\/api\/v1\/videos\/(\d+)/
// Mock.mock(regexVideo, 'get', (options) => {
//     let id = parseInt(regexVideo.exec(options.url)[1])
//     console.log(id);
// })

// 获取文本的详细信息
const regexPost = /http:\/\/localhost:8080\/api\/v1\/post\/(\d+)/
Mock.mock(regexPost, 'get', (options) => {
    let id = parseInt(regexPost.exec(options.url)[1])
    for (const item of textData.textList) {
        if (item.pid === id) {
            return {
                code: 1,
                data: item
            }
        }
    }
})