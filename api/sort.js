const request = require('./request.js')

export function fetch_sortData(){
	return request({
		url:'https://zlwh.jinghuanqiu.com/category'
	})
}