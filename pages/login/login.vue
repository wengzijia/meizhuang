<template>
	<view>
		<button class="loginBtn" @click="newloginBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登录</button>
		<!-- 开启提示框 -->
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import {autologin,newlogin,phoneNumber} from "api/login.js"
	import Toast from 'wxcomponents/vant/toast/toast.js';
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
				
				// 获取用户基本信息
		
				 
				
			},
			// 获取手机号
			async getPhoneNumber(e){
				if(e.detail.code){
					let a = await phoneNumber(e.detail.code,this.token)
				console.log(a,"tell")
				}
			}
		},
		mounted(){

		}
		
	}
</script>

<style lang="scss">
	
	.loginBtn{
		width: 80%;
		color: white;
		background-color: red;
		border-radius: 20px;
		margin-top: 200px;
	}

</style>
