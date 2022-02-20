
const request = require('./request.js');


export function fetch_ShopCar(token){
	return request({
		method:"POST",
		header:{
			Authorization:token
		},
		url:`https://zlwh.jinghuanqiu.com/user/getshopcar`
	})
}

