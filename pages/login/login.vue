<template>
	<view>
		
		<image src="../../static/logo.png" mode="" class="logo"></image>
		
		<view class="jianjie">
			
			<view>登录后将获得以下权限</view>
			
			<text> • 获得你的公开信息(昵称,头像等)</text>
			
		</view>
		
		<button class="loginBtn" @click="newloginBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登录</button>


		<cl-toast ref="toast"></cl-toast>

	</view>
</template>

<script>
	import {autologin,newlogin,phoneNumber} from "api/login.js"

	export default {
		data() {
			return {
				token:'',
				userInfo:'',
			};
		},
		methods:{
		
			// 第一次登录点击的按钮(为了录入用户的基本信息)
			newloginBtn(){
				wx.getUserProfile({
					desc:"获取昵称等基本信息",
					async success(res){
						console.log(res)
						let {code} = await newlogin(res)
						if(code == 20000){

							
						wx.login({
							async success(res){
								// 在真机里,res会多出来一个clientInfo属性,会影响到登录,用delete删除该属性
								delete res.clientInfo	
								if(res.code){
									// 登录获取token
									autologin(res,true)
						
								}
								
								
							}
						})

						}
						
					}
				})
				wx.login({
				async success(res){
					// 在真机里,res会多出来一个clientInfo属性,会影响到登录,用delete删除该属性
					delete res.clientInfo	
					if(res.code){
						// 登录获取token
						autologin(res,true)

						
					}
		
					
				}
			})
		
			
		
				 
				
			},
			// 获取手机号
			async getPhoneNumber(e){
				if(e.detail.code){
					let a = await phoneNumber(e.detail.code,this.token)
					this.$refs["toast"].open({
					          message: "绑定手机号成功",
							  position: "middle",
							  icon: "success",
					        });
				}
			}
		},
		


				}
			
		

		
	
</script>

<style lang="scss">
	.logo{
		display: block;
		width: 100px;
		height: 100px;
		position: relative;
		top: 50px;
		margin: auto;
	}
	
	.jianjie{
		width: 80%;
		border-top: 2px solid #eeeeee;
		margin: auto;
		margin-top: 100px;
		view{
			margin-top: 15px;
		}
		text{
			display: inline-block;
			margin-top: 15px;
			color: #999999;
			font-size: 14px;
		}
	}
	
	.loginBtn{
		width: 80%;
		color: white;
		font-size: 15px;
		background-color: #2b2e3d;
		border-radius: 20px;
		margin-top: 35px;
	}

</style>
