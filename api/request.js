module.exports = function(options) {
	return new Promise((reslove, reject) => {
		uni.request({
			...options,
			success:(res)=>{
				reslove(res.data)
			},
			fail: reject,
			complete: (res) => {
				// 无论成功与失败，我都触发
				// console.log(res)
			}
		})
	})
}
