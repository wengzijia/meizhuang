const request = require('./request.js')

// 自动登录 (用来获取token)

export function autologin(wxCode){
	return request({
		url:`https://zlwh.jinghuanqiu.com/wxlogin`,
		method: 'POST',
		data:wxCode
		
	})
}

// 第一次登录 (录入用户基本信息)

export function newlogin(res,token){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/fixuserinfo`,
		method: 'POST',
		header:{
			Authorization:token
		},
		data:res
		
	})
}

// 用户手机号

export function phoneNumber(code,token){
	return request({
		url:`https://zlwh.jinghuanqiu.com/user/fixusertell`,
		method: 'POST',
		header:{
			Authorization:token
		},
		data:{code}
		
	})

}




// h5

// 获取图形验证码
export function captcha(){
	return request({
		url:`https://zlwh.jinghuanqiu.com/h5login/captcha?height=36&width=110`,
		method: 'get'
		
	})
}
// 校验图形验证码
export function checkImgYzm(tell,captchaId,verifyCode){
	return request({
		url:`https://zlwh.jinghuanqiu.com/h5login/sentcapcha`,
		method: 'post',
		data:{
			tell,
			captchaId,
			verifyCode,
		}
		
	})
}
// 登录
export function h5login(tell,code){
	return request({
		url:`https://zlwh.jinghuanqiu.com/h5login`,
		method: 'post',
		data:{tell,code}
		
	})
}

