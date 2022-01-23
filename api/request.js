<<<<<<< HEAD

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
=======
module.exports = function  request(options) {
    return new Promise((resolve,reject)=>{
      wx.showLoading({
        title: 'loading...',
      })
      wx.request({
        ...options,
        success(res){
          resolve(res.data)
        },
        fail(err){
          reject(err)
        },
        complete(){
          wx.hideLoading()
        }
      })
    })
}


	
>>>>>>> detail
