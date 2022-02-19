<template>
	
</template>

<script>
	export default {
		onLoad() {
			let token = uni.getStorageSync('token')
			if(!token){
				uni.redirectTo({
					// #ifdef  H5
					url:'../login/h5login',
					// #endif
					// #ifdef MP-WEIXIN
					url:'../login/login',
					// #endif
				})
			}
		}
	}
</script>
<style>
</style>
