const request = require('./request.js');

exports.fetchDetailData = function(){
	let url = `http://zlwh.jinghuanqiu.com/goodsdatail?id=115`;
	return request({
		url
	})
}

exports.fetchAddCart = function(token,_id,number){
	console.log('js',_id,number)
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
