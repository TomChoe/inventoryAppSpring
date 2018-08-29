import React, { Component } from 'react';
import Services from '../Services';

import Header from './static/Header'

export default class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			data: null,
			testData: [1,2,3,4,5]
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

	showItems() {
		return this.state.testData.map(data => {
			return <p>{data}</p>
		})
	}

	render() {
		{this.state.loaded ? console.log('data loaded' + this.state.data) 
						   : console.log('no data')}
		return(
			<div>
				<Header />
				<h1>Current Inventory</h1>
				<small>as of {new Date().toDateString()}</small>
				{this.showItems()}
			</div>
		)
	}
}