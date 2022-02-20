<template>
	<view>
		<view class="header">
			<view class="ordde">
				<view class="sit">蒋雪峰 152****8227</view>
				<view class="site"><view class="default">默认</view>  北京市 北京市 东城区 110</view>
			</view>
			<view class="jiantou">
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="ani">
			<view class="check">
				<view class="Img"><image src="http://test.w0824.com/xmnote2.png" style="width: 200rpx; height: 200rpx;" mode=""></image></view>
				<view class="SBle">
					<view class="SBleft">你好呀</view>
					<text class="colors">天空蓝</text>
					<view class="pay">
						<text>￥2.00</text>
						<text>x1</text>
					</view>
				</view>
			</view>

			<view class="SNTop">
				<view>配送方式</view>
				<view>快递</view>
			</view>
				<view class="SNTop1">
					<text class="contents">备注</text>  
					 <u--input
                     placeholder="请输入内容"
                     border="surround"
                     v-model="value">
					 </u--input>
					</view>
			<view class="shiwu time-hide-second">
				<text>实付款：</text>
				<text style="color: red;">￥2.00</text>
			</view>
		</view>


		<view class="dingdansm">
			<view class="heji">
				合计：
				<text style="color: red;">￥2.00</text>
			</view>
			<view class="butto">
				<u-button  size="primary" type="info" text="提交订单"color="#2b2e3d"></u-button>
			</view>
		</view>
		<view class="tab">
			
			<view class="dingdans">
				<view>支付方式</view>
				<view class="time-hide-second">
					微信 
				<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="dingdans">
				<view>优惠券</view>
				
					<view class="time-hide-second" >
						未使用
					<u-icon name="arrow-right"></u-icon>				
					</view>
					
			</view>
		</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value:'选填,请先和商家协商一致',
			show: false,
			radiolist1: [
				{
					name: '价格有点贵',
					disabled: false
				},
				{
					name: '规格/款式/数量拍错',
			       disabled: false
				},
				{
					name: '收货地址拍错',
					disabled: false
				},
				{
					name: '暂时不需要了',
					disabled: false
				},
				{
					name: '其他',
					disabled: 'false'
				}
			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			radiovalue1: '价格有点贵'
		}
	},
	methods: {
		open() {
			// console.log('open');
		},
		close() {
			this.show = false;
			// console.log('close');
		},
		groupChange(n) {
			// console.log('groupChange', n);
		},
		radioChange(n) {
			// console.log('radioChange', n);
		}
	}
};
</script>

<style lang="scss">
	.site{
		display: flex;
		align-items: center;
	}
	.default{
		background-color:#2b2e3d; 
		color: #FFFFFF; 
		border-radius: 25rpx; 
		font-size: 12rpx;
		margin-right: 10rpx;
		width: 100rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
	}
	
	.SNTop1{
		text-align: center;
		line-height: 35px;
		display: flex;
		justify-content:space-between
	}
::v-deep .u-radio-group--row[data-v-97ce24d6] {
	/* #ifdef H5 */
			display: flex;
			flex-direction: column-reverse;
			margin-top: 11rpx;
			margin: 10rpx 10rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			display: inline;
			margin-top: 11rpx;
			margin: 10rpx 10rpx;
			/* #endif */			
}

.cause {
	color: #afafaf;
	padding-left: 40rpx;
	font-size: 28rpx;
}
.off {
	font-size: 28rpx;
	padding-left: 30rpx;
	margin-top: 40rpx;
	background-color: #f7f7f7;
	height: 80rpx;
	line-height: 80rpx;
	margin: 20rpx 20rpx;
	border-radius: 20rpx;
}
.content {
	margin-top: 20rpx;
	text-align: center;
	color: #b4b4b4;
}
.popup {
	height: 750rpx;
}
.buttos {
	border: 1px solid #e5e5e5;
	background-color: #ffffff;
	border-radius: 15rpx;
	height: 65rpx;
	line-height: 65rpx;
	text-align: center;
	width: 100rpx;
	color: #9f9f9f;
}

.butto {
	// margin-top: 70rpx;
	margin: 10rpx 50rpx;
	width: 200rpx;
	
}
.but2{
	/* #ifdef H5 */
			width: 350rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			width: 400rpx;
			margin-left: 10rpx;
			/* #endif */
}
.but3{
	margin-left: 10rpx;
	width: 350rpx;
}

.butto1 {
	    
	bottom: 50rpx;
	margin-top: 15rpx;
	margin-bottom: 15rpx;
	display: flex;
	justify-content: space-between;
}
.time-hide-second {
	margin-right: 20rpx;
	display: flex;
	
}
.heji{
	margin-left: 50rpx;
}
.dingdansm {
	height: 108rpx;
	line-height: 108rpx;
	margin-top: 100rpx;
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
}
.dingdans {
	display: flex;
	justify-content: space-between;
	margin-top: 40rpx;
}
.dingdan {
	padding-top: 20rpx;
	display: flex;
	justify-content: space-between;
	height: 31px;
	line-height: 31px;
}
.nube {
	margin-right: 10rpx;
	font-size: 14px;
}
.fex {
	flex: 1;
	font-size: 14px;
}
.tab {
	margin-left: 20rpx;
	margin-top: 20rpx;
	background-color: #ffffff;
	margin: 20rpx 20rpx;
	padding: 15rpx 15rpx;
	border-radius: 25rpx;
	font-size: 14px;
}
.ani {
	background-color: #ffffff;
	margin: 20rpx 20rpx;
	padding: 15rpx 15rpx;
	border-radius: 25rpx;
}
page {
	background-color: #f7f7f7;
	font-family: PingFangSC-Regular;
}
.shiwu {
	display: flex;
	justify-content: flex-end;
}
.SNTop {
	display: flex;
	justify-content: space-between;
	margin: 20rpx 15rpx;
	color: #303030;
	font-size: 16rpx;
}
.colors {
	margin: 0 17rpx;
	margin-left: 10rpx;
	color: #000000;
	border: 1px solid #f7f7f7;
	background-color: #f7f7f7;
	font-size: 12px;
}
.SBle {
	margin-left: 20rpx;
	width: 100%;
}

.pay {
	margin-top: 70rpx;
	margin-left: -15rpx;
	display: flex;
	justify-content: space-between;
	width: 100%;
	color: #444444;
}
.check {
	margin-top: 30rpx;
	display: flex;
}
.Img {
	display: flex;
	margin-left: 20rpx;
}
.SBleft {
	margin-right: 10rpx;
	margin-bottom: 10rpx;
	color: #444444;
}
.header {
	margin-top: 20rpx;
	color: #c8c8c8;
	background-color: #ffffff;
	padding-left: 25rpx;
	height: 150rpx;
	margin: 20rpx 20rpx;
	padding: 15rpx 15rpx;
	border-radius: 25rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.ordde {
	height: 150rpx;
	line-height: 70rpx;
	color: #444444;
}
::v-deep .uni-page-head .uni-page-head__title {
	color: #a7a8ae;
}
::v-deep .uni-page-wrapper {
	color: #f7775e;
}
</style>
