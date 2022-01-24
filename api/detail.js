const request = require('./request.js');

exports.fetchDetailData = function(){
	let url = `http://zlwh.jinghuanqiu.com/goodsdatail?id=115`;
	return request({
		url
	})
}