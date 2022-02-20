<template>
	<view class="bg-set">
		<view class="mySetting">
		<view class="all">
			<view>
				<view class="personalInformation">
					<image src="https://img1.baidu.com/it/u=1867546281,4113590339&fm=26&fmt=auto" class="avtatr">
					</image>
					<view class="user">
						<p class="name">田德莉娜</p>
						<p class="cellphone">手机号:未填写</p>
					</view>
					<view class="allOther">
						<view class="myCommission">
							<view class="userMangement">
								<view class="userBalance">
									用户余额
								</view>
								<view class="balance">
									0.00 <text class="unit">元</text>
								</view>
								<view class="myBalance">
									<text class="arrive">今日已到账:0.00元</text>
									<text class="toBeAudited">待审核金额:0.00元</text>
								</view>
							</view>
							<button type="default" class="withdraw">提现</button>
						</view>

					</view>
					<uni-list class="allOrder">
						<uni-list-item title="我的订单" link rightText="查看全部订单" class="label"></uni-list-item>
						<view class="myOrder">
							<uni-grid :column="5" :showBorder="false" :square="false" class="allTransport">
								<uni-grid-item class="transport">
									<uni-icons custom-prefix="iconfont" type="iconfont icon-daifukuan" size="25">
									</uni-icons>
									<text class="text">待付款</text>
								</uni-grid-item>
								<uni-grid-item class="transport">
									<uni-icons custom-prefix="iconfont" type="iconfont icon-daifahuo1" size="25">
									</uni-icons>
									<text class="text">待发货</text>
								</uni-grid-item>
								<uni-grid-item class="transport">
									<uni-icons custom-prefix="iconfont" type="iconfont icon-daishouhuo1" size="25">
									</uni-icons>
									<text class="text">待收货</text>
								</uni-grid-item>
								<uni-grid-item class="transport">
									<uni-icons custom-prefix="iconfont" type="iconfont icon-pingjia1" size="25">
									</uni-icons>
									<text class="text">评价</text>
								</uni-grid-item>
								<uni-grid-item class="transport">
									<uni-icons custom-prefix="iconfont" type="iconfont icon-tuikuan" size="25">
									</uni-icons>
									<text class="text refund">退货</text>
								</uni-grid-item>
							</uni-grid>
						</view>
					</uni-list>
					<view class="userPromte">
						<uni-icons custom-prefix="iconfont" type="iconfont icon-tuiguangxinxi" size="50"
							class="promteIcon">
						</uni-icons>
						<view class="myPromte">
							<veiw class="promote">推广转发</veiw>
							<view class="repost">转发好友/赚取佣金</view>
						</view>
						<view class="share">分享</view>
					</view>
					<view class="mySetting">
						<view>
							<view class="other">
								<uni-icons custom-prefix="iconfont" type="iconfont icon-youhuiquan" size="20"
									class="otherIcon"></uni-icons>
								<text>我的优惠券</text>
							</view>
							<view class="other">
								<uni-icons custom-prefix="iconfont" type="iconfont icon-kefu" size="20"
									class="otherIcon">
								</uni-icons>
								<text>在线客服</text>
							</view>
							<view class="other">
								<uni-icons custom-prefix="iconfont" type="iconfont icon-shouhuodizhi" size="20"
									class="otherIcon"></uni-icons>
								<text>收货地址</text>
							</view>
						</view>
					</view>
					<button type="default" class="signOut">退出当前账号</button>
			</view>
			</view>
		</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			// 跳转到搜索页面
			goSearch() {
				uni.navigateTo({
					url: "../orderpage/orderpage"
				})
			},
		}
	}
	
</script>
<style lang="scss">
	@import "../../static/Rose-iconfont.css";

	.avtatr {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.allOther {
		margin: 0 20rpx;
	}

	.promote {
		color: #FFB800;
		font-weight: 600;
	}

	.repost {
		font-size: 25rpx;
		margin-top: 20rpx;
		font-weight: 350;
	}

	.promteIcon {
		margin-left: 30rpx;
	}

	.share {
		border: 1px solid #3F536E;
		color: #3F536E;
		text-align: center;
		line-height: 60rpx;
		border-radius: 30rpx;
		margin-left: 160rpx;
		display: inline-block;
		width: 150rpx;
		height: 60rpx;
	}

	.userPromte {
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		border: 1px solid #FFFFFF;
		border-radius: 30rpx;
		margin: 50rpx 0;
		height: 170rpx;
	}

	.myPromte {
		display: inline-block;
		margin-left: 30rpx;
	}

	.otherIcon {
		margin: 0 20rpx;
	}

	.other {
		width: 100%;
		height: 100%;
		line-height: 100rpx;
		background-color: #FFFFFF;
	}

	.slash {
		float: right;
	}




	/* #ifdef H5 */
	.transport {
		margin: 0;

	}

	.otherIcon {
		margin: 0 20rpx;

	}

	.other {
		width: 700rpx;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FFFFFF;
	}

	.slash {
		float: right;
	}

	.text {
		margin: 10px 0;
		text-align: center;
		font-size: 10px;
		font-weight: 300;

	}

	page {
		background-color: #EEEEEE
	}
	.myCommission {
		background-color: #ff86aa;
		width: 98%;
		height: 330rpx;
		color: #FFFFFF;
		margin: 10rpx auto;
		margin-bottom: 50rpx;
		border: 1px solid #ff7fa4;
		border-radius: 20rpx;
	}

	.mySetting {
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		border: 1rpx solid #EEEEEE;
		border-radius: 25rpx;
		overflow: hidden;
	}

	/* #endif */
	.otherIcon {
		margin: 0 20rpx;

	}

	.other {
		width: 100%;
		height: 100%;
		line-height: 100rpx;
		background-color: #FFFFFF;
	}

	/* #ifdef MP-WEIXIN */
	.myCommission {
		background-color: #ff86aa;
		width: 98%;
		height: 330rpx;
		color: #FFFFFF;
		margin: 10rpx auto;
		border: 1px solid #ff7fa4;
		border-radius: 20rpx;
	}

	.mySetting {
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		border: 1rpx solid #FFFFFF;
		border-radius: 25rpx;
		overflow: hidden;
	}

	.uni-list.data-v-5009d455 {
		height: 268rpx;
		border: 1px solid #EEEEEE;
		border-radius: 20rpx;
		margin-top: 30rpx;
	}

	.bg-set {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		background-color: #EEEEEE;
		z-index: -1;
	}

	.transport {

		margin-left: 10rpx;
		margin-right: 57rpx;
		text-align: center;

	}

	.text {
		margin: 10px 0;
		font-size: 10px;
		font-weight: 300;
		text-align: center;

	}

	/* #endif */

	.signOut {
		height: 100rpx !important;
		margin-top: 30rpx;
		line-height: 100rpx;
		border: 1rpx solid #EEEEEE;
		border-radius: 25rpx;
	}

	.uni-list[data-v-5009d455] {
		border: 1rpx solid #FFFFFF;
		border-radius: 25rpx;
		overflow: hidden;
	}

	.allOrder {
		height: 268rpx;
		width: 100%;
		margin: 50rpx auto;
		margin-top: 50rpx;
	}

	.personalInformation {
		background: url(../../static/image/user.jpg) no-repeat;
		background-size: 414px;
		// padding-top: 50rpx;
	}

	.uni-list-item[data-v-296a3d7e] {
		border: 1rpx solid #FFFFFF;
		border-radius: 25rpx;
	}

	.label {
		border: 1rpx solid #FFFFFF;
		border-radius: 20rpx;
		// overflow: hidden;
		height: 100rpx;
		padding: 0;
	}

	.all {
		// margin: 0 20rpx;
	}

	.signOut {
		color: #FF5A5F !important;
	}

	.myOrder {
		background-color: #FFFFFF;
		height: 200rpx;
		display: flex;
		margin: 0 20rpx;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}



	.user {
		vertical-align: top;
		display: inline-block;
	}

	.name {
		font-size: 40rpx;
		margin: 30rpx;
	}

	.cellphone {
		color: #666;
		font-size: 30rpx;
		margin: 30rpx;
	}

	.userMangement {
		width: 75%;
		height: 100%;
		display: inline-block;
	}

	.toBeAudited {
		margin-left: 32rpx;
	}

	.withdraw {
		width: 22%;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #f8f8f8;
		color: #FFB800;
		margin-bottom: 68rpx;
		font-size: 30rpx;
		display: inline-block;
		border: 1px solid #F8F8F8f8;
		border-radius: 40rpx;
	}

	.userBalance {
		margin: 35rpx 40rpx;
	}

	.balance {
		margin: 35rpx 40rpx;
		font-size: 80rpx;
	}

	.myBalance {
		margin: 35rpx 40rpx;
		font-size: 25rpx;
	}

	.name {
		font-size: 40rpx;
		margin: 30rpx;
	}

	.cellphone {
		color: #666;
		font-size: 30rpx;
		margin: 30rpx;
	}

	image {
		height: 150rpx;
		width: 150rpx;
		border: 1rpx solid #FFFFFF;
		border-radius: 50%;
	}

	.user {
		vertical-align: top;
		display: inline-block;
	}


	.unit {
		font-size: 40rpx;
		margin-left: 20rpx;
	}
</style>
