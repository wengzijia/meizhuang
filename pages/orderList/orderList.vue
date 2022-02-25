<template>
	<view class="orderContainer">
		<view class="flex">
			<u-tabs :list="list" current="0" lineWidth="30" @click="clickStatus"
				itemStyle="padding-left: 15px; padding-right: 18px; height: 34px;" activeStyle="color:#2b2e3d"
				lineColor="#2b2e3d" ></u-tabs>
		</view>
		<scroll-view refresher-enabled="true" @scrolltolower="scrollLoadMore"
							@refresherrefresh="pullToRefresh" :refresher-triggered="isPullRefresh" @refresherrestore="onRestore" scroll-y="true"
							style="height: 100vh;">
		<view style="height: 100px; padding-top: 65rpx;">
			<view v-for="(item, index) in goodData" :key="item.id">
				<view class="ani">
					<view class="header">
						<view class="order">订单号:{{ item.orderSn }}</view>
						<view class="pays">待付款</view>
					</view>
					<view class="check"  @click="jumpDetails(item.orderSn)">
						<navigator url="../ordedetli/ordedetli">
							<view class="Img">
								<image :src="item.productImage" style="width: 200rpx; height: 200rpx;" mode=""></image>
							</view>
						</navigator>
						<view class="SBle">
							<view class="textte">
								<view class="SBleft">{{item.productName}}</view>
								<view><text class="colors">{{item.producspec}}</text></view>
							</view>
							<view class="pay">
								<view>￥{{item.currentUnitPrice}}</view>
								<view>x{{item.quantity}}</view>
							</view>
						</view>

					</view>

					<view class="SNTop">
						<view class="paydd">
							<text>实付款</text>
							<text style="color: red;">￥{{item.actualPrice}}</text>
						</view>
						<view class="_butot">
							<block v-if="item.status === 0">
							<u-button class="cancel" @click="cancelOrder(item.orderSn)" shape="circle" text="取消订单"></u-button>
							<u-button shape="circle"  @click="obligationOrder(item.orderSn)" color="#2b2e3d" class="obligation" text="待付款"></u-button>
							</block>
							<u-button shape="circle" v-if="item.status === 1" @click="toSendGoodsOrder" color="#2b2e3d" class="toSendGoods" text="待发货"></u-button>
							<u-button shape="circle" v-if="item.status === 2" @click="shippedOrder" color="#2b2e3d" class="shipped" text="已发货"></u-button>
							<block v-if="item.status === 3">
							<u-button shape="circle"  @click="deleteOrder(item.orderSn)" color="#2b2e3d" class="delete" text="删除订单"></u-button>
							<u-button shape="circle"  @click="doneOrder" color="#2b2e3d" class="done" text="已完成"></u-button>
							</block>
							<u-button shape="circle" v-if="item.status === 4" @click="closeOrder" color="#2b2e3d" class="close" text="已关闭"></u-button>
							<u-button shape="circle" v-if="item.status === 5" @click="invalidOrder" color="#2b2e3d" class="invalid" text="无效订单"></u-button>
						</view>
					</view>
					<u-back-top :scroll-top="scrollTop" right="30" :customStyle="iconStyle" icon="arrow-up" text="顶部"
						z-index="9999" class="dingbu"></u-back-top>
				</view>
			</view>
			<!-- 分割线 -->
			<u-divider text="没有更多了"></u-divider>
		</view>
		</scroll-view>
		<!-- 模态框 -->
		<u-modal :show="show" @confirm="confirm" @cancel="cancel" :showCancelButton="true" customStyle="height: 100rpx;"
			:asyncClose="true" :title="title" :content="content"></u-modal>
	</view>
</template>

<script>
	const {
		fetchOrderList,fetchCancelOrder,fetchDeleteOrder,fetchPayAgain
	} = require('../../api/order.js')
	export default {
		data() {
			return {
				token: "", // 用户凭证
				skip: 0, //  默认第0页开始
				take: 10, // 每页的数量
				addressData: [], // 地址数据
				goodData: [], // 商品数据
				filterData:[], // 过滤数据
				// windowHeight: 0,
				isLoadFinish: true, // 是否加载完成,   // true 未加载完毕    false  加载完毕
				isPullRefresh: false, // 是否下拉刷新  
				iconStyle: {
					fontSize: '24rpx',
					color: '#fffff',
					opacity: 0.1
				},
				scrollTop: 0,
				title: '提示',
				content: '确认删除订单？',
				show: false,
				scrollLeft: 0,
				list: [{
						name: '全部',
						status: 'all'
					},
					{
						name: '待付款',
						status: '0'
					},
					{
						name: '待发货',
						status: '1'
					},
					{
						name: '已发货',
						status: '2'
					},
					{
						name: '已完成',
						status: '3'
					},
					{
						name: '已关闭',
						status: '4'
					},
					{
						name: '无效订单',
						status: '5'
					},
				],
				indexs: [],
				skip: 0,
				take: 10
			};
		},
		async onLoad() {
			// 下拉刷新
			this.isPullRefresh = true
			this.token = uni.getStorageSync('token')
			this.OrderList()
		},
		methods: {
			async OrderList(){
				let {
					code,
					data
				} = await fetchOrderList(this.token, this.skip, this.take);
				data.forEach(item => {
					this.addressData.push(item)
					let actualPrice = item.actualPrice;
					let status = item.status;
					item.orderItemlist.forEach(item => {
						item.actualPrice = actualPrice // 添加属性
						item.status = status // 添加属性
						this.goodData.push(item)
						this.filterData = this.goodData
					})
				})
				console.log(this.addressData,'232',this.goodData)
			},
			// 订单状态
			clickStatus(order) {
				let status = order.status;
				if (status == "all") {
					return this.goodData = this.filterData 
				}
				return    this.goodData =  this.filterData.filter(item => item.status == status )
			},
			// 上拉加载更多   页码++  然后再发送请求获取
			scrollLoadMore() {
							// 说明加载完毕就不再执行
							if (!this.isLoadFinish) {
								return;
							}
							this.skip++
							this.OrderList()
							console.log('上拉加载更多')
			},
			// 下拉刷新  页码始终为第一页   
			pullToRefresh() {
				this.isPullRefresh = false
				this.skip = 0
				this.goodData = []  // 清空才能保证唯一
				this.OrderList()
				console.log('下拉刷新')
			},
			onRestore(){
				this.isPullRefresh = 'restore'; // 需要重置
			},
			// 跳转详情
			jumpDetails(orderSn){
				uni.navigateTo({
					url:`../orderDetails/orderDetails?orderSn=${orderSn}`
				})
			},
			// 待付款 
			async obligationOrder(orderSn){
				let result = await fetchPayAgain(orderSn);
				console.log(result)
			},
			// 取消订单
			async cancelOrder(orderSn){
				let {code} = await fetchCancelOrder(orderSn);
				if(code === 1000){
					uni.showToast({
						title:"取消成功"
					})
					this.goodData = this.goodData.filter(item=>{
						return	item.orderSn !== orderSn
					})
				}
			},
			// 删除订单
			async deleteOrder(orderSn){
				let { code } = await fetchCancelOrder(orderSn)
				if(code === 1000){
					uni.showToast({
						title:"删除成功"
					})
					this.goodData = this.goodData.filter(item=>{
						return item.orderSn !== orderSn
					})
				}
			},
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			cancel(e) {
				this.show = false;
			},
			showModal() {
				this.show = true;
			},
			confirm(e) {
				this.show = false;
				// console.log('删除订单')
			},
			changeIndex(index) {
				// console.log('改变了index:', index);
			},
			payment() {

			}
		},
		
	};
</script>

<style>
	.custom-style {
	}

	.custom-style1 {
		margin-left: 20rpx;
	}

	.flex {
		/* #ifdef H5 */
		position: fixed;
		background-color: #ffffff;
		top: 92rpx;
		z-index: 999;
		width: 100%;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-left: 27rpx;
		position: fixed;
		background-color: #ffffff;
		top: -1rpx;
		z-index: 999;
		width: 100%;
		/* #endif */
	}

	::v-deep .custom-tab-pane {
		color: #2b2e3d;
	}

	._em {
		border: 3px solid red;
		width: 500rpx;
		margin: auto;
		background-color: #007aff;
	}

	.buttosd {
		display: flex;
		justify-content: space-between;
	}

	.tanque1 {
		text-align: center;
		margin-top: 20rpx;
	}

	.tanque {
		text-align: center;
	}

	.paydd {
		height: 80rpx;
		line-height: 80rpx;
		margin-right: 172rpx;
		font-size: 24rpx;
	}

	.butto {
		background-color: #ffffff;
		border-radius: 50rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.pays {
		font-size: 14px;
	}

	.order {
		color: #b9b9b9;
		font-size: 12px;
	}

	.line {
		text-align: center;
		color: #666666;
		margin-top: 30rpx;
		margin-bottom: 5rpx;
	}

	._butot {
		display: flex;
		font-size: 12rpx;
	}

	.SNTop {
		display: flex;
		justify-content: space-between;
		font-size: 12rpx;
		padding: 16rpx;
	}

	.custom-tab-pane {
		margin-left: 20rpx;
	}

	.SBle {
		margin-left: 20rpx;
		width: 100%;
		font-size: 24rpx;
		/* border: 2px solid red; */
		/* position: absolute; */
	}

	.colors {
		margin-left: 10rpx;
		border: 1px solid #f7f7f7;
		background-color: #f7f7f7;
		font-size: 12px;
	}

	.textte {
		width: 100%;
		height: 160rpx;
	}

	.pay {
		margin-left: 1rpx;
		display: flex;
		justify-content: space-between;
		width: 100%;
		color: #444444;
	}

	.check {
		margin-top: 30rpx;
		display: flex;
	}

	._del {
		display: flex;
	}

	.ani {
		border-radius: 20rpx;
		background-color: #ffffff;
		margin: 18rpx 18rpx;
		padding: 1rpx 8rpx;
	}

	.orderContainer {
		background-color: #f7f7f7;
	}

	.Img {}

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 20rpx;
	}

	::v-deep .u-modal.data-v-0156a215 {
		text-align: center;
	}

	::v-deep .tab .tab-bar-item.active[data-v-8a659874]::after {
		background: #000000;
	}

	::v-deep .tab .tab-bar-item.active[data-v-8a659874] {
		color: #000000;
	}

	::v-deep .tab .tab-bar-item[data-v-8a659874] {
		background-color: #ffffff;
	}

	::v-deep .tab .tab-bar[data-v-8a659874] {
		margin-bottom: 0px;
	}

	::v-deep .u-button[data-v-2bf0e569] {
		height: 70rpx;
	}
</style>
