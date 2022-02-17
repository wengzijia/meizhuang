<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">

	/*每个页面公共css */
	/* 引入vant组件里的css样式,不然vant组件样式会失效 */
 /* #ifdef H5 */
@import 'vant/lib/index.css';
 /* #endif */

	@import "./static/iconfont.css";
	@import "@/uni_modules/uview-ui/index.scss";


</style>
