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

// 取消订单
exports.fetchCancelOrder = function(orderSn){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/choseorder`,
		data:{
			orderSn
		}
	})
}

// 删除订单
exports.fetchDeleteOrder = function(orderSn){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/deleteorder`,
		data:{
			orderSn
		}
	})
}

// 重新支付
exports.fetchPayAgain = function(orderSn){
	return request({
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/repay`,
		data:{
			orderSn
		}
	})
}



// 获取地址
exports.fetchAddress = function(token){
	return request({
		header:{
			Authorization:token
		},
		url:`https://zlwh.jinghuanqiu.com/user/address`
		
	})
}

// 获取订单列表
exports.fetchOrderList = function(token,skip,take){
	return request({
		header:{
			Authorization:token
		},
		method:"POST",
		url:`https://zlwh.jinghuanqiu.com/user/getOrder`,
		data:{
			skip,take
		}
	})
}