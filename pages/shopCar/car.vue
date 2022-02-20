<template>

	<view class="quqnju">

		<view class="content">
			<!--  v-for="(item,index) in cartGoodslist" :key="item.id" -->
			<view class="project" v-for="(item,index) in cartGoodslist" :key="index">
				<view class="go">
					<u-checkbox-group>
						<u-checkbox v-model="checked" activeColor="#2b303d" shape="circle" @change="selected">
						</u-checkbox>
					</u-checkbox-group>

				</view>
				<image class="Priceimg" :src="item.good.image" mode=""> </image>
				
				<view class="tetx_content">
					<view class="tetx">
						{{item.good.goods_name}}
						
					</view>
					<view class="details">
						{{item.good.sku_name_arr[0]}}
					</view>
					<view class="Price_quantity">
						
						<view class="Price">
							￥{{item.good.price}}
						</view>
						
						<u-number-box 
						 v-model="item.number"
						 color="#ffffff"
						 bgColor="#ebecee"
						 button-size="24"
						 >
						 
						<view class="inputNumber" slot="input">
							{{item.number}}
						</view>
						 
						 </u-number-box>
						 
						 
					</view>
				</view>
			</view>
		</view>

		<view class=" dibu">
			<view class="quanx">
				<u-checkbox-group v-model="checked">
					<u-checkbox activeColor="#2f2c3d" shape="circle"></u-checkbox>
				</u-checkbox-group>全选
			</view>
			<view class="heji">
				合计: <text class="money_Company">¥</text> <text class="money"> 10000</text>
			</view>

			<view class="sc">
				<u-button type="primary" color="red" text="删除" @click="delCartGoods"> </u-button>
			</view>

			<view class="jiesuan">
				<u-button type="primary" color="#2b2d3c" @onSubmit="onSubmit">去结算</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		fetch_ShopCar
	} from '../../api/shopCar.js';
	
	export default {
		data() {
			return {
				cartGoodslist: [], // 商品列表
				cartData: [], // 购
				checked: [],
				allchecked: true,
			}
		},
		
		onLoad() {
			this.ShopCar()
		},
		
		methods: {
			// 获取购物车商品
			async ShopCar() {
				let token = uni.getStorageSync('token');
				
				let {data} = await fetch_ShopCar(token)
				console.log(data);
				this.cartGoodslist = data;
			},

			// 设置步进器的数量
			valChange(e) {
				
			},

			// 删除商品
			delCartGoods(id, index) {
				console.log('sc')
				this.cartGoodslist.splice(index, 1);
				this.$state.commit('DeleteItem',id)
			},

		},

		computed: {
			
		}
	}
</script>

<style>
	/* @import "cl-uni/index.scss"; */
	.Stepper {
		background-color: #f498b2;
	}

	.quqnju {
		margin-top: 10rpx;
		margin: 10upx 0upx;
	}

	.dibu {
		
		width: 100%;
		background-color: #ffffff;
		position: fixed;
		/* #ifdef H5 */
		bottom: 50px;
		font-size: 20rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		bottom: 0;
		font-size: 30rpx;
		/* #endif */
		display: flex;
		align-items: center;
/* 		flex-wrap: nowrap;
		justify-content: space-around; */
	}

	.quanx {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: flex-start;

	}

	.heji {
		/* width: 280upx; */
		flex-grow: 3;
		display: flex;
		color: #2b2d3c;
		justify-content: flex-end;
		align-items: center;

	}

	.money_Company {
		margin-left: 20rpx;
	}

	.money {
		font-size: 40rpx;
	}

	.sc {
		margin-left: 50upx;
		flex-grow: 0;
	}

	.jiesuan {
		margin: 10upx;
		flex-grow: 2;
		margin-right: 20rpx;
	}

	page {
		background-color: #f7f7f7;
	}

	.content {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 10upx;
	}

	.go {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tetx_content {
		display: flex;
		flex-direction: column;
		margin-top: 18upx;
		justify-content: space-around;
		/* justify-content: center; */
		/* align-items: center; */
	}

	.u-checkbox {
		margin-left: 10rpx;
	}

	.project {
		display: flex;
		background-color: #fff;
		/* padding-left: 10upx; */
		/* padding-right: 10upx; */
		/* background-color: #fefefe; */
		border-radius: 10rpx;
	}

	.tetx {
		color: #444444;
		width: 450upx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.Priceimg {
		margin: 20upx;
		width: 150upx;
		height: 180upx;
		/* background-color: #007AFF; */
		border-radius: 10upx;
	}

	.details {
		display: block;
		text-overflow: -o-ellipsis-lastline;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.sku{
		
		background-color: #f2f6f5;
		color: #3f4342;
	}

	.Price_quantity {
		width: 450upx;
		display: flex;
		justify-content: space-between;
	}

	.Price {
		display: flex;
		align-items: center;
		color: #3f4342;
	}

	.number {
		display: flex;
		height: 40upx;
		justify-content: space-around;
	}

	.suzi {
		width: 45upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.jia {
		width: 50upx;
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		align-items: center;
		background-color: #2a2e3d;
		color: #c7c8cc;
	}

	.jian {
		width: 50upx;
		justify-content: center;
		flex-wrap: nowrap;
		align-items: center;
		background-color: #eeeeee;
		color: #2a2f3b;
	}

	.purchase {
		background-color: #fefefe;
		font-size: 30rpx;
		bottom: 0upx;
		position: fixed;
		display: flex;
		align-items: flex-end;
		flex-wrap: nowrap;
	}

	.Select_all {
		height: 100upx;
		margin-left: 30rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;

	}

	.total {
		text-align: center;
		width: 300upx;
		margin-left: 40upx;
	}

	.settlement {
		margin-left: 20upx;

	}
	
	.inputNumber{
		width: 30px;
		height: 100%;
		background-color: #ebecee;
		text-align: center;
		margin: 0 2px;
	}
</style>
