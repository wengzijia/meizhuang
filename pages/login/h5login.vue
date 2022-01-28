<template>
	<view>
		<view class="loginBox">
			
		<h1>手机号登录</h1>
			
		<input v-model="phone" @blur="zhenzhe" type="text" placeholder="填写手机号" />
	
		<view class="han">
		<input v-model="imgYzm" type="text" placeholder="请填写图片验证码" />
		<view v-html="yzmData" style="background-color:black;"></view>
		</view>
		
		<view class="han">
		<input v-model="phoneYzm" type="text" placeholder="输入手机验证码"/>
		<button @click="obtainYzm" v-text="yzmBtn" :disabled="yzmBtnDis"></button>
		</view>
		
		<button @click="login" class="loginBtn">登录</button>
		
		</view>
	
	</view>
</template>

<script>
	import {captcha,checkImgYzm,h5login} from "api/login.js"
	
	export default {
		data() {
			return {
				captchaId: '',
				yzmData: '',
				
				phone: '',
				imgYzm: '',
				phoneYzm: '',
				yzmBtn: '获取验证码',
				yzmBtnDis: false,
				
				phoneState: true,
			}
		},
		methods: {
			// 手机号正则
			zhenzhe(){
				let number = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
				if(!this.phone.match(number) && this.phone.length != 0){
					this.$toast("手机号格式有误")
					this.phoneState = true
				}else{
					this.phoneState = false
				}
				
			},
			// 点击获取验证码(同时校验图片验证码)
			async obtainYzm(){
				
				// 手机号码格式必须正确,且图片验证码为4位才执行
				if(this.phoneState == false && this.imgYzm.length == 4){
				
				let {data} = await checkImgYzm(this.phone,this.captchaId,this.imgYzm)
				
				if(data.code == 2000){
					this.$toast('验证码发送成功,注意查看手机');
					let num = 60;
					let setInt = setInterval(()=>{
						num--
						this.yzmBtn = `重新发送(${num})`
						this.yzmBtnDis = true
						if(num == 0){
							clearInterval(setInt)
							this.yzmBtnDis = false
							this.yzmBtn = "发送验证码"
						}
						
					},1000)
					return
				}
					
				this.$toast('发送验证码失败');
	
				}else{
					this.$toast('手机号码或图片验证格式不对');
				}
				
			},
			async login(){
				if(this.phone != '' && this.phoneYzm != ''){
					let {result} = await h5login(this.phone,this.phoneYzm)
						
					if(result.code == 20000){
						this.$toast('登录成功');
						localStorage.setItem("token",result.token)
						localStorage.setItem("userInfo",JSON.stringify(result.userInfo))
					}else{
						this.$toast('服务器繁忙');
					}
						
					
				}else{
					this.$toast('手机号或手机验证码错误');
				}
				
			}
		},
		async created(){
			
			let {data} = await captcha()
			this.captchaId = data.captchaId
			this.yzmData = data.data
			
		},
	}
</script>

<style lang="scss">


.loginBox{
	width: 500px;
	border: 1px solid #ccc;
	box-shadow: 0px 0px 5px 0px #ccc;
	margin: auto;
	margin-top: 100px;
	padding: 30px;
	
	h1{
		text-align: center;
	}
	
	>input{
		border-bottom: 1px solid #ccc;
	}
	
	input{
		width: 100%;
		padding:10px;
		margin: 6px 0;
	}
	
	.han{
		display: flex;
		justify-content: space-between;	
		align-items: center;
		border-bottom: 1px solid #ccc;
		button{
			width: 140px;
			font-size: 14px;
			height: 40px;
			line-height: 40px;
			margin: 0;
		}
	}
	
	.loginBtn{
		background-color: #56bcff;
		width: 50%;
		height: 40px;
		line-height: 40px;
		color: white;
		margin: 30px auto;
	}
}

</style>
