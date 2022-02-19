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
		 <button type="default" class="receive">领取</button>
		 </view>
		 <view class="iconfont  icon-yiguoqi  pastDue"></view>
	 </view>	
	 </view>
	
</template>
<script>
	import {couponsAvailableForCollection} from "../../api/couponsAvailableForCollection";
	export default({
		data(){
			return  {
				myCoupon:[]
			}
		},

		methods:{
			async getCoupon(token){
				let result = await couponsAvailableForCollection(token)
				result.data.coupon.map(res=>{
					res.end_time = res.end_time.split(" ")[0]
				})
				this.myCoupon = result.data.coupon
				console.log(this.myCoupon)
			},
		},
		onLoad() {
			let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsImNyZWF0ZVRpbWUiOiIyMDIyLTAyLTE2IDE3OjI3OjE1IiwidXBkYXRlVGltZSI6IjIwMjItMDItMTYgMTc6Mjc6MzIiLCJ1c2VybmFtZSI6bnVsbCwicGFzc3dvcmQiOm51bGwsImdlbmRlciI6MCwibGFzdExvZ2luVGltZSI6bnVsbCwibGFzdExvZ2luSXAiOm51bGwsInVzZXJMZXZlbCI6MCwibmlja25hbWUiOiJuaWNlIiwibW9iaWxlIjpudWxsLCJhdmF0YXIiOiJodHRwczovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0RZQUlPZ3E4M2VwMEFwR0praFhzaWNrRnl6R1lBem9haDNZelp1QjRhdFdRZ0dLNVl4T1ltV0N3aWNFVFVDM2NRQzZDMEN6MDFIZlhleHFLQmZIQ095NFEvMTMyIiwic2Vzc2lvbl9rZXkiOm51bGwsInNoYXJlVXNlcklkIjoiMSIsIndlaXhpbk9wZW5pZCI6Im8wMXIwNVBQc2QzcG5yaUlwVkxMcUdkaGxidVUiLCJjbG91ZElEIjoiNTRfMkdud1BOTDZNS2Y1Nk5zMWxubkpkSHR1dWJPLVF4OVR0NHlqaXB4S3NLeVVsQjVyX1JQeUFZWk1FV3MiLCJlbmNyeXB0ZWREYXRhIjoiZ3RSNWozdkZsSGc3elRwZ0lNaWxrd1JJU0ZUQmd5VEp4Y3lmNEJvTzVDUzk0cFY0VHgrVGtheldiVlZQVDVTSW44TXdlSWdIV2RhZDZHZUR3czF6TFB6dzNJK0RvNHBPS3h5NVZMM1hPQWpqekJMRUpURzFCZllNS0ZCcDBVdEMwY3ZuZ2RpWmZLdmkrdVJQczkrVG05c01oVk9GV3BoWFBxc1RsVlB4MVB3SUh6YzQ1THNrSEU2djJ3MVdmSEo3U0dqeVNqRTJkRUovRUdKcHdwbVZTRXJ3MXA0ZStwWGdDY1hqRDlwRVVMcDE2YjVHS0NpL1lEVEx4UUZxQy9mOFhxTHJES3ZUZlpGU1p5K2VqQTJ6aFphamRHOUNhellLcW9ET1V6OEdCQ3FyQkJDSFE4Qmg1TjVLVVNrTE1Ob1dwV3JHc1dOa2k5dVBQVjRDUk1PM253LytnamVwdzdjWlJscUVCSU9uQXBwUDBEbk1LbHdKVUpGOWpLc0pOcUYrVEpaSXFJQ2hBWDk2WXFFdnBEM09nQT09IiwiaXYiOiJtVHVuMC9RVGRiTWZuOGxMU2lQSUt3PT0iLCJzaWduYXR1cmUiOiJkNTMzOTc2ZGZjNGFjZTk2MDY0NDMxM2ZkNzllYzBlYmI2ZmQwYmMwIiwic3RhdHVzIjoiMCIsImRlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NDUwMTA0MDIsImV4cCI6MTY0NTA5NjgwMn0.rNcfiBBhBHJHyKMHXMDXa4toEHrKmegsqwtsBn--sSo";
			this.getCoupon(token)
			console.log(this.myCoupon)
		}
	})
</script>

<style lang="scss" scoped>
	.receive{
		background-color:#2a2e3d;
		margin-left: 100rpx;
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
		font-size: 100rpx;
		color: #dd524d;
		transform: rotate(348deg);
	}
	}s
	.without{
		
	}
	}
</style>
