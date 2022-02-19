<template>
	<view>
		<view class="zhifu"><view class="text">等待付款</view></view>

		<view class="header">
			<view class="ordde">
				<view class="sit">蒋雪峰 152****8227</view>
				<view>北京市 北京市 东城区 110</view>
			</view>
		</view>
		<view class="ani">
			<view class="check">
				<view class="Img"><image src="http://test.w0824.com/xmnote2.png" style="width: 200rpx; height: 200rpx;" mode=""></image></view>
				<view class="SBle">
					<view class="textte">
						<view class="SBleft">你好呀</view>
						<view ><text class="colors">慧大师大大加快大家看到</text></view>
					</view>
						<view class="pay">
							<view>￥2.00</view>
							<view>x1</view>
						</view>
				</view>
			</view>

			<view class="SNTop">
				<view>配送方式</view>
				<view>快递</view>
			</view>
			<view class="SNTop">
				<view>优惠金额</view>
				<view>0.00</view>
			</view>
			<view class="shiwu time-hide-second">
				<text>实付款：</text>
				<text style="color: red;">￥2.00</text>
			</view>
		</view>

		<view class="tab">
			<view class="dingdan">
				<view class="fex">订单编号</view>
				<view class="nube">121564564564654654156454</view>
				<view class="buttos"@click="copy">复制</view>
			</view>

			<view class="dingdans">
				<view>支付方式</view>
				<view class="time-hide-second">无</view>
			</view>
			<view class="dingdans">
				<view>下单时间</view>
				<view class="time-hide-second">2022-01-22 14：48：00</view>
			</view>
		</view>

		<view class="dingdansm">
			<view class="heji">
				合计：
				<text style="color: red;">￥2.00</text>
			</view>
			<view class="butto">
				<!-- <button type="default" size="mini" @click="open">取消订单</button> -->
				<u-button @click="show = true" size="small" type="info" text="取消订单"></u-button>
				<u-button type="info" size="small" text="去付款"></u-button>
			</view>
		</view>
		<u-popup :show="show" @close="close" @open="open" mode="bottom" :round="20">			
					<view class="u-demo-block">
							<view class="content">取消订单</view>
							<view class="off">取消后无法恢复，优惠券，红包不可退回</view>
							<view class="cause">请选择取消订单原因</view>
							
							<view>
								<view class="u-page__radio-item">
									<u-radio-group
										v-model="radiovalue1"
										:borderBottom="false"
										placement="column"
										iconPlacement="right"
									>
										<u-radio
											:customStyle="{marginBottom: '16px',margin: '20rpx 20rpx', paddingLeft: '15rpx', fontSize: '16px' }"
											v-for="(item, index) in radiolist1"
											:key="index"
											:label="item.name"
											:name="item.name"
											size="20px"
											iconSize="20px"
											labelSize="16px"
											activeColor="black"
											labelColor="#1c1c1c"
										>
										</u-radio>
									</u-radio-group>
								</view>
							</view>
				</u-radio-group>
					
				<view class="butto1">
					<u-button class="but2" text="暂不取消" @click="close"></u-button>
					<u-button class="but3" text="确定取消" color="#2b2e3d" @click="close"></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
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
	
	.heji{
		line-height: 80rpx;
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
	display: flex;
	align-items: center;
	margin: 40rpx 40rpx;
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
	
	margin-top: 15rpx;
	margin-bottom: 15rpx;
	display: flex;
	justify-content: space-between;
}
.time-hide-second {
	margin-right: 20rpx;
}
.dingdansm {
	padding-left: 20rpx;
	height: 90rpx;
	margin-top: 100rpx;
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	    position: absolute;
	    bottom: 0;
		width: 100%;
}
.dingdans {
	display: flex;
	justify-content: space-between;
	margin-top: 50rpx;
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
	font-size: 24rpx;
}
.fex {
	flex: 1;
	font-size: 24rpx;
}
.tab {
	margin-left: 20rpx;
	margin-top: 20rpx;
	background-color: #ffffff;
	height: 300rpx;
	margin: 20rpx 20rpx;
	padding: 15rpx 15rpx;
	border-radius: 25rpx;
	font-size: 24rpx;
}
.ani {
	background-color: #ffffff;
	height: 400rpx;
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
	font-size: 24rpx;
}
.SNTop {
	display: flex;
	justify-content: space-between;
	margin: 20rpx 15rpx;
	color: #c8c8c8;
	font-size: 16rpx;
}


.SBle {
	margin-left: 20rpx;
	width: 100%;
	font-size: 24rpx;
	/* border: 2px solid red; */
	/* position: absolute; */
}
.colors {
	margin-left: 10rpx;
	border: 1px solid #f7f7f7;
	background-color: #f7f7f7;
	font-size: 12px;
	}

.textte{
	width: 100%;
	height: 160rpx;
}
 .pay {
	margin-left: 1rpx;
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
	height: 100rpx;
	margin: 20rpx 20rpx;
	padding: 15rpx 15rpx;
	border-radius: 25rpx;
	font-size: 24rpx;
}
.ordde {
	// height: 150rpx;
	// line-height: 70rpx;
	color: #444444;
}
.zhifu {
	background-color: #2b2e3d;
	color: #a7a8ae;
	width: 100%;
	height: 75rpx;
}
.text {
	margin-left: 20rpx;
}

::v-deep .uni-page-head .uni-page-head__title {
	color: #a7a8ae;
}
::v-deep .uni-page-wrapper {
	color: #f7775e;
}
</style>
