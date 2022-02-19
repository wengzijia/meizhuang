module.exports = function(options) {
	return new Promise((reslove, reject) => {
		uni.request({
			...options,
			success:(res)=>{
				reslove(res.data)
			},
			fail: reject,
			complete: (res) => {}
		})
	})
}


