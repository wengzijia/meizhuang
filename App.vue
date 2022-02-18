<script>
		import {autologin,newlogin,phoneNumber} from "./api/login.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef MP-WEIXIN
						let _this = this;
						

						
						wx.login({
							async success(res){
								// 在真机里,res会多出来一个clientInfo属性,会影响到登录,用delete删除该属性
								delete res.clientInfo	
								if(res.code){
									// 登录获取token
									autologin(res,true)
									
									// 证明是第一次登录			
								// 	if(result.userInfo.nickname == null){
								// 	wx.getSetting({
								// 		success(e){
								// 			console.log(e.authSetting.scope.userInfo)
								// 			if(!e.authSetting.scope.userInfo){
								// 		}
								// 	})
								
								// 	}else{
								// 		// Toast("不是第一次登录")
								// 		wx.setStorageSync("token",result.token)
								// 		wx.setStorageSync("userInfo",result.userInfo)
								// 	}
									
								}
								
							},
							fail() {
								// uni.navigateTo({
								//     url: './pages/login/login'
								// });
							}
							
							
							
						})
						// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">

	/*每个页面公共css */
	/* 引入vant组件里的css样式,不然vant组件样式会失效 */
 /* #ifdef H5 */
@import 'vant/lib/index.css';
 /* #endif */

	@import "./static/iconfont.css";
	@import "@/uni_modules/uview-ui/index.scss";


</style>
