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
<!-- 			<view class="sold">
				<text>{{goodsList.sales}}{{goodsList.unit}}已售</text>
			</view> -->
		</view>

	</view>
</template>

<script>
	export default {
		name:"good",
		data() {
			return {
				
			};
		},
		props:[
			"goodsList"
		],
		methods:{

		},
		onLoad(){

		}
	}
</script>

<style lang="scss">
.content {
	margin: 10rpx 0;
	// border: 1px solid #000000;
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
		width:350rpx;
		text {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		height: 82rpx;
		// font-family: serif;
		font-weight: 700;
		}
	}
	.bottom {
		display: flex;
		
		.price {
			.price_item1 {
				font-size:25rpx;
				margin-right: 10rpx;
			}
			.price_item2 {
				font-size:45rpx;
				font-family: serif;
			}
			.price_item3 {
				font-size:32rpx;
				color: #444444;
			}
		}
		.sold {
			display: flex;
			align-items: center;
			font-size: 25rpx;
			color: #999999;
			margin-left: 50rpx;
		}
	}

}
</style>
