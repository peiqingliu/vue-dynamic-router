//引入mockjs
const Mock = require('mockjs');
//使用mockjs模拟数据
Mock.mock('/system/user/login', (req, res) => {
    return {
        data: {
            token:"token"
        }
    }
});
