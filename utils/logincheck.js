import {autologin} from "api/login.js"

export async function logincheck(){
	return new Promise((reslove, reject) => {
	
		let token = wx.getStorageSync("token")
		let message = {}
		
		// 没token要登录
		 if(token == null || token == ""){
			wx.login({
				async success(res){
					// 在真机里,res会多出来一个clientInfo属性,会影响到登录,用delete删除该属性
					delete res.clientInfo
					
					if(res.code){
						// 登录获取token
						let {result} = await autologin(res)
						
						// 证明是第一次登录			
						if(result.userInfo.nickname == null){
							message.token = result.token
							message.userInfo = result.userInfo
							message.state = "第一次登录"
							reslove(message)
						}else{
							message.state = "自动登录"
							
							// 如果不是第一次登陆,就直接保存token自动登录,不需要点击按钮登录
							wx.setStorageSync("token",result.token)
							wx.setStorageSync("userInfo",result.userInfo)
							reslove(message)
						}
						
						
					}
					
				}
			})
			
		}else{
		// 有token不需登录
			message.state = "已登录"
			reslove(message)
		}
			
	})
	
			
	}	