const request = require('./request.js');

export function viewCoupon (){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/userCoupon`,

	})
}