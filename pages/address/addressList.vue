<template>
	<view>
		
		

	<view v-for="item in addressData.items" :key="item.id" class="addressFor">
		
		<view class="addressBox">
			
			<view>
				{{item.name}}
				{{item.mobile}}
			</view>
			
			<view class="addressMessage">
				{{item.addressMessage}}
			</view>
			
		</view>
		
		<icon class="iconfont icon-wenbenshuru">
			
		</icon>
		
		
	</view>
	
	<navigator url="./addressSubmit">
	<button class="addressBtn">添加地址</button>
	</navigator>
	
</view>
</template>

<script>
import {getAddress} from "api/address.js"

	export default {
		data() {
			return {
				addressData: {},
			};
		},
		methods:{
			async addressAxios(){
				
				let {data} = await getAddress()
				
				// data.items.map(function(a){
				// return a.addressMessage = a.province+a.city+a.area+a.address	  
				// })
				
				this.addressData = data
			}
		},
		created(){
			this.addressAxios()
		}
	}
</script>

<style lang="scss">

.addressFor:active{
	background-color: rgba(46, 44, 61,0.2);
	
}

.addressFor{
	display: flex;
	align-items: center;
	padding: 0 10px;
	justify-content: space-between;
	border-bottom: 1px solid #2e2c3d;
	.addressBox{
		width: 50%;
		font-size: 13px;
		padding: 8px 0;
		.addressMessage{
			margin-top: 4px;
			display: -webkit-box;
			-webkit-box-orient: vertical; 
			-webkit-line-clamp: 1; 
			overflow: hidden;
		}
	}
	}

.addressBtn{
	width: 100%;
	position: fixed;
	bottom: 0;
	background-color: #ee0a24;
	color: white;
	border-radius: 10px 10px 0 0;
}
</style>
