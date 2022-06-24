const Mock = require("mockjs")

const Random = Mock.Random
Random.time('mm:ss')
Random.integer(0,100)
Random.ctitle(1,20)
Random.cname()
const template = {
    "videoViewList|5-10":[{
        "image":"@image",
        "playsCount|0-99999999":0,
        "duration":"@integer(0,100):@time('mm:ss')",
        "title":"@ctitle(1,20)",
        "uploader":"@cname()"
    }]
}

Mock.mock('http://localhost:8080/api/v1/videos','get',template);
