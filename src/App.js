import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { blue } from 'ansi-colors';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      baskets:[]
    };
  }

  componentDidMount() {
    axios.get('/api/basket')
      .then(res => {
        this.setState({ baskets : res.data});
      })
  }

  total(items) {
    var total = 0;

   return items.map(item => {
      total += item.Price
      return total.toFixed(2);
    }); 

  }

  myTotal(items) {
    var total = 0;

    items.forEach(item => {
      total += item.Price;
    });

    return total.toFixed(2);
  }


  render() {
    return (
      <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">
            BASKET ITEMS
          </h3>
        </div>
        <div class="panel-body">
          <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add Item</Link></h4>
          <table class="table table-stripe">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.baskets.map(basket =>
                <tr>
                  <td><Link to={`/show/${basket._id}`}>{basket.Item}</Link></td>
                  <td>{basket.Price}</td>
                </tr>
              )}
            </tbody>
          </table>
          <h4 class="panel-title">
            Total: <span style={{color: "blue"}}>{this.myTotal(this.state.baskets)}</span>
          </h4>
        </div>
      </div>
    </div>
    );
  }

}

export default App;
