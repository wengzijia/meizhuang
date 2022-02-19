<template>
	<view>
		
		

	<view v-for="item in data.items" :key="item.id" class="addressFor">
		
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
	import Toast from 'wxcomponents/vant/toast/toast.js';
	export default {
		data() {
			return {
				data: {
				        "total": 3,
				        "items": [
				            {
				                "area": "古冶区",
				                "isDefault": true,
				                "areaId": 431,
				                "address": "测试",
				                "province": "河北省",
				                "city": "唐山市",
				                "name": "sad",
				                "mobile": "13433334444",
				                "id": 13,
				                "cityId": 35,
				                "userId": 46,
				                "provinceId": 3
				            },
				            {
				                "area": "开平区",
				                "isDefault": false,
				                "areaId": 432,
				                "address": "1313",
				                "province": "河北省",
				                "city": "唐山市",
				                "name": "陈",
				                "mobile": "15917903777",
				                "id": 12,
				                "cityId": 35,
				                "userId": 46,
				                "provinceId": 3
				            },
				            {
				                "area": "宝安区",
				                "isDefault": true,
				                "areaId": 2124,
				                "address": "龙华新区龙华汽车站综合楼101",
				                "province": "广东省",
				                "city": "深圳市",
				                "name": "李小姐",
				                "mobile": "15817438225",
				                "id": 11,
				                "cityId": 231,
				                "userId": 47,
				                "provinceId": 19
				            }
				        ]
				    },
			};
		},
		methods:{
			addressAxios(){
				
				this.data.items.map(function(a){
				return a.addressMessage = a.province+a.city+a.area+a.address		  
				})
				
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
