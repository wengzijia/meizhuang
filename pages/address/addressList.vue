<template>
	<view>
		
		

	<view v-for="item in addressData" :key="item.id" class="addressFor">
		<cl-radio v-model="val" :label="item.id" @change="selectAddress(item.id)"></cl-radio>
		<view class="addressBox">
			

			<view>
				{{item.name}}
				{{item.mobile}}
			</view>
			
			<view class="addressMessage">
				{{item.addressMessage}}
			</view>
			
		</view>
		
		<icon class="iconfont icon-bianji" @click="change(item)">
			
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
				val: '',
				addressData: {},
			};
		},
		methods:{
		       selectAddress(id){
				   uni.setStorageSync('id',id)
				   uni.navigateBack()
					
				},
			async addressAxios(){
				
				let {data} = await getAddress()
				data.map(function(a){
				return a.addressMessage = a.province+a.city+a.area+a.address	  
				})
				
				this.addressData = data
				console.log(this.addressData)
			},
			change(e){
				
				uni.navigateTo({
					url:`/pages/address/addressChange?getaddress=${JSON.stringify(e)}`,
				})
			}
		},
		onLoad(option){
			this.addressAxios()
		}
	}
</script>

<style lang="scss">



.addressFor{
	display: flex;
	align-items: center;
	padding: 0 10px;
	position: relative;
	border-bottom: 1px solid #f1f1f1;
	icon{
		position: absolute;
		right: 20px;
	}
	.addressBox{
		width: 60%;
		font-size: 13px;
		padding: 8px 0;
		margin-left: 6px;
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
	width: 90%;
	position: fixed;
	bottom: 15px;
	left: 50%;
	transform: translateX(-50%);
	background-color: #ee0a24;
	color: white;
	border-radius: 50px;
}
</style>
