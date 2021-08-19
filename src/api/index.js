/*
* 包含n接口请求函数的模块
* */
import ajax from "./ajax";
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShopList = (longitude, latitude) => ajax(BASE_URL + `/shops`, {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
// export const reqFoodType = (geohash,keyword) => ajax('search_shops',{geohash,keyword})
// 5、获取一次性验证码
// export const reqFoodType = () => ajax('/captcha')
// 6、用户名密码登陆
// export const reqFoodType = (name,pwd,captcha) => ajax('login_pwd',{name,pwd,captcha})
// 7、发送短信验证码
// export const reqFoodType = (phone) => ajax('/sendcode',{phone})
// 8、手机号验证码登陆
// export const reqFoodType = () => ajax('/login_sms')
// 9、根据会话获取用户信息
// export const reqFoodType = () => ajax('/userinfo')
// 10、用户登出
// export const reqFoodType = () => ajax('logout')
