<template>
	<view>
		
		
			<view class="box">
				
			<text>姓名</text>
			
			<input
		    placeholder="收货人姓名"
			v-model="name"
			/>	
			</view>
		  
		  
		  <view class="box">
			  
			  <text>电话</text>
			  
		  <input
		    placeholder="收货人手机号"
			v-model="number"
		  />
		  </view>
		  
		  
		  <view class="addressBtn">
		  <cl-select-region v-model="val"></cl-select-region>
		  <van-field
		  	label="地区"
		    placeholder="选择省/市/区"
			readonly="true"
			class="addressChoice"
			:value="diquData"
		  >
			      <icon slot="button" class="iconfont icon-zhankai"></icon>
					
		  </van-field>
		  
		  <view class="addressCover"  @click="areaListShow = true"></view>
		  
		  </view>
		  
		   <view class="box">
			   
			<text>详细地址</text>
			   
		  <input
		    placeholder="街道门牌,楼层房间号等信息"
			v-model="detailed"
		  />
		  </view>
		
		<button class="addressSubmit" @click="submit">添加</button>
		
		
		<!-- 遮盖层 -->
		<view class="cover" v-if="areaListShow"></view>
		<!-- 选择省市区 -->
		<view class="areaList">

		</view>
		
		
	</view>
</template>

<script>
	
		
		export default {
			
			data(){
				return{
						name: '',
						number: '',
						diquData: '',
						detailed: '',
						
						// areaList,
						// areaListShow: false,
				}
			},
			methods:{

			queren({detail}){
				let data = '';
				
				detail.values.map(function(a){
					return data += a.name
					
				})
				this.diquData = data
				this.areaListShow = false
			},
			
			submit(){
				console.log(this.name)
				console.log(this.number)
				console.log(this.diquData)
				console.log(this.detailed)
			}
			
			},
		};
</script>

<style lang="scss">

.box{
	width: 90%;
	margin: auto;
	border-bottom: 1px solid #f6f7f8;
	height: 25px;
	padding: 10px 0px;
	// border: 2px solid black;

	text{
		color: #646566;
		font-size: 14px;
		width: 60px;
		float: left;
		// border: 2px solid blue;
	}
	input{
		width: 65%;
		font-size: 14px;
		// float: left;
		// border: 2px solid red;
		margin-left: 100px;
	}
}

.addressBtn{
	position: relative;
	.addressCover{
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.addressCover:active{
		background-color: rgba(0,0,0,0.1);
	}
}

.addressSubmit{
	width: 100%;
	position: fixed;	bottom: 0;
	background-color: #ee0a24;
	color:white;
	border-radius: 10px 10px 0 0;
}

.areaList{
	width: 100%;
	position: fixed;
	z-index: 4;
	bottom: 0;
}

.cover{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.1);
	z-index: 3;
}

</style>
