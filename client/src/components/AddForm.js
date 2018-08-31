import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Services from '../Services';

export default class AddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productName: '',
			productQuantity: 0,
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({[name]: value});
	}

	formSubmit(e) {
		e.preventDefault();
		Services.createItem(this.state)
		  .then(item => {
		  	this.setState({ redirect: true })
		  })
		  .catch(err => {
		  	console.log('error submitting', err.response)
		  })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.formSubmit}>
				  <p>Add product to database</p>
				  <label>Name of product: </label>
				  <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange} /><br/>
				  <label>Quantity: </label>
				  <input type="number" name="productQuantity" value={this.state.productQuantity} onChange={this.handleChange} /><br/>
				  <button type="submit">submit</button>
				</form>
				{this.state.redirect ? <Redirect to="/inventory" /> : ''}
			</div>
		)
	}
}