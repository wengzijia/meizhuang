<template>
	<view class="home-container">
		<!-- 搜索框 -->
		<u-sticky bgColor="#FFFF">
			<view class="nav-search">
				<u-search :clearabled="true" :showAction="false" :placeholder="search" @focus='goSearch'></u-search>
			</view>
		</u-sticky>

		<good_swiper :dataList="imgList"></good_swiper>
		<scroll-view scroll-x="true" class="sort">
			<view class="categoryL">
				<block v-for="item in categorylData" :key="item.name">
					<sort :categorylList="item"></sort>
				</block>
			</view>
		</scroll-view>
		<view class="recommend">
			<view class="main-item">
				热门推荐
			</view>
			<view class="vice-item">
				T O P P I C K S
			</view>
		</view>
		<view class="goods-list">
			<block v-for="item in goods_list" :key="item.id">
					<good :goodsList="item"></good>
			</block>
		</view>
	</view>
</template>

<script>
	import good_swiper from '../../components/swiper/swiper'
	import good from '../../components/good/good'
	import sort from '../../components/sort/sort'
	import {
		fetchindexData
	} from "../../api/home.js"
	export default {
		data() {
			return {
				height_scr: 0,
				categorylData: {},
				goods_list: [],
				search: "搜索商品名称，链接",
				imgList: [],
				value1: 0,
			}
		},
		onLoad() {
			this._fetchhomeData();
		},
		onReady() {
			this.getWindowHeight()
		},
		methods: {
			getWindowHeight() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.nav-search').boundingClientRect(data => {
					uni.getSystemInfo({
						success: (res) => {
							this.height_scr = res.windowHeight - data.height
						}
					})
				}).exec()
			},
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			// 跳转到搜索页面
			goSearch() {
				uni.navigateTo({
					url: "../search/index"
				})
			},
			// 获取首页数据
			async _fetchhomeData() {
				let {
					code,
					data
				} = await fetchindexData();
				if (code !== 20000) {
					uni.showToast('服务器繁忙，稍后重试');
					return;
				}
				this.imgList = data.swipe;
				this.categorylData = data.categoryL1;
				this.goods_list = data.newgoods
			}
		},
		components: {
			good_swiper,
			good,
			sort
		},
	}
</script>

<style scoped lang="scss">
	.home-container {
		position: relative;

		.nav-search {
			height: 100rpx;
			line-height: 100rpx;
			padding: 0rpx 16rpx;
		}

		.sort {
			margin-top: 20rpx;

			.categoryL {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				width: 1380rpx;
			}
		}

		.recommend {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			margin-top: 10rpx;

			.main-item {
				font-weight: 700;
			}

			.vice-item {
				color: #999999;
				font-size: 24rpx;
				font-weight: 400;
				margin-top: 4rpx;
			}
		}


		.goods-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0rpx 10rpx;
		}
	}
</style>
