<template>
	<view class="detailContainer">
		<!-- <view class="zhifu"><view class="text">等待付款</view></view> -->
		<view class="logisticsContainer" @click="open" v-if="expressMessage.length">
			<view class="iconfont icon-wuliu truck"></view>
			<view class="logisticsInfo">
				<view class="info text-ellipsisl1">{{newInfo}}</view>
				<view class="time">{{newInfoTime}}</view>
			</view>
			<view class="iconfont icon-qianjin advance"></view>
		</view>
		<view class="header">
			<view class="ordde">
				<view class="sit">{{OrderInfo.consignee}}{{OrderInfo.mobile}}</view>
				<view>{{OrderInfo.address}}</view>
			</view>
		</view>
		<block v-for="(item,index) in orderItemlist" :key="item.id">
		<view class="ani">
			<view class="check">
				<view class="Img"><image :src="item.productImage" style="width: 200rpx; height: 200rpx;" mode=""></image></view>
				<view class="SBle">
					<view class="textte">
						<view class="SBleft">{{item.productName}}</view>
						<view ><text class="colors">{{item.producspec}}</text></view>
					</view>
						<view class="pay">
							<view>￥{{item.currentUnitPrice}}</view>
							<view>x{{item.quantity}}</view>
						</view>
				</view>
			</view>

			<view class="SNTop">
				<view>配送方式</view>
				<view>快递</view>
			</view>
			<view class="SNTop">
				<view>优惠金额</view>
				<view style="color:#f35a1d;">{{OrderInfo.coupon_amount}}</view>
			</view>
			<view class="shiwu time-hide-second">
				<text>实付款：</text>
				<text style="color: red;">￥{{OrderInfo.actualPrice}}</text>
			</view>
		</view>

		<view class="tab">
			<view class="dingdan">
				<view class="fex">订单编号</view>
				<view class="nube">{{item.orderSn}}</view>
				<view class="buttos"@click="copy">复制</view>
			</view>

			<view class="dingdans">
				<view>支付方式</view>
				<view class="time-hide-second">微信支付</view>
			</view>
			<view class="dingdans">
				<view>下单时间</view>
				<view class="time-hide-second">{{item.createTime}}</view>
			</view>
		</view>

		<view class="dingdansm">
			<view class="heji">
				合计：
				<text style="color: red;">￥{{OrderInfo.actualPrice}}</text>
			</view>
			<view class="butto">
				<!-- <button type="default" size="mini" @click="open">取消订单</button> -->
				<!-- <u-button @click="show = true" size="small" type="info" text="取消订单"></u-button>
				<u-button type="info" size="small" text="去付款"></u-button> -->
				<block v-if="OrderInfo.status === 0">
				<u-button class="cancel" @click="cancelOrder" size="small" type="info" text="取消订单"></u-button>
				<u-button shape="circle"  @click="obligationOrder" color="#2b2e3d" size="small" type="info" class="obligation" text="待付款"></u-button>
				</block>
				<u-button shape="circle" v-if="OrderInfo.status === 1" @click="toSendGoodsOrder" color="#2b2e3d" class="toSendGoods" text="待发货"></u-button>
				<u-button shape="circle" v-if="OrderInfo.status === 2" @click="shippedOrder" color="#2b2e3d" class="shipped" text="已发货"></u-button>
				<block v-if="OrderInfo.status === 3">
				<u-button shape="circle"  @click="deleteOrder" color="#2b2e3d" class="delete" text="删除订单"></u-button>
				<u-button shape="circle"  @click="doneOrder" color="#2b2e3d" class="done" text="已完成"></u-button>
				</block>
				<u-button shape="circle" v-if="OrderInfo.status === 4" @click="closeOrder" color="#2b2e3d" class="close" text="已关闭"></u-button>
				<u-button shape="circle" v-if="OrderInfo.status === 5" @click="invalidOrder" color="#2b2e3d" class="invalid" text="无效订单"></u-button>
			</view>
		</view>
		</block>
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
		<!-- 弹出物流信息 -->
		<uni-popup ref="popup" type="bottom" background-color="#ffffff" class="popup" >
			<scroll-view scroll-y="true" style="height: 60vh;" >
			<view class="info">
			<u-steps current="9" direction="column">
					<u-steps-item v-for="item in expressMessage" :key="item.AcceptTime" :title="item.AcceptStation" :desc="item.AcceptTime">
					</u-steps-item>
			</u-steps>
		</view>
		</scroll-view>
		<view class="close" @click="close">X</view>
		</uni-popup>
	</view>
</template>

<script>
const {  fetchOrderDetail } = require('../../api/orderDetail.js')
	const {
		fetchCancelOrder,fetchDeleteOrder,fetchPayAgain
	} = require('../../api/order.js')
export default {
	data() {
		return {
			orderSn:"",  // 订单号 
			show: false,
			OrderInfo:{}, // 详情地址数据
			expressMessage:[], // 物流信息
			orderItemlist:[],  // 详情数据
			newInfo:"",  //  最新物流信息
			newInfoTime:"",  //  最新物流时间
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
		// 弹出物流
		open() {
			this.$refs.popup.open()
		},
		// 关闭物流
		close() {
			this.show = false;
			this.$refs.popup.close()
			// console.log('close');
		},
		// 取消订单
		async cancelOrder(){
			let {code} = await fetchCancelOrder(this.orderSn);
			if(code === 1000){
				uni.navigateTo({
					url:"../orderList/orderList"
				})
				uni.showToast({
					title:"取消成功"
				})
			}
		},
		// 删除订单
		async deleteOrder(){
			let {code} = await fetchDeleteOrder(this.orderSn);
			if(code === 1000){
				uni.navigateTo({
					url:"../orderList/orderList"
				})
				uni.showToast({
					title:"删除成功"
				})
			}
		},
		groupChange(n) {
			// console.log('groupChange', n);
		},
		radioChange(n) {
			// console.log('radioChange', n);
		}
	},
	async onLoad(option){
		this.orderSn = option.orderSn 
		console.log(this.orderSn)
		let { data } = await fetchOrderDetail(this.orderSn)
		this.OrderInfo = data.OrderInfo
		this.orderItemlist = data.OrderInfo.orderItemlist
		this.expressMessage = data.express_message
		console.log(this.OrderInfo,'132',this.expressMessage,this.orderItemlist)
		this.newInfo = this.expressMessage.length ?  this.expressMessage[this.expressMessage.length - 1].AcceptStation :""
		this.newInfoTime = this.expressMessage.length ?  this.expressMessage[this.expressMessage.length - 1].AcceptTime  : ""
	}
};
</script>

<style lang="scss">
	  /* 单行显示省略号 */
	        .text-ellipsisl1{
	              /*1.先强制一行内显示文本*/
	             white-space: nowrap;
	            /*2.超出的部分隐藏*/
	           overflow: hidden;
	         /*3.文字用省略号替代超出的部分*/
	         text-overflow: ellipsis;
	        }
	.detailContainer{
		.logisticsContainer{
			margin: 10px 10px;
			padding: 0  20rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			height: 160rpx;
			.truck{
				color: #4baa41;
				font-size: 50rpx;
			}
			.logisticsInfo{
				margin: 0 20rpx;
				.info{
					width: 500rpx;
					color: #4baa41;
					font-size: 30rpx;
				}
				.time{
					color: #C0C0C0;
					margin-top: 10rpx;
					font-size: 26rpx;
				}
			}
			.advance{
				margin-left: 40rpx;
			}
		}
	  ::v-deep	.uni-popup__wrapper{
			border-radius: 20rpx;
			// height: 60vh;
			overflow-y: auto; 
			
		}
		.popup{
			position: relative;			
			.info{
				width: 80vw;
				padding: 0 10px;
			}
			.close{
				    position: absolute;
				    top: 10rpx;
				    right: 20rpx;
				    width: 50rpx;
				    height: 50rpx;
					border-radius: 50%;
					border: 2rpx solid #C0C0C0;
					text-align: center;
					color:#f3591d ;
			}
		}
	}
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
	height: 120rpx;
	margin-top: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	font-size: 22rpx;
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
