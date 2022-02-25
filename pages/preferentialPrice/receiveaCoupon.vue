<template>
	<view class="couponTotalContainer">
	 <view class="couponContainer" v-for="(item,index) in myCoupon" :key="item.id">
		 <view class="totalContainer flex">
		 <view class="moneyContainer Color">
			 <view class="money textCenter">
				 <text class="rmb">¥</text>
				 <text class="sum">{{item.used_amount}}</text>
			 </view>
			 <view class="useTerm">满{{item.amount}}-{{item.used_amount}}</view>
		 </view>
		 <view class="couponInfo Color">
			 <view class="title">{{item.title}}</view>
			 <view class="indate">有效期至{{item.end_time}}</view>
		 </view>
		 <button type="default" class="receive" @click="coupon(item.id)" v-if="item.status !== 0">领取</button>
		 </view>
		 <!-- <view class="iconfont  icon-yiguoqi  pastDue"></view> -->
		 <image src="../../static/image/used.png" class="pastDue" mode="" v-if="item.status == 0"></image>
	 </view>	
	 </view>
	
</template>
<script>
	import {couponsAvailableForCollection} from "../../api/couponsAvailableForCollection";
	import {receiveCoupon} from "../../api/receiveCoupon";
	export default({
		data(){
			return  {
				
				myCoupon:[]
			}
		},

		methods:{
			async coupon(id){
				let result = await receiveCoupon(id)
				console.log(result)
			},
			async getCoupon(){
				let result = await couponsAvailableForCollection()
				result.data.coupon.map(res=>{
					res.end_time = res.end_time.split(" ")[0]
				})
				this.myCoupon = result.data.coupon
				console.log(this.myCoupon)
			},
		},
		onLoad() {
			this.getCoupon()
		}
	})
</script>

<style lang="scss" scoped>
	.receive{
		background-color:#2a2e3d;
		margin-left: 150rpx;
		color: #ffdebd;
	}
	.flex{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.Color{
		color: #ffdfbe;
	}
	.textCenter{
		text-align: center;
	}
	.couponTotalContainer{
		position: relative;
	.couponContainer{
		width: 94%;
		height: 200rpx;
		background-color: #2b2e3d;
		border-radius: 20rpx;
		margin: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.moneyContainer{
				margin-left:30rpx;
			.money{
				.sum{
					font-size: 60rpx;
				}
			}
			.useTerm{
				font-size: 20rpx;
			}
		}
		.couponInfo{
			margin-left: 60rpx;
			.title{
				font-size: 36rpx;
			}
			.indate{
				margin-top: 12rpx;
				font-size: 24rpx;
			}
		}
	.pastDue{
		position: absolute;
		top: 0;
		right: 24rpx;
		// font-size: 100rpx;
		width: 100rpx;
		height: 100rpx;
		color: #dd524d;
		transform: rotate(360deg);
	}
	}
	.without{
		
	}
	}
</style>
