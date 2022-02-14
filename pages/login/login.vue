<template>
	<view>
<<<<<<< HEAD
		<button class="loginBtn" @click="newloginBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登录</button>

=======
		
	  
		<button class="loginBtn" @click="newloginBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登录</button>
>>>>>>> detail
		<!-- 开启提示框 -->
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import {autologin,newlogin,phoneNumber} from "api/login.js"
	import Toast from 'wxcomponents/vant/toast/toast.js';
<<<<<<< HEAD


=======
	
>>>>>>> detail
	export default {
		data() {
			return {
				token:'',
<<<<<<< HEAD
				userInfo:''
=======
				userInfo:'',
>>>>>>> detail
			};
		},
		methods:{
			// 第一次登录点击的按钮(为了录入用户的基本信息)
			newloginBtn(){
				let _this = this;
				
				// 获取用户基本信息
				wx.getUserProfile({
					desc:"有用的",
					async success(res){
						
						let {code} = await newlogin(res,_this.token)
						if(code == 20000){
							wx.setStorageSync("token",_this.token)
							wx.setStorageSync("userInfo",_this.userInfo)
							Toast("登录成功")
						}
						
					}
				})
				 
				
			},
			// 获取手机号
			async getPhoneNumber(e){
				
				if(e.detail.code){
					let a = await phoneNumber(e.detail.code,this.token)
					Toast("绑定手机号成功")
				}
			   
			}
<<<<<<< HEAD

		},
		mounted(){

=======
		},
		mounted(){
>>>>>>> detail
			let _this = this;
			wx.login({
				
				async success(res){
					// 在真机里,res会多出来一个clientInfo属性,会影响到登录,用delete删除该属性
					delete res.clientInfo
					
					if(res.code){
						// 登录获取token
						let {result} = await autologin(res)
						
						// 证明是第一次登录			
						if(result.userInfo.nickname == null){
							Toast("第一次登录")
							_this.token = result.token
							_this.userInfo = result.userInfo
							
						}else{
<<<<<<< HEAD
							// 如果不是第一次登陆,就直接保存token自动登录,不需要点击按钮登录
=======
>>>>>>> detail
							Toast("不是第一次登录")
							wx.setStorageSync("token",result.token)
							wx.setStorageSync("userInfo",result.userInfo)
						}
						
						
					}
					
				}
			})
		},
		
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
