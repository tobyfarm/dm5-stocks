// Import CONNECT is how you connect the data??
import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Stock from "./components/stock"
import stocks from "./stocks"
import {buyStock} from "./ducks/stocks";

class App extends Component {
  render() {

    const stockElements = stocks.map(stock =>(
      <Stock
        key={ stock.id }
        buyStock={() => this.props.dispatch( buyStock(stock.price, stock) ) }
        company={stock.company}
        price={stock.price}

      />
    ))

    const ownedStocks = this.props.stocks.map(stock =>(
      <Stock
        key={ stock.id }
        company={stock.company}
        price={stock.price}

      />
    ))

    console.log( this.props )
    return (

    	<div className="app">
        {this.props.balance}
        <ul>
          { stockElements}
        </ul>
        <h3> Owned Stocks </h3>

        {ownedStocks}

      </div>
    );
  }
}

// NOTE below is where you connect his componeent with the data you want to pass in...This is going to give app access to react props..
const decorator = connect( state => state )
// this connect tells what data we want.. above example we called all of the data we own...
const decoratedComponent = decorator(App)
// Above you are calling the component
// Below is the above example in a shorter version
// export default connect ( state => state )( App )
export default decoratedComponent;
// You can only have 1 default export
// NOTE Below is common
// function mapStateToProps(state){
 // return state }
//  const decorator = connect (mapStateToProps)
