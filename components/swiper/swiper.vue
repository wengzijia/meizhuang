<template>
	<view class="swiper-container">
		<swiper class="s-warp" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000"
			previous-margin="30px" next-margin="30px" :circular="true" @change="selectChange">
			<swiper-item class="swiper-item" v-for="(item,index) in dataList" :key="index">
				<image :src="item.url" class="img" :class="selectIndex === index ? 'active' : ''" mode="scaleToFill">
				</image>
			</swiper-item>
		</swiper>
		<view class="active_warp">
			<view class="active_dot" :class="selectIndex === index ? 'bgc_dot' : '' " v-for="(item,index) in dataList"
				:key="index"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				selectIndex: 0
			}
		},
		onReady() {
			console.log(this.dataList);
		},
		methods: {
			selectChange(e) {
				let {
					current
				} = e.detail
				this.selectIndex = current
			}
		},
	}
</script>

<style lang="scss" scoped>
	.swiper-container {
		height: 360rpx;
		margin-top: 10rpx;
		position: relative;

		.s-warp {
			height: 360rpx;

			.swiper-item {
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				padding: 0rpx 4rpx;

				.img {
					height: 94%;
					width: 96%;
					border-radius: 20rpx;
					transition: all .1s ease-in 0s;
				}

				.active {
					height: 100%;
					width: 100%;
					transition: all .1s ease-in 0s;
					transform: translateY(0);
				}
			}
		}

		.active_warp {
			display: flex;
			justify-content: center;
			position: absolute;
			bottom: 16rpx;
			left: 0;
			right: 0;
			margin: auto;

			.active_dot {
				height: 8rpx;
				width: 50rpx;
				background-color: rgba(255, 255, 255, 0.35);
				margin: 0 5px;
				border-radius: 20rpx;
				transition: background-color 0.3s;
			}

			.bgc_dot {
				background-color: #FFFFFF;
			}
		}
	}
</style>
