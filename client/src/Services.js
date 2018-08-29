import axios from 'axios';

const Services = {
	getAllInventory() {
		return axios({
			method: "GET",
			url: "/products"
		})
	}
}

export default Services;