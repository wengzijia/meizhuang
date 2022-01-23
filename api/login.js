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