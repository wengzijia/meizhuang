const request = require("./request.js")

exports.fetchSearch = function(page,size,keyWord) {
	return request({
		url:`https://zlwh.jinghuanqiu.com/goodslist/page`,
		method:'POST',
		data:{
			page,size,keyWord
		}
	})
}