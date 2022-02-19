import
Vue
from "vue";
import
Vuex
from "vuex";
Vue.use(Vuex);
const state = new Vuex.Store({
	state: {
		token: "",
		cartData: [],

	},
	mutations: {

		// 清空购物车信息
		emptyCart(state) {
			state.cartData = []
		},

		setToken(token, state) {
			state.token = token
		},

		// 选中的删除
		DeleteItem(state, id) {
			state.cartData = state.cartData.filter(item => item.id !== id)
		},

		// 设置选中的状态
		selectedStatus(state, {
			id,
			isOnsale
		}) {
			let index = state.cartData.findIndex(item => item.id === id)
			state.cartData[index].isOnsale = isOnsale
		},
		// 计步器的购买数量
		Pedometer(state, {
			id,
			number
		}) {
			let index = state.cartData.findIndex(item => item.id === id)
			state.cartData[index].number = number
		},
	},

	getters: {

		getGoodsNumberById(state) {
			let goodsId = {}
			state.cartData.forEach(item => {
				goodsId[item.id] = item.isOnsale
			})
			return goodsId
		},

		getselectGoods(state) {
			let SelectGoods = 0
			state.cartData.forEach(item => {
				item.isOnsale && (SelectGoods += item.number)
			})
			return SelectGoods
		},
		getpriceTotal(state) {
			let priceTotal = 0
			state.cartData.forEach(({
				price,
				number,
				isOnsale
			}) => isOnsale && (priceTotal += number * price))
			return priceTotal
		},

	}
})

export default state
