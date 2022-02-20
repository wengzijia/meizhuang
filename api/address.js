const request = require('./request.js')


// 获取地址
export function getAddress(){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/address`,
		method: 'get',
	})
}
