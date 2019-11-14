import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.basket
    state[e.target.name] = e.target.value;
    this.setState({basket:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { Item, Price } = this.state.basket;

    axios.put('/api/basket/'+this.props.match.params.id, { Item, Price })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT ITEM
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.basket._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Basket Item</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Item">Item:</label>
                <input type="text" class="form-control" name="Item" value={this.state.basket.Item} onChange={this.onChange} placeholder="ITEM" />
              </div>
              <div class="form-group">
                <label for="Price">Title:</label>
                <input type="text" class="form-control" name="Price" value={this.state.basket.Price} onChange={this.onChange} placeholder="PRICE" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;