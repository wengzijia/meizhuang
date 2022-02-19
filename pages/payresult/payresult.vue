<template>
	<view class="payorder">
		<view class="header">
			<view class="icon-add" >
				<icon type="success" color='#fff' size="16"></icon>
				<view  style="margin-left: 10rpx;">支付成功</view>
			</view>
			<view class="textsw">
				感谢你的购买，我们将尽快为你发货
			</view>
			<view class="butto">
					<button type="default" size="mini" @click="tiaozhaung">返回首页</button>
						<button class="buttone" type="default" size="mini" @click="tiaozhaung1">查看订单</button>
			</view>
		</view>
		
		<view class="confirm">
			<view class="cente">
				为你推荐
			</view>
			<view class="SNBom">
				<view class="content">
						<view class="imgWpar">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="content_desc">
							<text>解答考生的撒</text>
						</view>
						<view class="bottom">
							<view class="price">
								<text class="price_item1">¥ </text>
								<text class="price_item2">200</text>
								<text class="price_item3">.00</text>
							</view>
							<view class="sold">
								<text>￥6380.006件已售</text>
							</view>
						</view>
				
					</view>
					
					<view class="content">
							<view class="imgWpar">
								<image src="../../static/logo.png" mode=""></image>
							</view>
							<view class="content_desc">
								<text>解答考生的撒</text>
							</view>
							<view class="bottom">
								<view class="price">
									<text class="price_item1">¥ </text>
									<text class="price_item2">200</text>
									<text class="price_item3">.00</text>
								</view>
								<view class="sold">
									<text>￥6380.006件已售</text>
								</view>
							</view>
					
						</view>
					
			</view>
		
				
		</view>
	</view>
</template>

<script>
		export default {
			data() {
				return {
					
				};
			},
			props:[
				"goodsList"
			],
			methods:{
	          tiaozhaung(){
				  uni.navigateTo({
				  	url:'../home/home'
				  })
			  },
			   tiaozhaung1(){
			  				  uni.navigateTo({
			  				  	url:'../orderpage/orderpage'
			  				  })
			  			  }
			},
			onLoad(){
	
			}
		}
	</script>
</script>

<style lang="scss">
	
	.SNBom{
		display: flex;
	}
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
	.header{
		height: 250rpx;
		padding-top: 50rpx;
		background-color: #2b2e3f;
		text-align: center;
	}
	.textsw{
		margin-top: 20rpx;
	}
		
	.butto{
		display: flex;
		margin-top: 50rpx;
		justify-content: center;
	}
	.buttone{
	margin-left: 20rpx;	
	}
	.icon-add{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
