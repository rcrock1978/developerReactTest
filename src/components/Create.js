import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

	constructor() {
		super();
		this.state = {
		  Item: '',
		  Price: ''
		};
	  }

	  onChange = (e) => {
		const state = this.state
		state[e.target.name] = e.target.value;
		console.log(state);
		this.setState(state);
	  }

	  onSubmit = (e) => {
		e.preventDefault();
	
		const { Item, Price } = this.state;
	
		axios.post('/api/basket', { Item, Price })
		  .then((result) => {
			this.props.history.push("/")
		  });
	  }

	  render() {
		const { Item, Price } = this.state;
		return (
			<div class="container">
				<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
					ADD ITEM
					</h3>
				</div>
				<div class="panel-body">
					<h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Basket List</Link></h4>
					<form onSubmit={this.onSubmit}>
					<div class="form-group">
						<label for="Item">ITEM:</label>
						<input type="text" class="form-control" name="Item" value={Item} onChange={this.onChange} placeholder="ITEM" />
					</div>
					<div class="form-group">
						<label for="Price">PRICE:</label>
						<input type="text" class="form-control" name="Price" value={Price} onChange={this.onChange} placeholder="PRICE" />
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
				</div>
			</div>
		);

	  }

}

export default Create;