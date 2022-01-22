<template>
<view class="couponTotalContainer">
 <view class="couponContainer">
	 <view class="totalContainer flex">
	 <view class="moneyContainer Color">
		 <view class="money textCenter">
			 <text class="rmb">¥</text>
			 <text class="sum">1</text>
		 </view>
		 <view class="useTerm">满10.00可用</view>
	 </view>
	 <view class="couponInfo Color">
		 <view class="title">新人大礼包</view>
		 <view class="indate">有效期至2021-09-15</view>
	 </view>
	 </view>
	 <view class="iconfont  icon-yiguoqi  pastDue"></view>
 </view>	
 <view class="without textCenter">没有更多了</view>
 </view>
</template>

<script>
</script>

<style lang="scss">
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
		border: 1px solid red;
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
		font-size: 100rpx;
		color: #dd524d;
		transform: rotate(348deg);
	}
	}
	.without{
		
	}
	}
</style>
