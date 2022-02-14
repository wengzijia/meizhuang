<template>
	<view class="content">
		<view class="imgWpar">
			<image :src="goodsList.picUrl" mode=""></image>
		</view>
		<view class="content_desc">
			<text>{{goodsList.name}}</text>
		</view>
		<view class="bottom">
			<view class="price">
				<text class="price_item1">¥ </text>
				<text class="price_item2">{{goodsList.retailPrice}}</text>
				<text class="price_item3">.00</text>
			</view>

			<view class="sold">
				<text>{{goodsList.sales}}{{goodsList.unit}}已售</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "Goods",
		data() {
			return {

			};
		},
		props: {
			goodsList: Object
		},
		methods: {

		},
		created() {
			console.log(this.goodsList)
		},
	}
</script>

<style lang="scss">
	.content {
		// #ifdef H5
		width: 48%;
		// #endif
		// #ifdef MP-WEIXIN
		width: 100%;
		// #endif
		margin: 10rpx 0;
		// border: 1px solid #000000;
		border-radius: 10rpx;
		background-color: #ffffff;

		.imgWpar {
			image {
				width: 350rpx;
				height: 350rpx;
				border-top-left-radius: 10rpx;
				border-top-right-radius: 10rpx;
			}
		}

		.content_desc {
			width: 350rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			-o-text-overflow: ellipsis;
			/* for Opera */

			text {

				font-weight: 700;
			}
		}

		.bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
			// border: 2px solid black;
			// width: 100%;

			.price {
				// line-height: 40rpx;
				.price_item1 {
					font-size: 25rpx;
					margin-right: 10rpx;
				}

				.price_item2 {
					font-size: 45rpx;
					font-family: serif;
				}

				.price_item3 {
					font-size: 32rpx;
					color: #444444;
				}
			}

			.sold {
				font-size: 25rpx;
				margin-top: 18rpx;
				color: #999999;
				// line-height: 52rpx
				// margin-left: 50rpx;
			}
		}

	}

</style>
