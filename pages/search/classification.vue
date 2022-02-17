<template>
	<view class="tab">
		<block v-for="(item,index) in searchData">
		<navigator open-type="navigate" :url="'/pages/goodsDetail/goodsDetail?id='+item.id">
		<Goods v-for="(item,index) in searchData" :goodsList="item"></Goods>
		</navigator>
		</block>
	</view>
</template>

<script>
	import Goods from '../../components/good.vue';
	import {
		fetchSearch
	} from '../../api/search.js'
	export default {
		components: {
			Goods
		},
		data() {
			return {
			searchData:[]
			};
		},
		methods: {
			switchover: function(id) {
				console.log(id)
			},
			async search(page, size, keyWord) {
				let {
					data
				} = await fetchSearch(page, size, keyWord)
				this.searchData = data.list
				console.log(this.searchData)
			}
		},
		created() {

		},
		onLoad(openid) {
			this.search(1, 10, openid.keyWord)

		}
	}
</script>

<style scoped>
	.tab {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: #f2f2f2;
	}
</style>
