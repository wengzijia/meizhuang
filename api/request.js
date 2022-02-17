module.exports = function(options) {
	return new Promise((reslove, reject) => {
		uni.showLoading({
			title: 'loading...'
		})
		let httpRequest = {
			...options,
			success: (res) => {
				reslove(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: (res) => {
				uni.hideLoading()
				let {
					code,
					message
				} = res.data
				if (code === 10004 || code === 10005) {
					uni.showToast({
						title: message
					})
					uni.redirectTo({
						// #ifdef MP-WEIXIN
						url: '../../pages/login/login',
						// #endif
						// #ifdef H5
						url: '../../pages/login/h5login',
						// #endif
					})
				}
			}
		}
		const reg = /\/user\//
		let result = reg.test(options.url)
		// 需要权限
		if (result) {
			let token = uni.getStorageSync('token')
			if (token === '') {
				uni.redirectTo({
					// #ifdef MP-WEIXIN
					url: '../../pages/login/login',
					// #endif
					// #ifdef H5
					url: '../../pages/login/h5login',
					// #endif
				})
				return
			}
			httpRequest.header = {
				Authorization: token
			}
			uni.request(httpRequest)
		} else {
			uni.request(httpRequest)
		}

	})
}

