<template>

	<view>
		
		<view class="top">

			<view class="box">
				<text>姓名</text>
				<input v-model="name" placeholder="收货人姓名"></input>

			</view>


			<view class="box">
				<text>手机号</text>
				<input v-model="mobile" placeholder="收货人手机号" @blur="mobileJiaoyan"></input>

			</view>


			<view class="shenSi box">
				<text style="margin-right: 0;">省市区</text>
				<cl-select-region @change="shensi" ></cl-select-region>
			</view>


			<view class="box">
				<text>详细地址</text>
				<input v-model="address" placeholder="街道门牌,楼层房间号等信息"></input>

			</view>


		</view>
	
		<view class="middle">
			<text>设置默认地址</text>
			<u-switch v-model="isDefault" @change="switchBtn" activeColor="#ee0a24"></u-switch>
		</view>
	
		<button class="addressSubmit" @click="submit">添加</button>
<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	import {setAddress} from "api/address.js"
	
	
	export default {

		data() {
			return {
				name: '',
				mobile: '',
				selectAddressVal: '',
				address: '',
				isDefault: false,
				
				phoneState: false,
				addressShensi: '',
			}
		},
		methods: {
			shensi(...e){
				this.selectAddressVal = e
			},
			mobileJiaoyan(){
				let number = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
				if(!this.mobile.match(number) && this.mobile.length != 0){
					this.$refs["toast"].open({
					          message: "手机号格式有误",
							  position: "middle",
							  icon: "error",
					        });
					this.phoneState = false
				}else{
					
					this.phoneState = true
				}
			},
			async submit() {
				let token = uni.getStorageSync('token')
				let userInfo = uni.getStorageSync("userInfo")
				if(this.name != '' && this.phoneState != false && this.selectAddressVal != '' && this.address != ''){
					let message = {
						name:this.name,
						userid: userInfo.id,
						isDefault: this.isDefault,
						address: this.address,
						mobile: this.mobile,
						provinceId: this.selectAddressVal[0].value,
						cityId: this.selectAddressVal[1].value,
						areaId: this.selectAddressVal[2].value,
						province: this.selectAddressVal[0].label,
						city: this.selectAddressVal[1].label,
						area: this.selectAddressVal[2].label,
					}
					let data = await setAddress(message,token)
					this.$refs["toast"].open({
					          message: "添加成功",
							  position: "middle",
							  icon: "success",
					        });
							setTimeout(() => {
								uni.navigateTo({
									url:"/pages/address/addressList"
								})
							},500)
					
				}else{
					
						this.$refs["toast"].open({
						          message: "填写信息有误",
								  position: "middle",
								  icon: "error",
						        });
						
				}
				
			},
			switchBtn(e){
				this.isDefault = e
			},
			
		},
		created() {
			
		},
	};
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
	}
	
	.top{
		background-color: white;
		border-radius: 10px;
	}
	
	.middle{
		background-color: white;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 5%;
		width: 90%;
		position: relative;
		top: 30px;
		border-radius: 10px;
	}

	.box {
		width: 90%;
		margin: auto;
		padding: 10px 0px;
		height: 25px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f7f7f7;
		color: black;
		>text {
			font-size: 14px;
			width: 70px;
			float: left;
			height: 100%;
			display: flex;
			align-items: center;
			margin-right: 10px;
		}

		input {
			font-size: 14px;
		}
	}

	.shenSi {
		width: 90%;
		margin: auto;
		font-size: 14px;
		color: black;
		text {
			display: flex;
			align-items: center;
			font-size: 14px;
			height: 100%;
		}

		.cl-select>text {
			position: absolute;
			right: 10px;
		}

		cl-select-region {
			width: 74%;
		}
	}

	.addressSubmit {
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #ee0a24;
		color: white;
		border-radius: 10px 10px 0 0;
	}
	
</style>
