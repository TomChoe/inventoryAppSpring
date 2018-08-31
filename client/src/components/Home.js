import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {

	render() {
		return (
			<div>
				<h1>Inventory Management</h1>
				<small>Keep track of inventory</small>
				<br/>
				<br/>
				<button className="btn btn-primary"><Link to="/inventory" className="text-white">Current</Link></button>
			</div>
		)
	}
}