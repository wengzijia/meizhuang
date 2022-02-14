<template>

	<view class="tab">

		<Goods v-for="(item,index) in searchData" :goodsList="item"></Goods>


	</view>


</template>

<script>
	import Goods from '../../components/good.vue';
	import {
		fetchSearch
	} from '../../api/index.js'
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
