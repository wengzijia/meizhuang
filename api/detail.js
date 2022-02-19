const request = require('./request.js');

// 获取详情数据
exports.fetchDetailData = function(id){
	console.log('id',id)
	let url = `http://zlwh.jinghuanqiu.com/goodsdatail?id=${id}`;
	return request({
		url
	})
}
// 加入购物车
exports.fetchAddCart = function(token,_id,number){
	return request({
		method:"POST",
		header:{
			Authorization:token
		},
		url:`https://zlwh.jinghuanqiu.com/user/addshopcar`,
		data:{
			_id,number
		}
	})
}
// 获取购物车
exports.fetchGetCart = function(token){
	return request({
		method:"POST",
		header:{
			Authorization:token
		},
		url:`https://zlwh.jinghuanqiu.com/user/getshopcar`
	})
}

// 收藏
exports.fetchJionCollect = function (token,id){
	return request({
		header:{
			Authorization:token
		},
		url:`https://zlwh.jinghuanqiu.com/user/add/collection?goods_id=${id}`
	})
}

// 取消收藏
exports.fetchCancelCollect = function (token,id){
	return request({
		header:{
			Authorization:token
		},
		url:`https://zlwh.jinghuanqiu.com/user/delete/collection?goods_id=${id}`
	})
}
