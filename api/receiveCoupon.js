const request = require('./request.js');
export function receiveCoupon (id){
			console.log('id',id)
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/recive?id=${id}`,
	})
}