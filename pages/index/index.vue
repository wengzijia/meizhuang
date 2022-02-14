<template>
	<view class="content">
		<view>
			<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
				:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
		</view>
	</view>
</template>

<script>
	import zySearch from '../../components/zy-search/zy-search.vue'
	import {fetchSearch} from '../../api/index.js'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				title: 'Hello',
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['口红', '洗面奶', '身体乳'] //初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				uni.showToast({
					title: '搜索信息: ' + e,
					icon: "none"
				}),
				console.log(e);
				
			}
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
