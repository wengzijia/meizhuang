<template>
	<view class="sort-container" :style="{height:windowHeight + 'px'}">
		<scroll-view scroll-y="true" style="height: 100%;" class="left-scroll" :scroll-top="side_scroll_H"
			:scroll-with-animation="true">
			<view class="left-item" :class="{active:index == selectIndex}" v-for="(item,index) in sortName"
				:key="item.id" @click="click_index(index)">
				<view class="text">
					{{item.name}}
				</view>
			</view>
		</scroll-view>

		<scroll-view scroll-y="true" class="right-scroll" :scroll-into-view="scroll_into_view" @scroll="node_scroll"
			:scroll-with-animation="true">
			<view class="right-item" v-for="(item,index) in sortName" :key="item.id">
				<view :id="'key_' + index" class="node_title">
					<u-divider :text="item.name"></u-divider>
				</view>
				<view class="content">
					<block v-for="item in sortContent[item.id]" :key="item.id">
						<view class="content-item">
							<image :src="item.picUrl" mode="scaleToFill" class="img"></image>
							<view class="context">{{item.name}}</view>
						</view>
					</block>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		fetch_sortData
	} from '../../api/sort.js'
	import {
		getWindowHeight
	} from '../../util/window.js'
	export default {
		data() {
			return {
				windowHeight: '', //窗口高度
				selectIndex: '', // 选中下标
				scroll_into_view: '', // 右边滚动指定位置
				right_node_detail: [], //内容滚动节点
				left_node_detail: [], //分类名称滚动节点
				scroll_top: 0, //设置滚动条位置
				side_scroll_H: 0,
				node_height: 0,
				sortName: [],
				sortContent: [],
			}
		},
		onLoad() {
			this.getSortData()
		},
		onReady() {
			this.windowHeight = getWindowHeight()
			this.$nextTick(function() {
				setTimeout(() => {
					this.get_node()
				}, 100)
			})
		},

		methods: {
			// 数据获取
			async getSortData() {
				let {
					data
				} = await fetch_sortData()
				let groupSort = {}
				data.category.forEach(item => {
					if (groupSort[item.pid]) {
						groupSort[item.pid].push(item)
					} else {
						groupSort[item.pid] = [item]
					}
				})
				this.sortName = data.category1
				this.sortContent = groupSort
			},
			click_index(index) {
				this.selectIndex = index
				this.scroll_into_view = 'key_' + index
				// 解决左边滚动选中时下标错位问题
				uni.setStorageSync("resolve", "last");
				setTimeout(() => {
					uni.clearStorageSync("resolve")
				}, 400);
				this.side_scroll_H = this.sortName[index].top - this.node_height / 2 + this.sortName[index].height / 2
			},
			// 节点获取
			get_node() {
				const query = uni.createSelectorQuery()
				query.select('.left-scroll').boundingClientRect(data => {
					this.node_height = data.height
				})
				query.selectAll('.left-item').boundingClientRect((data) => {
					for (let i = 0; i < data.length; i++) {
						// 节点距离顶部的高度
						this.sortName[i].top = data[i].top
						// 每个节点的高度
						this.sortName[i].height = data[i].height
					}
				}).exec()
			},
			// 节点滚动
			node_scroll(options) {
				if (!uni.getStorageSync("resolve")) {
					this.get_node_details(options);
				};
			},
			// 获取所有节点信息
			get_node_details(options) {
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.node_title').boundingClientRect(res => {
					this.right_node_detail = res.map(item => {
						return Math.ceil(item.top)
					})
					this.async_detail_msg(options);
				}).exec()
			},
			async_detail_msg(options) {
				let top_page = options.detail.scrollTop + this.right_node_detail[0];
				for (let i = 0; i < this.right_node_detail.length; i++) {
					let currentNode = this.right_node_detail[i];
					let nextNode = this.right_node_detail[i + 1];
					if (nextNode && top_page >= currentNode && top_page < nextNode) {
						this.selectIndex = i;
						this.side_scroll_H = this.sortName[i].top - this.node_height / 2 + this.sortName[i].height / 2
						break;
					} else if (nextNode && top_page === nextNode) {
						this.selectIndex = i + 1
						this.side_scroll_H = this.sortName[i].top - this.node_height / 2 + this.sortName[i].height / 2
						break;
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sort-container {
		display: flex;

		.left-scroll {
			width: 30%;
			background-color: #f7f7f7;

			.left-item {
				color: #999999;
				height: 100rpx;
				display: flex;
				align-items: center;

				.text {
					width: 100%;
					text-align: center;
					font-size: 28rpx;
					padding: 6rpx 0rpx;
				}
			}

			.active {
				color: #000000;
				background-color: #FFFFFF;
			}

			.activeText {
				border-left: solid 1px #2b2e3d;
			}
		}

		.right-scroll {
			flex: 1;
			margin-left: 10rpx;

			.right-item {
				.u-divider {
					height: 100rpx;
					margin: 0;
				}

				.content {
					display: flex;
					flex-wrap: wrap;

					.content-item {
						height: 140rpx;
						width: 110rpx;
						text-align: center;
						margin: 10rpx 30rpx;

						.context {
							color: #444444;
							font-size: 24rpx;
							margin-top: 6rpx;
						}

						.img {
							width: 100%;
							height: 55%;
						}
					}
				}
			}
		}
	}
</style>
