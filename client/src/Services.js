import axios from 'axios';

const Services = {
	getAllInventory() {
		return axios({
			method: "GET",
			url: "/api/products"
		})
	},

	getOneItem(id) {
		return axios({
			method: "GET",
			url: `/api/products/${id}`
		})
	},

	createItem(item) {
		return axios({
			method: "POST",
			url: "/api/products",
			data: item
		})
	},

	updateItem(item) {
		return axios({
			method: "PATCH",
			url: `/api/products/${item.id}`,
			data: {
				productName: item.productName,
				productQuantity: item.productQuantity
			}
		})
	},

	deleteItem(id) {
		return axios({
			method: "DELETE",
			url: `/api/products/${id}`
		})

	}
}

export default Services;