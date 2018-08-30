import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services';
import Product from './Product';

import Header from './static/Header'

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

	showItems() {
		return this.state.data.map(product => {
			return <Product key={product.id} product={product} />
		})
	}

	render() {
		return(
			<div>
				<Header />
				<Link to="/add"><button>Add Product to inventory</button></Link>
				<h1>Current Inventory</h1>
				<small>as of {new Date().toDateString()}</small>
				{this.state.loaded ? this.showItems() : ''}
			</div>
		)
	}
}