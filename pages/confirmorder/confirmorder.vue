<template>
	<view>
		<view class="header" @click="jumpAddress">
			<view class="addressBox" v-if="!nullAddress.length">
				<text class="address">你还没有地址哦,请添加地址</text>
				<text class="rightArrow">></text>
			</view>
			<view class="addressContainer" v-if="nullAddress.length">
			
			<view class="ordde" v-for="item in nullAddress" :key="item.id">
				<view class="sit">{{item.name}} {{item.mobile}}</view>
				<view class="site"><text class="default" v-if="isDefault">默认</text>{{item.city}}{{item.province}}{{item.area}}{{item.address}}</view>
			</view>
			<view class="rArrow">></view>
			</view>
		</view>
		<view class="ani" v-for="item in orderItemlist" :key="item._id">
			<view class="check">
				<view class="Img"><image :src="item.image" style="width: 200rpx; height: 200rpx;" mode=""></image></view>
				<view class="SBle">
					<view class="SBleft">{{item.title}}</view>
					<text class="colors">{{item.sku_name_arr[0]}}</text>
					<view class="pay">
						<text>￥{{item.price}}</text>
						<text>x{{item.quantity}}</text>
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
                     placeholder="选填,请先和商家协商一致"
                     border="surround"
                     v-model="message">
					 </u--input>
					</view>
			<view class="shiwu time-hide-second">
				<text>实付款：</text>
				<text style="color: red;">￥{{order.actualPrice - usedAmount}}</text>
			</view>
		</view>


		<view class="dingdansm">
			<view class="heji">
				合计：
				<text style="color: red;">￥{{order.actualPrice  - usedAmount}}</text>
			</view>
			<view class="butto" @click="submitOrder">
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
			<navigator open-type="navigate" url="../preferentialPrice/preferential">
			<view class="dingdans">
				<view>优惠券</view>
					<view class="time-hide-second" >
						已使用¥{{usedAmount}}
					<u-icon name="arrow-right"></u-icon>				
					</view>
			</view>
			</navigator>
		</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
const { fetchcreateOrder,fetchSubmitOrder,fetchAddress } = require("../../api/order.js")
export default {
	data() {
		return {
			message:"", // 备注信息
			show: false,
			order:"",  // 地址 以及优惠后的价格
			orderItemlist:"",   // sku数据
			totalPrice:"", // 总价格
			reqData:"",  // 请求数据 
			submitOrderData:"",  //  提交订单数据
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
			radiovalue1: '价格有点贵',
			token:"",  // 用户凭证
			nullAddress:"", // 空地址
			isDefault:false ,// 是否显示默认
			id:"",  // 地址id
			coupon:""  ,// 优惠券
			usedAmount:""  ,// 优惠券金额
			couponId:""  // 优惠券ID
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
		},
		// 跳转地址
		jumpAddress(){
			uni.navigateTo({
				url:"../address/addressList?select=true"
			})
		},
	    async submitOrder(){
			this.reqData = {
				...this.reqData,
				address_id:this.id,
				coupon_id:this.couponId ? this.couponId : 0
			}
			// #ifdef H5
			this.submitOrderData = {
				...this.reqData,
				message:this.message,
				trade_type:"MWEB"
			}
			// #endif
			// #ifdef MP-WEIXIN
			this.submitOrderData = {
				...this.reqData,
				message:this.message
			}
			// #endif
			let {code,data} = await fetchSubmitOrder(this.submitOrderData)
			console.log(data)
			// if(code === 1000){
			// 	uni.navigateTo({
			// 		url:"../orderDetails/orderDetails"
			// 	})
			// }
			if(code === 1000){
				console.log('2234', data.xml)
				
				let {timeStamp,nonce_str,mypackage,paySign,sign_type,trade_type,mweb_url}  = data.xml
				// #ifdef H5
				window.location.href = mweb_url[0]
				console.log(mweb_url)
				// #endif
				// #ifdef MP-WEIXIN
				uni.requestPayment({
					nonceStr:nonce_str,
					package:mypackage,
					signType:sign_type,
					paySign:paySign,
					timeStamp:timeStamp,
					// 成功触发
					success(res){
						console.log(res)
					},
					// 失败触发
					fail(res){
						
					},
					// 成功 失败都会触发
					complete(res){
						uni.navigateTo({
							url:"../orderList/orderList"
						})
					}
				})
				// #endif
			}
			
		}
	},
  async	onShow() {
		console.log('11')
		this.token = uni.getStorageSync('token');
		let {code,data} = await fetchAddress(this.token);
		console.log(data)
		this.id  = uni.getStorageSync('id')
		this.nullAddress = data.filter(item=>{
			return item.id == this.id
		})
		this.isDefault = this.nullAddress[0].isDefault
		console.log('123321',this.nullAddress)
		
		// 优惠券
		this.coupon = uni.getStorageSync('coupon');
		if(this.totalPrice >= this.coupon.amount){
			this.usedAmount = this.coupon.usedAmount
			this.couponId = this.coupon.couponId
		}else{
			this.usedAmount = 0
		}
		console.log(this.coupon)
	},
	async onLoad(option) {
		this.reqData = JSON.parse(decodeURIComponent(option.createOrderData)); // 请求数据
		this.reqData = {
			...this.reqData,
			address_id:0,
			coupon_id:0
		}
		let {orderItemlist,order} = await fetchcreateOrder(this.reqData);
		uni.setStorageSync('orderItemlist',orderItemlist)
		uni.setStorageSync('order',order)
		orderItemlist = uni.getStorageSync('orderItemlist')
		order = uni.getStorageSync('order')
		orderItemlist.forEach(item=>{
			this.totalPrice = item.totalPrice
		})
		this.order= order;
		this.orderItemlist = orderItemlist;
		
		console.log('3423',order,orderItemlist)
		// let id = this.nullAddress[0].id;
		// console.log(id)
		
	}
};
</script>

<style lang="scss">
	.header{
		margin-top: 20rpx;
		color: #000000;
		background-color: #ffffff;
		padding-left: 25rpx;
		height: 150rpx;
		margin: 20rpx 20rpx;
		border-radius: 25rpx;
		padding-left: 30rpx;
		padding-top: 20rpx;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		.addressBox{
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.address{
				padding-left: 20rpx;
			}
			.rightArrow{
				padding-right: 40rpx;
			}
		}
		.addressContainer{
			display: flex;
			width: 90vw;
			justify-content: space-between;
			align-items: center;
			.ordde {
				height: 150rpx;
				line-height: 52rpx;
				color: #444444;
				.sit{}
				.site{
					display: flex;
					align-items: center;
					.default{
						background-color:#2b2e3d; 
						color: #FFFFFF; 
						border-radius: 25rpx; 
						font-size: 24rpx;
						margin-right: 10rpx;
						width: 120rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
					}
				}
			}
			.rArrow{
				padding-right: 40rpx;
			}
		}
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


::v-deep .uni-page-head .uni-page-head__title {
	color: #a7a8ae;
}
::v-deep .uni-page-wrapper {
	color: #f7775e;
}
</style>
