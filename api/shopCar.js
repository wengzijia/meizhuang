
const request = require('./request.js');


export function fetch_ShopCar(token,res){
	return request({
		method:"POST",
		header:{
			Authorization:token
		},
		data:res,
		url:`https://zlwh.jinghuanqiu.com/user/getshopcar`
	})
}

