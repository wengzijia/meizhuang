<template>
	<view>
		<view class="flex">
			<u-tabs
				:list="list"
				current="0"
				lineWidth="30"
				@change="open"
				itemStyle="padding-left: 15px; padding-right: 18px; height: 34px;"
				activeStyle="color:#2b2e3d"
				lineColor="#2b2e3d"
				:scrollable='false'
			></u-tabs>
		</view>
		<view style="height: 100px; padding-top: 65rpx;" >
			<view v-for="(item, index) in items" :key="index">
				<view class="ani">
					<view class="header">
						<view class="order">订单号:{{ item.payId }}</view>
						<view class="pays">待付款</view>
					</view>
					<view class="check">
						<navigator url="../ordedetli/ordedetli">
							<view class="Img"><image src="http://test.w0824.com/xmnote2.png" style="width: 200rpx; height: 200rpx;" mode=""></image></view>
						</navigator>
						<view class="SBle">
							<view class="textte">
								<view class="SBleft">你好呀</view>
								<view ><text class="colors">慧大师大大加快大家看到</text></view>
							</view>
								<view class="pay">
									<view>￥2.00</view>
									<view>x1</view>
								</view>
								
			
							
						</view>
						
					</view>

					<view class="SNTop">
						<view class="paydd">
							<text>实付款</text>
							<text style="color: red;">￥0.10</text>
						</view>
						<view class="_butot">
							<u-button  class="custom-style" @click="showModal" shape="circle"  text="取消订单"></u-button>
							<u-button shape="circle" @click="payment" color="#2b2e3d" class="custom-style1" text="去付款"></u-button>
						</view>
					</view>
					<u-back-top :scroll-top="scrollTop" right="30" :customStyle="iconStyle" icon="arrow-up" text="顶部" z-index="9999" class="dingbu"></u-back-top>
				</view>
			</view>
			<!-- 分割线 -->
			<u-divider text="没有更多了"></u-divider>
		</view>
		<!-- 模态框 -->
		<u-modal
			:show="show"
			@confirm="confirm"
			@cancel="cancel"
			:showCancelButton="true"
			customStyle="height: 100rpx;"
			:asyncClose="true"
			:title="title"
			:content="content"
		></u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
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
			status: 102,
			list: [
				{ name: '全部', orderStatus: '0' },
				{ name: '待发货', orderStatus: '1' },
				{ name: '待付款', orderStatus: '2' },
				{ name: '待收货', orderStatus: '3' },
				{ name: '待评价', orderStatus: '4' }
			],
			indexs: [],
			skip: 1,
			take: 10,
			items: [
				{
					id: 29,
					userId: 43,
					orderSn: '20220102377423',
					orderStatus: 201,
					consignee: '张龙',
					mobile: '18271711039',
					address: '湖北省 恩施土家族苗族自治州 巴东县 东壤口镇雷家平村二组8号',
					message: '',
					goodsPrice: 215,
					freightPrice: 0,
					couponPrice: 0,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 215,
					actualPrice: 215,
					payId: '4200001303202201024504952832',
					payTime: '2022-01-02 09:43:38',
					comments: 0,
					addTime: '2022-01-02 09:43:32',
					updateTime: '2022-01-02 09:43:38',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 1,
					createUserId: 43,
					seckillReducePrice: 0,
					hasRefund: false
				},
				{
					id: 28,
					userId: 46,
					orderSn: '20211212194549',
					orderStatus: 102,
					consignee: '陈',
					mobile: '15917903777',
					address: '河北省 唐山市 开平区 1313',
					message: '',
					goodsPrice: 4364,
					freightPrice: 0,
					couponPrice: 120,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 4244,
					actualPrice: 4244,
					comments: 0,
					endTime: '2021-12-12 21:15:38',
					addTime: '2021-12-12 21:15:22',
					updateTime: '2021-12-12 21:15:38',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 31,
					createUserId: 46,
					seckillReducePrice: 0,
					hasRefund: false
				},
				{
					id: 27,
					userId: 46,
					orderSn: '20211212736005',
					orderStatus: 102,
					consignee: '陈',
					mobile: '15917903777',
					address: '河北省 唐山市 开平区 1313',
					message: '',
					goodsPrice: 1437,
					freightPrice: 0,
					couponPrice: 0,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 1437,
					actualPrice: 1437,
					comments: 0,
					endTime: '2021-12-12 19:29:51',
					addTime: '2021-12-12 19:29:40',
					updateTime: '2021-12-12 19:29:51',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 31,
					createUserId: 46,
					seckillReducePrice: 0,
					hasRefund: false
				},
				{
					id: 26,
					userId: 46,
					orderSn: '20211211445350',
					orderStatus: 102,
					consignee: '陈',
					mobile: '15917903777',
					address: '河北省 唐山市 开平区 1313',
					message: '',
					goodsPrice: 259,
					freightPrice: 0,
					couponPrice: 0,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 259,
					actualPrice: 259,
					comments: 0,
					endTime: '2021-12-11 09:57:39',
					addTime: '2021-12-11 09:57:17',
					updateTime: '2021-12-11 09:57:39',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 31,
					createUserId: 46,
					seckillReducePrice: 0,
					hasRefund: false
				},
				{
					id: 25,
					userId: 47,
					orderSn: '20211208208795',
					orderStatus: 201,
					consignee: '李小姐',
					mobile: '15817438225',
					address: '广东省 深圳市 宝安区 龙华新区龙华汽车站综合楼101',
					message: '',
					goodsPrice: 691,
					freightPrice: 0,
					couponPrice: 0,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 691,
					actualPrice: 691,
					payId: '4200001298202112089849307841',
					payTime: '2021-12-08 15:54:07',
					comments: 0,
					addTime: '2021-12-08 15:54:01',
					updateTime: '2021-12-08 15:54:07',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 32,
					createUserId: 47,
					seckillReducePrice: 0,
					hasRefund: false
				},
				{
					id: 24,
					userId: 47,
					orderSn: '20211208577006',
					orderStatus: 203,
					consignee: '李小姐',
					mobile: '15817438225',
					address: '广东省 深圳市 宝安区 龙华新区龙华汽车站综合楼101',
					message: '',
					goodsPrice: 691,
					freightPrice: 0,
					couponPrice: 50,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 641,
					actualPrice: 641,
					payId: '4200001183202112083384064034',
					payTime: '2021-12-08 14:43:18',
					comments: 0,
					addTime: '2021-12-08 14:43:00',
					updateTime: '2021-12-08 15:18:53',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 32,
					createUserId: 47,
					seckillReducePrice: 0,
					hasRefund: true
				},
				{
					id: 23,
					userId: 43,
					orderSn: '20211022096052',
					orderStatus: 301,
					consignee: '张龙',
					mobile: '18271711039',
					address: '湖北省 恩施土家族苗族自治州 巴东县 东壤口镇雷家平村二组8号',
					message: '',
					goodsPrice: 688,
					freightPrice: 0,
					couponPrice: 50,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 638,
					actualPrice: 638,
					payId: '4200001158202110229179152269',
					payTime: '2021-10-22 12:06:22',
					shipSn: 'SF1134588708975',
					shipChannel: 'SF',
					shipTime: '2021-10-22 21:10:20',
					comments: 0,
					addTime: '2021-10-22 12:06:16',
					updateTime: '2021-10-22 21:10:20',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 31,
					createUserId: 43,
					seckillReducePrice: 0,
					hasRefund: false
				},
				{
					id: 22,
					userId: 41,
					orderSn: '20211019251284',
					orderStatus: 301,
					consignee: '陈小姐',
					mobile: '18028784293',
					address: '广东省 深圳市 龙岗区 横岗大塘6巷9号401',
					message: '',
					goodsPrice: 504,
					freightPrice: 0,
					couponPrice: 50,
					integralPrice: 0,
					grouponPrice: 0,
					orderPrice: 454,
					actualPrice: 454,
					payId: '4200001157202110192738369054',
					payTime: '2021-10-19 10:08:51',
					shipSn: 'SF1433332427786',
					shipChannel: 'SF',
					shipTime: '2021-10-22 21:09:19',
					comments: 0,
					addTime: '2021-10-19 10:08:42',
					updateTime: '2021-10-22 21:09:19',
					deleted: false,
					settlementMoney: 0,
					settlementStatus: false,
					freightType: 0,
					shareUserId: 31,
					createUserId: 41,
					seckillReducePrice: 0,
					hasRefund: false
				}
			]
		};
	},
	onLoad() {},
	methods: {
		open(index, item) {
			// console.log(index,item)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		cancel(e) {
			this.show = false;
			console.log(e)
		},
		showModal() {
			this.show = true;
		},
		confirm(e) {
			this.show = false;
			// console.log('删除订单')
			console.log(e)
		},
		changeIndex(index) {
			// console.log('改变了index:', index);
		},
		payment(){
			
		}
	}
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
	justify-content: space-around;
	font-size: 12rpx;
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

.textte{
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
._del{
	display: flex;
}
.ani {
	border-radius: 20rpx;
	background-color: #ffffff;
	margin: 18rpx 18rpx;
	padding: 1rpx 8rpx;
}
page {
	background-color: #f7f7f7;
}
.Img {
	
}
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
