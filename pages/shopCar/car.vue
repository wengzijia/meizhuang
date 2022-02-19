<template>

	<view class="quqnju">

		<view class="content">
			<!--  v-for="(item,index) in cartGoodslist" :key="item.id" -->
			<view class="project">
				<view class="go">
					<u-checkbox-group>
						<u-checkbox v-model="checked" activeColor="#2b303d" shape="circle" @change="selected">
						</u-checkbox>
					</u-checkbox-group>

				</view>
				<image class="Priceimg"  mode=""> </image>
				<!--  :src="item.good.image" -->
				<view class="tetx_content">
					<view class="tetx">
						<!-- {{item.good.goods_name}} -->
						商品名称
					</view>
					<view class="details">
						<!-- {{item.good.sku_name_arr[0]}} -->
						 <text class="sku">sku</text>
					</view>
					<view class="Price_quantity">
						<view class="Price">
							<!-- $ {{item.good.price}} -->
							价格
						</view>
						<u-number-box :disabledInput="true"
						 v-model="value"
						 color="#ffffff"
						 bgColor="#ff94b0"
						 iconStyle="color: #fff"
						 ></u-number-box>
						<!--  "item.number-->
						<!-- <cl-input-number v-model="checked"  class="Stepper"></cl-input-number> -->
					</view>
				</view>
			</view>
		</view>

		<!-- #ifdef MP-WEIXIN -->
		<view class="purchase">

			<view class="Select_all">
				<u-checkbox-group @change="allchange">
					<u-checkbox v-model="checked" :SelectAll="allchecked " shape="circle"></u-checkbox>
				</u-checkbox-group>
				<view class="">
					全选
				</view>

				<view class="total">
					合计: $10000000
				</view>
				<view class="">
					<u-button type="primary" size="small" shape="circle" color="#e94242" 
						@click="delCartGoods(item.id,index)">删除</u-button>
				</view>
				<view class="settlement">
					<u-button type="primary" size="small" text="结算" shape="circle" @onSubmit="onSubmit"></u-button>
				</view>
			</view>
		</view>
		<!-- #endif -->

		<!-- #ifdef H5 -->
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
				<u-button type="primary" color="#2b2d3c" @onSubmit="onSubmit">去结算(3)</u-button>
			</view>
		</view>
		<!-- #endif -->

	</view>
</template>

<script>
	import {
		fetch_ShopCar
	} from '../../api/shopCar.js';
	
	export default {
		data() {
			return {
				value:1,
				cartGoodslist: [], // 商品列表
				cartData: [], // 购
				checked: [],
				allchecked: true,
				token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTYsImNyZWF0ZVRpbWUiOiIyMDIyLTAxLTIxIDIyOjEwOjI4IiwidXBkYXRlVGltZSI6IjIwMjItMDEtMjMgMTM6MzE6NTEiLCJ1c2VybmFtZSI6bnVsbCwicGFzc3dvcmQiOm51bGwsImdlbmRlciI6MCwibGFzdExvZ2luVGltZSI6bnVsbCwibGFzdExvZ2luSXAiOm51bGwsInVzZXJMZXZlbCI6MCwibmlja25hbWUiOiJBbGxlbiIsIm1vYmlsZSI6IjE1OTE3OTAyODM4IiwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSkh1UXc1NHpSaWEyOGtxN1JBRWtpY0tjTUNoakM3b1A4RGZEUXd2MlZ0RG1xeGlhQjUxSTdleVdDZE5VRnRzYjFEMTdmVjl2UXhvZ3o1dy8xMzIiLCJzZXNzaW9uX2tleSI6bnVsbCwic2hhcmVVc2VySWQiOiIxIiwid2VpeGluT3BlbmlkIjoibzAxcjA1Q3ROTUFJNFJ4c1k0Rkh1NDU0eHBXZyIsImNsb3VkSUQiOiI1M19MLVN1c3NNNC1RZEM0dTVodnlHWFhha1V1WXlsdktsMHZfWEhET1U4aDJ1dkF1WWlBcmd6dEtTS1lCRSIsImVuY3J5cHRlZERhdGEiOiJEaWc4aEM2eS9qbWRjWVFIVUlWSGs2RkdtdldETXRjMnRSeHVheHI4NldkVkZqL0o1TE9YaDcvN1lEUnFseFJ6U0hUd2JXdERCZG9iSFJab1FPenUxVjhacGE0RmxhUlhtN2NtM0xKZUlDVWp3MVZZdnFjMTV1UG5QQ0hCNkRQd1B4UmtSQTVneC9tR3BDMG1DTkZPUS8yTEZQTEFXdVVodzhPRnB2SkFsbUtCWVZFTkRIbk5JRVBnM1NDc3QxcjlYc3lPVStWWlVoSHpoWXUrV2NUYmdBdlk5eUN6OFkvVmh1NDdhMGV1c0M5TnMzNGhxNmFvZmNBQmhiU29SVndrdldobTNodEoydUhYajBmNTBWOEJwL1pqWERmMGVPcGFoYkpTTmdCL05oZWlpZWs4Rnp4em1sUzNSVkpOU21YOVpPcCt1RXpWR2R2NUJnWGhSR1lrZXZwTjhqcFlxS0NoL2tRaVVvdnpNRVQvQ0IzenpPRXF0WUZ2bkhPbEYxZmhzYUFVYzY2dU5hWU1VaDBDblp6NjZRPT0iLCJpdiI6InNWYk55VStweEtiZ1U5NHlQbzR1K2c9PSIsInNpZ25hdHVyZSI6IjIyY2VkM2I0YjUyODI3NTg5YTg2YmVhOGI3ZmE3MDQ3NjExMTBiNWYiLCJzdGF0dXMiOiIwIiwiZGVsZXRlZCI6ZmFsc2UsImlhdCI6MTY0NTExMTIxNywiZXhwIjoxNjQ1MTk3NjE3fQ.-zeOXwr7XwH1JRh54mIQP0Gtzl-PxpYbJmmCTzQFQUw"
			}
		},
		
		onLoad() {
			this.ShopCar()
		},
		
		methods: {
			// 获取购物车商品
			async ShopCar() {
				uni.setStorageSync('token', this.token);
				let result = await fetch_ShopCar(this.token)
				console.log(result);
				this.cartGoodslist = result.data;
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
		font-size: 16rpx;
		width: 100%;
		background-color: #ffffff;
		position: fixed;
		bottom: 92upx;
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
</style>
