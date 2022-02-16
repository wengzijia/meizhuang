<template>		
	<view class="bg-set">
	<view class="all">
		<view>
		<view class="personalInformation">
			<image src="https://img1.baidu.com/it/u=1867546281,4113590339&fm=26&fmt=auto"></image>
			<view class="user">
				<p class="name" >田德莉娜</p>
				<p class="cellphone">手机号:未填写</p>
			</view>
		</view>
		<uni-list class="allOrder">
			<uni-list-item  title="我的订单"  link rightText="查看全部订单" class="label"></uni-list-item>
			<view  class="myOrder">
			<uni-grid :column="5" :showBorder="false"  :square="false" class="allTransport">
				<uni-grid-item class="transport" >
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-daifukuan" size="25"></uni-icons>
					<text class="text">待付款</text>
				</uni-grid-item>
				<uni-grid-item class="transport">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-daifahuo1" size="25"></uni-icons>
					<text class="text">待发货</text>
				</uni-grid-item>
				<uni-grid-item class="transport">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-daishouhuo1" size="25"></uni-icons>
					<text class="text">待收货</text>
				</uni-grid-item>
				<uni-grid-item class="transport">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-pingjia1" size="25"></uni-icons>
					<text class="text">评价</text>
				</uni-grid-item>
				<uni-grid-item class="transport">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-tuikuan" size="25"></uni-icons>
					<text class="text">退款/售后</text>
				</uni-grid-item>
			</uni-grid>
			</view>
		</uni-list>
		<view class="mySetting">
			<view>
				<view class="other">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-kefu" size="20" class="otherIcon"></uni-icons>
					<text>我的优惠券</text>
				</view>
				<view class="other">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-kefu" size="20" class="otherIcon"></uni-icons>
					<text>在线客服</text>
				</view>
				<view class="other">
					<uni-icons custom-prefix="iconfont"  type="iconfont icon-shouhuodizhi" size="20" class="otherIcon"></uni-icons>
					<text>收货地址</text>
				</view>
			</view>
		</view>
		<button type="default" class="signOut">退出当前账号</button>
		</view> 
	</view>
	</view>
</template>
<script>
</script>
<style lang="scss" scoped>
	@import "../../static/Rose-iconfont.css";
.otherIcon{
		margin: 0 20rpx;
	}
	.other{
		width: 700rpx;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #fff;
		border: 1rpx solid #fff;
		border-radius: 10rpx;
	}
	.slash{
		float: right;
	}
	 /* #ifdef H5 */
	 .transport{
	  margin: 0;
	 }
	 .otherIcon{
	  margin: 0 20rpx;
	 }
	 .other{
	  width: 700rpx;
	  height: 100rpx;
	  line-height: 100rpx;
	  background-color: #fff;
	  border: 1rpx solid #fff;
	  border-radius: 10rpx;
	 }
	 .slash{
	  float: right;
	 }
	 .text{
	  margin: 10px 13px 0;
	  width: 64px;
	  font-size:10px;
	  font-weight: 300;
	 }
	 page {
	  background-color:#EEEEEE
	 }
	 /* #endif */
	 .otherIcon{
	  margin: 0 20rpx;
	 }
	 .other{
	  width: 700rpx;
	  height: 100rpx;
	  line-height: 100rpx;
	  background-color: #fff;
	  border: 1rpx solid #fff;
	  border-radius: 10rpx;
	 }
	 /* #ifdef MP-WEIXIN */
	 .bg-set{
	      position: fixed;
	      width: 100%;
	      height: 100%;
	      top: 0;
	      left: 0;
	   background-color: #EEEEEE;
	  z-index: -1;
	  }
	 .transport{
	  padding: 0 32rpx;
	 }
	 .text{
	    margin: 10px 0;
	    width: 90rpx;
	   font-size:10px;
	   font-weight: 300;
	 }
	 /* #endif */
	.signOut{
		margin-top: 30rpx;
		border: 1rpx solid #fff;
		border-radius: 25rpx;
	}
	.uni-list[data-v-5009d455]{
		border: 1rpx solid #fff;
			border-radius: 25rpx;
		overflow: hidden;
	}
	.mySetting{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		border: 1rpx solid #fff;
		border-radius: 25rpx;
		overflow: hidden;
	}
.allOrder{
	/* padding: 40rpx;	 */
	height: 268rpx;
	width: 710rpx;
}
.personalInformation{
	padding-top: 50rpx;
}
.uni-list-item[data-v-296a3d7e]{
	border: 1rpx solid #fff;
	border-radius: 25rpx;
}
.label{
	border: 1rpx solid #fff;
	border-radius: 20rpx;
	overflow: hidden;	
	padding: 0;
}
	.all{
		margin: 0 20rpx;
	}
	.signOut{
		color: #FF5A5F !important;
		line-height: 100rpx;
		height:100rpx;
		
	}
	.myOrder{
		background-color: #fff;
		height: 200rpx;
		display: flex;
		margin:  0 20rpx;
		align-items:center;
		justify-content: center;
		border: 1rpx solid #fff;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.user{
	vertical-align:top;
		display: inline-block;
	}
	.name{
			font-size: 40rpx;
			margin: 30rpx;
	}
	.cellphone{
		color: #666;
		font-size: 30rpx;
		margin: 30rpx;
	}
	image{
		height: 150rpx;
		width: 150rpx;
		border: 1rpx solid #fff;
		border-radius: 50%;
	}
</style>
