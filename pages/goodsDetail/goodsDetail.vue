<template>
	<view>
		<!-- 自定义导航栏 -->
		<view class="particularsWrap">
			<view class="iconfont icon-fanhui"></view>
			<view v-show="!isShow" class="particulars">
				商品详情
			</view>
			<view v-show="isShow" class="navigationInfo flex">
				<!-- <text :class="activeindex==index?'border':''" v-for="(item,index) in infoContent" :key="item.id"
					:data-id="item.jx" @click="jumpTo($event,index)">{{item.data}}</text> -->
					<view class="item" v-for="(item,index) in infoContent" :key="item.id"
					:data-id="item.jx" @click="jumpTo($event,index)">
						<view>{{item.data}}</view>
						<view :class="activeindex==index?'border':''"></view>
					</view>
			</view>
		</view>
		<scroll-view scroll-y style="height:100vh" :scroll-into-view="toView" @scroll="gun" scroll-with-animation>
			<view class="goodsDetailContainer " id="xx">
				<!-- 头部 -->
				<view class="header">
					<!-- 轮播图 -->
					<view class="multicastDiagramContainer">
						<swiper class="multicastDiagram" indicator-dots="true" indicator-active-color="#000000"
							autoplay="true">
							<swiper-item class="item" v-for="(item,index) in gallery" :key="index">
								<image
									:src="item">
								</image>
							</swiper-item>
						</swiper>
						<!--  商品标题 -->
						<view class="titleContainer flex_l_r">
							<view class="title">{{data.name}} </view>
						</view>
						<view class="goodsInfo flex ">
							<view class="information flex_c_c">
								<!--  商品价格 -->
								<view class="priceWrap">
									<text class="RMB">¥</text>
									<text class="bigNumber">{{data.retailPrice}}</text>
									<text class="price">.00</text>
								</view>
								<view class="soldOut size">{{stock}}件已售</view>
								<view class="" v-if="isShowMoney">佣金:{{brokeragePrice}}</view>
							</view>
							<view class="getCouponWrap flexC">
								<text class="iconfont icon-lingquanzhongxin getCoupon size" @click="open">领券 ></text>
								<!-- <text class="greaterThan">></text> -->
							</view>
						</view>
						<!-- 领劵弹窗 -->
							<uni-popup class="popup" ref="popup" type="bottom">
								<view class="receiveCoupon center">
									<view class="title">领劵中心</view>
									<view class="discountCoupon">
										<view class="imgWrap">
											<image src="../../static/image/couponLogo.png"></image>
										</view>
										<view class="noCoupon">暂无优惠券</view>
									</view>
								</view>
							</uni-popup>
						<!--  保障信息 -->
						<view class="safeguard flex_l_r" id="pl">
							<view class="iconfont icon-zhengpinbz  BSO size">正品保证</view>
							<view class="iconfont icon-zhengpinbaozhang salesReturn size">无忧退货</view>
							<view class="iconfont icon-tianmaobaoyouqia pinkage size">免费包邮</view>
						</view>
						<view class="specification flex_l_r">
							<text class="select fs">选择规格</text>
							<text class="unselected fs" @click="openSkuPopup()">{{skuName}}></text>
						</view>
					</view>
				</view>
				<!-- 评论 -->
				<view class="commentContainer">
					<view class="commentWrap flex">
						<view class="comment fs">商品评论(1)</view>
						<view class="feedback fs">好评率100%</view>
					</view>
					<view class="commentInfo">
						<view class="praise flex_l_r">
							<view class="vessel flex">
								<view class="imgWrap">
									<image class="headPortrait" src="../../static/logo.png"></image>
								</view>
								<view class="nickname">
									<view class="name">Fiee。</view>
									<view class="dateTime">2021-09-12 19:43:00</view>
								</view>
							</view>
							<view class="star">
								<uni-rate v-model="value" />
							</view>
						</view>
						<view class="commentWrap">
							<view class="comment">中国共产党万岁</view>
							<view class="picturesContainer" id="xq">
								<image class="pictures" src="../../static/logo.png"></image>
							</view>
						</view>
					</view>
				</view>
				<!-- 商品详情 -->
				<view class="detailContainer">
					<view class="goodsDetail">商品详情</view>
					<view class="detailImg">
						<!-- <image class="img" src="../../static/logo.png"></image>
						<image class="img" src="../../static/logo.png"></image>
						<image class="img" src="../../static/logo.png"></image> -->
						<view  v-html="detail"></view>
					</view>
				</view>
			</view>
			<!-- 商品导航 -->
			<view class="goodsNavigation flex">
				<view class="serviceWrap flex">
					<view class="service">
						<view class="serviceIcon iconfont icon-kefu"></view>
						<view class="serviceTitle">客服</view>
					</view>
					<view class="shopping">
						<view class="cartIcon iconfont icon-gouwuche"></view>
						<view class="cartTitle">购物车</view>
					</view>
				</view>
				<view class="buyContainer flex">
					<button class="cart flex_c_c" @click="openSkuPopup()">加入购物车</button>
					<button class="buy flex_c_c" @click="openSkuPopup()">立即购买</button>
				</view>
			</view>
			<!-- sku弹窗 -->
			<vk-data-goods-sku-popup ref="skuPopup" v-model="skuKey" theme="black-white" border-radius="20"
				:localdata="goodsInfo" :mode="skuMode" @open="onOpenSkuPopup" @close="SkuPopup" @add-cart="addCart"
				@buy-now="buyNow"></vk-data-goods-sku-popup>
		</scroll-view>
	</view>
</template>

<script>
	const {
		fetchDetailData,fetchAddCart
	} = require("../../api/detail.js")
	var that;
	export default {
		data() {
			return {
				value: "5",
				toView: "xx",
				// sku
				// 是否打开SKU弹窗
				skuKey: false,
				// SKU弹窗模式
				skuMode: 1,
				// 后端返回的商品信息
				goodsInfo: {},
				infoContent: [{
						id: 1,
						data: '信息',
						jx: 'xx'
					},
					{
						id: 2,
						data: '评论',
						jx: 'pl'
					},
					{
						id: 3,
						data: '详情',
						jx: 'xq'
					}
				],
				activeindex: 0,
				// border: 'border',
				isShow: false, // 是否显示导航栏     
				data:{},  // 详情数据
				gallery:[], //轮播图
				stock:'', // 件数
				detail:"", // 富文本详情
				sku_list:[], // 商品对应的sku列表的字段名   
				spec_list:[], //  商品规格名称的字段名
				skuData:[],    // sku每一项的数据
				brokerageType:"",  // 是否需要给佣金
				brokeragePrice:"",// 佣金金额
				isShowMoney:false,   // 是否显示佣金金额
				skuName:"未选择",
				number:0   // 商品数量
			}
		},
		methods: {
			jumpTo(e,index) {
				let id = e.currentTarget.dataset.id;
				this.toView = id;
				this.activeindex = index
				console.log(this.toView)
			},
			gun(e) {
				let {
					scrollTop
				} = e.detail;
				if (scrollTop > 180) {
					this.isShow = true
					this.activeindex = 0
				}else{
					this.isShow = false
				}
				scrollTop >= 400 ? this.activeindex = 1 : this.activeindex = 0
				scrollTop >= 760 ? this.activeindex = 2 : ""
			},
			// 弹出领券框
			open() {
			            this.$refs.popup.open('bottom')
			        },
			//  请求详情页数据
			async detailData() {
				let { result} = await fetchDetailData()
				this.data = result.goods[0]
				let {brokerageType,brokeragePrice} = result.goods[0]
				this.brokerageType = brokerageType  // 是否需要佣金
				this.brokeragePrice = brokeragePrice   // 佣金金额
				this.gallery = result.goods[0].gallery 
				this.detail = result.goods[0].detail = result.goods[0].detail.replace(/<img/g,'<img style="width:100%;height:100%"')
				this.stock = result.goods[0].sku_list[0].stock 
				this.spec_list = result.goods[0].spec_list[0]  
				console.log(this.spec_list)
				result.goods[0].sku_list.forEach(item=>{
					item.price = item.price * 100
					this.skuData.push(item)
					return item
				})
				this.sku_list = result.goods[0].sku_list
				console.log(result.goods[0].sku_list)
			},
			// 初始化
			init(options = {}) {

			},
			// 获取商品信息，并打开sku弹出
			openSkuPopup() {
				/**
				 * 获取商品信息
				 * 这里可以看到每次打开SKU都会去重新请求商品信息,为的是每次打开SKU组件可以实时看到剩余库存
				 */
				// 此处写接口请求，并将返回的数据进行处理成goodsInfo的数据格式，
				// goodsInfo是后端返回的数据
				that.goodsInfo = {
					"_id": this.sku_list[0]._id,
					"name": this.sku_list[0].goods_name,
					"goods_thumb": this.sku_list[0].image,
					"sku_list":this.skuData,
					"spec_list": [{
						"list": [
							{
								"name": this.spec_list.list[0]
							},
							{
								"name": this.spec_list.list[1]
							}
						],
						"name": this.spec_list.name
					}]
				}
				that.skuKey = true;
			},
			// sku组件 开始-----------------------------------------------------------
			onOpenSkuPopup() {
				console.log("监听 - 打开sku组件");
			},
			SkuPopup() {
				console.log("监听 - 关闭sku组件");
			},
			// 加入购物车前的判断
			// addCartFn(obj) {
			// 	let {
			// 		selectShop
			// 	} = obj;
			// 	// 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
			// 	let res = {};
			// 	let name = selectShop.goods_name;
			// 	if (selectShop.sku_name != "默认") {
			// 		name += "-" + selectShop.sku_name_arr;
			// 	}
			// 	res.msg = `${name} 已添加到购物车`;
			// 	if (typeof obj.success == "function") obj.success(res);
			// },
			// 加入购物车按钮
			async addCart(selectShop) {
				console.log("监听 - 加入购物车");
				console.log('加入购物车',selectShop)
				this.skuName = selectShop.sku_name_arr[0]
				// this._id = selectShop._id
				// this.number = selectShop.buy_num
				let token = uni.getStorageSync("token");
				console.log(token)
				if(selectShop.goods_name === selectShop.goods_name){
					this.number  +=  selectShop.buy_num
				}
				let result = await  fetchAddCart(token,selectShop._id,this.number)
				console.log('2332',result)
				// that.addCartFn({
				// 	selectShop: selectShop,
				// 	success: function(res) {
				// 		// // 实际业务时,请替换自己的加入购物车逻辑
				// 		// that.toast(res.msg);
				// 		// setTimeout(function() {
				// 		// 	that.skuKey = false;
				// 		// }, 300);
						
				// 	}
				// });
			},
			// 立即购买
			buyNow(selectShop) {
				console.log("监听 - 立即购买");
				that.addCartFn({
					selectShop: selectShop,
					success: function(res) {
						// 实际业务时,请替换自己的立即购买逻辑
						that.toast("立即购买");
					}
				});
			},
			toast(msg) {
				uni.showToast({
					title: msg,
					icon: "none"
				});
			}
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options) {
			that = this;
			that.init(options);
			this.detailData()
			
			let token = uni.getStorageSync("token");
			let userInfo = uni.getStorageSync("userInfo");
			// #ifdef H5
			// 用户等级
				let {userLevel} = JSON.parse(uni.getStorageSync("userInfo"));
			// #endif
			// #ifdef MP-WEIXIN
			// 用户等级
				let {userLevel} = userInfo;
			// #endif
			// token和用户信息都为真  
			if(token&&userInfo){
				// 是否需要佣金为1并且用户等级为2,才显示佣金金额 
				if(this.brokerageType === 1 && userLevel === 2){
					this.isShowMoney = true
				}
			}
		},
	}
</script>

<style lang="scss">
	// 公共类
	.flex {
		display: flex;
		justify-content: space-between;
	}
	
	.flexC{
		display: flex;
		align-items: center;
	}
	
	.flex_l_r {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.flex_c_c {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.center{
		text-align: center;
	}

	.fs {
		font-size: 26rpx;
	}

	.size {
		font-size: 24rpx;
	}

	.border {
		/* #ifdef MP-WEIXIN */
		// border-bottom: 6rpx solid #2b2e3d;
		/* #endif */

		::v-deep span {
			// border-bottom: 4rpx solid #2b2e3d;
		}
	}
	
	.border:after{
		display:block;
		content: "";
		width: 40rpx;
		margin-top: 12rpx;
		margin-left: 12rpx;
		border-bottom: 8rpx solid #000000;
		border-radius: 20rpx;
	}


	//自定义导航栏
	.particularsWrap {
		padding: 10rpx;
		text-align: center;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #FFFFFF;
		/* #ifdef H5 */
		padding-top: 20rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 80rpx;
		/* #endif */

		z-index: 9999;

		.particulars {
			width: 100%;
			line-height: 60rpx;
		}

		.navigationInfo {
			margin: auto;

			.item{
				margin: 0 20rpx;
			}
		}
	}

	.goodsDetailContainer {
		background-color: #f7f7f7;
		/* #ifdef H5 */
		margin-top: 80rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		margin-top: 140rpx;

		/* #endif */
		.header {
			background-color: #FFFFFF;
			height: 1200rpx;
			//  轮播图
			.multicastDiagramContainer {
				.multicastDiagram {
					height: 600rpx;

					.item {
						image {
							width: 100%;
							height: 100%;
						}
					}
				}

				//  标题容器
				.titleContainer {
					padding: 30rpx;
					height: 120rpx;
				}

				// 商品信息
				.goodsInfo {
					padding: 30rpx;

					.priceWrap {
						color: #dd524d;
						font-size: 36rpx;

						.bigNumber {
							font-size: 50rpx;
						}
					}

					.soldOut {
						margin-left: 20rpx;
						background-color: #b2b2b2;
						color: #FFFFFF;
						border-radius: 20rpx;
						text-align: center;
						width: 160rpx;
						height: 40rpx;
					}

					.getCouponWrap {
						.greaterThan {
							margin-left: 12rpx;
						}
					}
				}
				// 弹框
				.popup{
					.receiveCoupon{
						height: 800rpx;
						background-color: #FFFFFF;
						border-top-left-radius: 40rpx;
						border-top-right-radius:40rpx;
						.title{
							padding-top: 20rpx;
						}
						.discountCoupon{
							margin-top: 100rpx;
						}
					}
				}
				// 保障信息
				.safeguard {
					margin: 20rpx;
					margin-top: 40rpx;
					border: 2rpx solid #eeeeee;
					height: 60rpx;
					padding: 20rpx;
				}

				// 选择规格
				.specification {
					margin: 60rpx 30rpx;
				}
			}

		}

		// 评论
		.commentContainer {
			background-color: #FFFFFF;
			padding: 30rpx;
			margin: 30rpx 0rpx;
			.commentInfo {
				padding: 30rpx 0rpx;

				.praise {
					display: flex;
					align-items: center;

					.vessel {
						.imgWrap {
							width: 80rpx;
							height: 80rpx;

							.headPortrait {
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}

						.nickname {
							margin-left: 30rpx;

							.name {
								color: #444444;
							}

							.dateTime {
								font-size: 20rpx;
								color: #999999;
							}
						}
					}

					.star {}
				}

				.commentWrap {
					.comment {
						margin: 30rpx 0rpx;
						color: #666666;
					}

					.picturesContainer {
						width: 200rpx;
						height: 200rpx;

						.pictures {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		// 商品详情
		.detailContainer {
			margin-bottom: 180rpx;
			background-color: #FFFFFF;

			.goodsDetail {
				padding: 30rpx;
			}

			.detailImg {
			}
		}
	}

	// 商品导航
	.goodsNavigation {
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 30rpx;

		.serviceWrap {
			.service {
				text-align: center;

				.serviceIcon {
					font-size: 40rpx;
				}

				.serviceTitle {
					font-size: 20rpx;
				}
			}

			.shopping {
				margin-left: 60rpx;
				text-align: center;

				.cartIcon {
					font-size: 40rpx;
				}

				.cartTitle {
					font-size: 20rpx;
				}
			}
		}

		.buyContainer {
			margin-left: 80rpx;

			.cart {
				border: 1rpx solid #cccccc;
				border-radius: 6rpx;
				background-color: #ffffff;
				font-size: 20rpx;
				height: 80rpx;
				width: 200rpx;
			}

			.buy {
				margin-left: 30rpx;
				border: 1rpx solid #cccccc;
				border-radius: 6rpx;
				background-color: #2b2e3d;
				color: #FFFFFF;
				font-size: 20rpx;
				height: 80rpx;
				width: 200rpx;
			}
		}
	}
</style>
