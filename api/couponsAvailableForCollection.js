const request = require('./request.js');
export function couponsAvailableForCollection  (){
	return request({
		url:'https://zlwh.jinghuanqiu.com/getcoupon',
	})
}