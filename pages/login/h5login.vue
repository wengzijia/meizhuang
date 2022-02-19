<template>
	<view class="body">
		<view class="loginBox">
			
			<div class="login-signup l-attop" id="login">
				
				<image src="../../static/logo.png" mode="" class="logo"></image>
				
			  <div class="login-signup-content">
			   
			    <input style="border-bottom: 1px solid #ccc;" v-model="phone" @blur="zhenzhe" type="text" class="field-input" placeholder="手机号"/>
				
				<view class="small-box">
			    <input v-model="imgYzm" type="email" class="field-input small-input" placeholder="图片验证码"/>
				
				<view class="left-border">
				</view>
				<view v-html="yzmData" class="imgYzm" @click="obtainImgYzm"></view>
				
				
				
				</view>
			  
				<view class="small-box">
				<input v-model="phoneYzm" type="text" class="field-input small-input" placeholder="手机验证码"/>
				
				<view class="left-border">
				</view>
				<button @click="obtainYzm" class="yzmBtn" v-text="yzmBtn" :disabled="yzmBtnDis"></button>
				
				
				
				</view>
				
				
			    <button @click="login" class="submit-btn">
			          登录
			        </button>
			
			
			
			  </div>
			</div>
			
		
		<cl-toast ref="toast"></cl-toast>
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
				imgYzmCatch: false,
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
					this.$refs["toast"].open({
					          message: "手机号格式有误",
							  position: "middle",
							  icon: "error",
					        });
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
					this.imgYzmCatch = true
					this.$refs["toast"].open({
					          message: "验证码发送成功,注意查看手机",
							  position: "middle",
							  icon: "warning",
					        });
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
				this.$refs["toast"].open({
				          message: data.message,
						  position: "middle",
						  icon: "error",
				        });
				if(data.message == "短信未过期"){
					this.obtainImgYzm()
				}
				
				}else{
					this.$refs["toast"].open({
					          message: "手机号码或图片验证格式不对",
							  position: "middle",
							  icon: "error",
					        });
				}
				
			},
			// 登录
			async login(){
				
				if(this.phone != '' && this.phoneYzm != '' && this.imgYzmCatch == true){
					let {result} = await h5login(this.phone,this.phoneYzm)
					
					if(result.code == 20000){
						this.$refs["toast"].open({
						          message: "登录成功",
								  position: "middle",
								  icon: "success",
						        });
						localStorage.setItem("token",result.token)
						localStorage.setItem("userInfo",JSON.stringify(result.userInfo))
					}else{
						
						this.$refs["toast"].open({
						          message: "服务器繁忙",
								  position: "middle",
								  icon: "error",
						        });
					}
						
					
				}else{
					this.$refs["toast"].open({
					          message: "手机号或手机验证码错误",
							  position: "middle",
							  icon: "error",
					        });
				}
				
			},
			// 获取图形验证码
			async obtainImgYzm(){
				let {data} = await captcha()
				this.captchaId = data.captchaId
				this.yzmData = data.data
			}
		},
		created(){
			this.obtainImgYzm()
		},
	}
</script>

<style lang="scss">

.loginBox{
	.logo{
		display: block;
		width: 100px;
		height: 100px;
		position: relative;
		bottom: 50px;
		margin: auto;
	}
	.small-box{
		height: 45px;
		border-bottom: 1px solid #ccc;
		margin-top: 10px;
		position: relative;
		display: flex;
		align-items: center;
	}
	.imgYzm{
		background-color:black;
		position: absolute;
		width: 100px;
		height: 90%;
		top: 0;
		right: 0px;
	}
	.yzmBtn{
		background-color: #2b2e3d;
		position: absolute;
		height: 38px;
		right: 0px;
		font-size: 14px;
		color: white;
		width: 100px;
		display: flex;
		justify-content: center;		align-items: center;
	}
	h1{
		text-align: center;
	}
	
	>input{
		border-bottom: 1px solid #ccc;
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
			margin-left: 10px;
		}
	}

}

.left-border{
	position: absolute;
	right: 120px;
	border-left: 1px solid #ccc;
	height: 80%;
}







/* Reset */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  overflow-x: hidden;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}

body {
  background-color: #e3e3e3;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

input,
button {
  outline: 0;
}

.login-signup {
  
  width: 100%;
  min-width: 320px;
  max-width: 360px;
  position: relative;
  top: 100px;
  margin: 0 auto;
}

.login-signup-title {
  padding: 15px;
  width: calc(100% - 30px);
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: #FF5722;
  border: 1px solid #F55320;
}

.login-signup-content {
  width: calc(100% - 50px);
  position: relative;
  padding: 25px;
  background-color: #FFF;
  border: 1px solid #E2E2E2;
}

.input-name {
  font-size: 14px;
}

.input-margin {
  margin-top: 25px;
}

.input-name h2 {
  padding-bottom: 5px;
  float: left;
}

input.field-input {
  width: calc(100% - 24px);
  margin-top: 8px;
  background-color: white;
  padding: 6px 12px;
  font-size: 13px;
}

input.small-input{
	width: 50%;
	min-width: 100rpx;
	max-width: 240rpx;
}

.check-input {
  width: 16px;
  height: 16px;
  position: relative;
  float: left;
}

input.checkme {
  position: relative;
  top: 2px;
}

div.rememberme {
  font-size: 12px;
  top: 6px;
  position: relative;
  margin-left: 8px;
  float: left;
}

.check-input label {
  cursor: pointer;
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  top: 5px;
  left: 3px;
  background-color: #FFAB91;
}

.input-r {
  margin-top: 15px;
  position: relative;
}

.check-input label:after {
  opacity: 0;
  content: "";
  position: absolute;
  width: 7px;
  height: 4px;
  background: transparent;
  top: 3px;
  left: 3px;
  border: 2px solid #FFF;
  border-top: none;
  border-right: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.check-input label:hover:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  opacity: 0.5;
}

.check-input input[type=checkbox]:checked + label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
}

.submit-btn {
  width: 90%;
  margin-top: 28px;
  height: 40px;
  line-height: 30px;
  text-align: center;
  padding: 5px 0;
  border-radius: 20px;
  background-color: #2b2e3d;
  color: #FFF;
  border: none;
  transition: 0.5s cubic-bezier(0.72, 0.15, 0.53, 0.84);
}

.submit-btn:hover {
  background-color: #F4511E;
}

.forgot-pass {
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid #E0E0E0;
  padding: 5px 0;
  text-align: center;
}

.forgot-pass a {
  text-align: center;
  font-size: 10px;
  color: #757575;
}

#signup .login-signup-content {
  padding-bottom: 46px;
}

.s-atbottom {
  transform: translate3d(100px, -506.5px, 0);
  z-index: 0;
  -webkit-filter: blur(1px);
  filter: blur(1px);
  opacity: 0.6;
}

.s-attop {
  transform: translate3d(100px, -506.5px, 0);
  z-index: 1;
  -webkit-filter: blur(0);
  filter: blur(0);
}

.l-attop {
  z-index: 1;
  -webkit-filter: blur(0);
  filter: blur(0);
}

.l-atbottom {
  z-index: 0;
  -webkit-filter: blur(1px);
  filter: blur(1px);
  opacity: 0.6;
}

#signup,
#login {
  // transition: 0.5s cubic-bezier(0.64, 0.35, 0.58, 1);
}

#login {
  // transform: translateX(-160px);
}
</style>
