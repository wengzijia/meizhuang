<template>
	<view class="content">
		<view class="imgWpar">
			<image :src="categorylList.picUrl" mode="widthFix"></image>
		</view>
		<view class="title">
			<text>{{categorylList.name}}</text>
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
			"categorylList"
		],
		methods:{
	
		},
		onLoad(){
	
		}
	}
</script>

<style lang="scss">
.content {
	width: 100rpx;
	height: 200rpx;
	margin-left: 22rpx;
	.imgWpar {
		text-align: center;
		width: 100rpx;
		height: 100rpx;
		display: flex;
		image {
			margin: auto 0;
			max-width: 100rpx;
		}
	}
	
	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		text {
			font-size: 24rpx;
			font-weight: 600;
			white-space: nowrap;
		}
	}
}
</style>
