<template>
	<view class="content" @click="goDetail(goodsList.id)">
		<view class="imgWpar">
			<image :src="goodsList.picUrl" mode=""></image>
		</view>
		<view class="content_desc">
			<text class="text">{{goodsList.title}}</text>
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
		name: "good",
		data() {
			return {

			};
		},
		props: [
			"goodsList"
		],
		methods: {
			goDetail(id) {
				uni.navigateTo({
					url:'../../pages/goodsDetail/goodsDetail?id='+ id
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.content {
		margin: 10rpx 0;
		border-radius: 10rpx;

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

			.text {
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
				height: 82rpx;
				font-weight: 700;
				font-size: 30rpx;
			}
		}

		.bottom {
			display: flex;
			align-items: center;
			margin-top: 10rpx;

			.price {
				.price_item1 {
					font-size: 24rpx;
					margin-right: 10rpx;
				}

				.price_item2 {
					font-size: 32rpx;
					font-family: serif;
					margin-right: 10rpx;
				}

				.price_item3 {
					font-size: 24rpx;
					color: #444444;
				}
			}

			.sold {
				align-self: flex-end;
				font-size: 25rpx;
				color: #999999;
				margin-left: 50rpx;
			}
		}

	}
</style>
