const request = require('./request.js')

// 获取订单详情
export function  fetchOrderDetail(orderSn){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/get/getexpress`,
		data:{
			orderSn
		}
	})
}