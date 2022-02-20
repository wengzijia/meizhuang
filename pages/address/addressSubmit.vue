<template>
<<<<<<< HEAD
<view>
		
		
			<view class="box">
				
			<cl-input v-model="name" placeholder="收货人姓名"></cl-input>
			
			</view>
		  
		  
		  <view class="box">
			  
			  <cl-input v-model="number" placeholder="收货人手机号"></cl-input>
		
		  </view>
		  
		  
		 <view class="shenSi">
		   
		  <cl-select-region :options="address"></cl-select-region>
		  
		  </view>
		  
		  
		   <view class="box">
			  
			<cl-input v-model="detailed" placeholder="街道门牌,楼层房间号等信息"></cl-input>
			
		  </view>
		
		<button class="addressSubmit" @click="submit">添加</button>
	
		
		
=======
	<view>


		<view class="box">

			<text>姓名</text>

			<input placeholder="收货人姓名" v-model="name" />
		</view>


		<view class="box">

			<text>电话</text>

			<input placeholder="收货人手机号" v-model="number" />
		</view>


		<view class="addressBtn">

			<van-field label="地区" placeholder="选择省/市/区" readonly="true" class="addressChoice" :value="diquData">
				<icon slot="button" class="iconfont icon-zhankai"></icon>

			</van-field>

			<view class="addressCover" @click="areaListShow = true"></view>

		</view>

		<view class="box">

			<text>详细地址</text>

			<input placeholder="街道门牌,楼层房间号等信息" v-model="detailed" />
		</view>

		<button class="addressSubmit" @click="submit">添加</button>


		<!-- 遮盖层 -->
		<view class="cover" v-if="areaListShow"></view>
		<!-- 选择省市区 -->
		<view class="areaList">

			<van-area :area-list="areaList" v-if="areaListShow" @confirm="queren" @cancel="areaListShow = false" />
		</view>


>>>>>>> c8d2394130a945ab67adeea8d2841611ac2633b4
	</view>
</template>

<script>
<<<<<<< HEAD
	import {address} from "static/address.js"
		
		export default {
			
			data(){
				return{
						name: '',
						number: '',
						diquData: '',
						detailed: '',
						address: '',
				}
			},
			methods:{
			submit(){
=======
	import {
		areaList
	} from 'wxcomponents/vant/area-data';
	import Toast from 'wxcomponents/vant/toast/toast.js';
	export default {

		data() {
			return {
				name: '',
				number: '',
				diquData: '',
				detailed: '',

				areaList,
				areaListShow: false,
			}
		},
		methods: {

			queren({
				detail
			}) {
				let data = '';

				detail.values.map(function(a) {
					return data += a.name

				})
				this.diquData = data
				this.areaListShow = false
			},

			submit() {
>>>>>>> c8d2394130a945ab67adeea8d2841611ac2633b4
				console.log(this.name)
				console.log(this.number)
				console.log(this.diquData)
				console.log(this.detailed)
			}
<<<<<<< HEAD
			
			},
			created(){
				this.address = address
				console.log(address)
			}
		};
=======

		} 
	}
>>>>>>> c8d2394130a945ab67adeea8d2841611ac2633b4
</script>

<style lang="scss">
	.box {
		width: 90%;
		margin: auto;
		padding: 10px 0px;
		// border: 2px solid black;

		text {
			color: #646566;
			font-size: 14px;
			width: 60px;
			float: left;
			// border: 2px solid blue;
		}

		input {
			border: 0;
			// width: 65%;
			font-size: 14px;
		}
	}
	
	.shenSi{
		width: 90%;
		padding: 0px 0px;
		margin: auto;
		font-size: 14px;
		text{
			display: inline-block;
			font-size: 14px;
			height: 25px;
			line-height: 25px;
			color: #808080;
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

	.areaList {
		width: 100%;
		position: fixed;
		z-index: 4;
		bottom: 0;
	}

	.cover {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.1);
		z-index: 3;
	}
</style>
