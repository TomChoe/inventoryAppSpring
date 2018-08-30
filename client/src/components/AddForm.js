import React, { Component } from 'react';

export default class AddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productName: '',
			productQuantity: 0
		}
		this.handleChange = this.handleChange.bind;
	}

	handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({[name]: value});
	}

	render() {
		return(
			<div>
				<form>
				  <p>Add product to database</p>
				  <label>Name of product</label>
				  <input type="text" name="productName" value={this.state.productName} />
				</form>
			</div>
		)
	}
}