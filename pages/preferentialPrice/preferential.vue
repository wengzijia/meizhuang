<template>
	<view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
			activeColor="red"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view v-if="used.length == 0">
					<view class="thereAreNoCoupons">
						<uni-icons custom-prefix="iconfont" type="iconfont icon-meiyouyouhuiquan" size="200"
							class="otherIcon" color="#ccc"></uni-icons>
						<view class="text">你还没有优惠券</view>
					</view>
					<button type="default" class="toGetACoupon" @click="goReceiveCoupon()">去领取优惠券</button>
				</view>
				<view class="couponTotalContainer">
					<view class="couponContainer" v-for="(item,index) in used" :key="item.id" @click="selectCoupon(item.amount,item.used_amount)">
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
							<button type="default" class="receive" >使用</button>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view v-if="notUsed.length == 0">
					<view class="thereAreNoCoupons">
						<uni-icons custom-prefix="iconfont" type="iconfont icon-meiyouyouhuiquan" size="200"
							class="otherIcon" color="#ccc"></uni-icons>
						<view class="text">你还没有优惠券</view>
					</view>
				</view>
				<view class="couponTotalContainer">
					<view class="couponContainer" v-for="(item,index) in notUsed" :key="item.id">
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
						</view>
						<image src="../../static/image/received.png" class="pastDue" mode=""></image>
					</view>
				</view>
			</view>
			<view v-show="current === 2">
				<view v-if="hasExpired.length == 0">
					<view class="thereAreNoCoupons">
						<uni-icons custom-prefix="iconfont" type="iconfont icon-meiyouyouhuiquan" size="200"
							class="otherIcon" color="#ccc"></uni-icons>
						<view class="text">你还没有优惠券</view>
					</view>
				</view>
				<view class="couponTotalContainer">
					<view class="couponContainer" v-for="(item,index) in hasExpired" :key="item.id">
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
						</view>
						<image src="../../static/image/invalid.png" class="pastDue" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		viewCoupon
	} from "../../api/viewCoupon";
	export default {
		data() {
			return {
				current: 0,
				items: ["未使用", "已使用", "已失效"],
				coupon: [],
				couponId:""
			}
		},
		computed: {
			used() {
				let arr = []
				this.coupon.map(item => {
					if (item.status == 0) {
						arr.push(item.coupon_id)
						this.couponId = item.id
					}
				})
				return arr
			},
			notUsed() {
				let arr = []
				this.coupon.map(item => {
					if (item.status == 1) {
						// console.log(item)
						arr.push(item.coupon_id)
						console.log(item)
					}
				})
				return arr
			},
			hasExpired() {
				let arr = []
				this.coupon.map(item => {
					if (item.status == 2) {
						// console.log(item)
						arr.push(item.coupon_id)
						console.log(item)
					}
				})
				return arr
			}
		},
		methods: {
			goReceiveCoupon() {
				uni.navigateTo({
					url: "../preferentialPrice/receiveaCoupon"
				})
			},
			async getCoupon() {
				let result = await viewCoupon()
				console.log(result.data)
				if (result.data.length != 0) {
					result.data.map(res => {
						res.coupon_id.end_time = res.coupon_id.end_time.split(" ")[0]
					})
					// console.log(result)
					this.coupon = result.data
					console.log(this.coupon)
				}

			},
			onClickItem(e) {
				let {
					currentIndex
				} = e
				this.current = currentIndex
			},
			selectCoupon(amount,usedAmount){
				uni.setStorageSync('coupon',{amount:amount,usedAmount:usedAmount,couponId:this.couponId})
				uni.navigateBack()
			}
		},
		onLoad() {
			this.getCoupon()
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../static/Rose-iconfont.css";
	.otherIcon {
		font-size: 500rpx;
	}
	.toGetACoupon {
		width: 50%;
		background-color: #FF0000;
		color: #fff;
	}
	.thereAreNoCoupons {
		width: 60%;
		margin: 30rpx auto;
	}
	.text {
		text-align: center;
		margin-top: 30rpx;
		color: #ccc;
	}
	.receive {
		background-color: #2a2e3d;
		margin-left: 150rpx;
		color: #ffdebd;
	}
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.Color {
		color: #ffdfbe;
	}
	.textCenter {
		text-align: center;
	}
	.couponTotalContainer {
		position: relative;
		.couponContainer {
			width: 94%;
			height: 200rpx;
			background-color: #2b2e3d;
			border-radius: 20rpx;
			margin: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.moneyContainer {
				margin-left: 30rpx;
				.money {
					.sum {
						font-size: 60rpx;
					}
				}
				.useTerm {
					font-size: 20rpx;
				}
			}
			.couponInfo {
				margin-left: 60rpx;
				.title {
					font-size: 36rpx;
				}
				.indate {
					margin-top: 12rpx;
					font-size: 24rpx;
				}
			}
			.pastDue {
				position: absolute;
				top: 0;
				right: 24rpx;
				width: 100rpx;
				height: 100rpx;
				color: #dd524d;
				transform: rotate(360deg);
			}
		}
	}
</style>
