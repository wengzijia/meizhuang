<template>

	<view class="tab">

		<tab :lists="lists" :tab_color="tab_color" @switchover="switchover" :gauge="gauge"></tab>
		<Goods></Goods>
	</view>

</template>

<script>
	import Tab from '../../components/Tab.vue';
	import Goods from '../../components/good.vue'
	export default {
		components: {
			Tab,
			Goods
		},
		data() {
			return {
				//tab切换数组
				lists: [{
						id: 1,
						name: '綜合'
					},
					{
						id: 2,
						name: '銷量'
					},
					{
						id: 3,
						name: '價格'
					},
					{
						id: 4,
						name: '篩選'
					}, {
						id: 5,
						name: '篩選'
					}, {
						id: 6,
						name: '篩選'
					}, {
						id: 7,
						name: '篩選'
					},

				],
				//tab切换选中的颜色
				tab_color: '#3b87f6',
				// tab组件position: fixed布局距离头部的位置大小（rpx）
				gauge: 120
			};
		},
		methods: {
			switchover: function(id) {
				console.log(id)
			}
		}
	}
</script>

<style scoped>

</style>
