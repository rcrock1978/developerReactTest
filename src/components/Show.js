import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  basket: {}
		};
	}

	componentDidMount() {
		axios.get('/api/basket/'+this.props.match.params.id)
		  .then(res => {
			this.setState({ basket: res.data });
			console.log(this.state.basket);
		  });
	  }
	
	delete(id){
		console.log(id);
		axios.delete('/api/basket/'+id)
		  .then((result) => {
			this.props.history.push("/")
		});
	}

	render() {
		return(
			<div class="container">
			<div class="panel panel-default">
			  <div class="panel-heading">
				<h3 class="panel-title">
				  {this.state.basket.Item}
				</h3>
			  </div>
			  <div class="panel-body">
				<h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Items List</Link></h4>
				<dl>
				  <dt>Item:</dt>
				  <dd>{this.state.basket.Item}</dd>
				  <dt>Price:</dt>
				  <dd>{this.state.basket.Price}</dd>
				</dl>
				<Link to={`/edit/${this.state.basket._id}`} class="btn btn-success">Edit</Link>&nbsp;
				<button onClick={this.delete.bind(this, this.state.basket._id)} class="btn btn-danger">Delete</button>
			  </div>
			</div>
		  </div>
		);
	}

}

export default Show;