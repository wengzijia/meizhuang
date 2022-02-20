const request = require('./request.js');

// 创建订单
exports.fetchcreateOrder = function(createOrderData){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/creatbaseOrder`,
		data:{
			...createOrderData
		}
	})
}

// 提交订单
exports.fetchSubmitOrder = function(submitOrderData){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/commitOrder`,
		data:{
			...submitOrderData
		}
	})
}

// 订单详情
exports.fetchOrderDetail = function(orderSn){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/get/getexpress`,
		data:{
			orderSn
		}
	})
}