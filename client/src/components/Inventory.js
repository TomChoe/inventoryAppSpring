import React, { Component } from 'react';
import Services from '../Services';

export default class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			data: null
		}
	}

	componentDidMount() {
		Services.getAllInventory()
		  .then(inventory => {
		  	this.setState({
		  		loaded: true,
		  		data: inventory.data
		  	})
		  })
		  .catch(err => {
		  	console.log('error getting inventory', err.response)
		  })
	}

	render() {
		console.log(this.state.data);
		return(
			<div>
				<h1>Current Inventory</h1>
			</div>
		)
	}
}