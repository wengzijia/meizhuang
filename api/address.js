const request = require('./request.js')


// 获取地址
export function getAddress(){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/address`,
		method: 'get',
	})
}


// 添加地址
export function setAddress(data,token){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/add/address`,
		method: 'POST',
		header:{
			Authorization:token
		},
		data:data,
	})
}

// 修改地址
export function changeAddress(data,token){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/updata/address`,
		method: 'POST',
		header:{
			Authorization:token
		},
		data:data,
	})
}

