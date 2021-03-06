import React from 'react';
import Plot from 'react-plotly.js';

let mountTimer, clickTimer;

class Stock extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      inputStock: 'AMZN',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick(e){
    e.preventDefault()
    clearInterval(mountTimer)
    setInterval(()=> {
      console.log('onClick Calling 5 seconds');
        this.fetchStock();
     }, 5000)
   
  }

  handleOnChange(e){
    this.setState({inputStock: e.target.value})
    console.log(e.target.value);
  }

   componentDidMount() {
     mountTimer = setInterval(()=> {
       console.log('MOUNT Calling 5 seconds');
         this.fetchStock();
      }, 5000)
     
    }

  async fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'YLBQGZ4Z2TRWI8LV';
    // let StockSymbol = 'FB';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.inputStock}&outputsize=compact&interval=5min&outputsize=full&apikey=${API_KEY}`
  
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    await fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (5min)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <div>
        
        {/* <input id = 'stock_val' type='text'>Search your stock</input> */}
        <h1>REAL TIME STOCK PRICE CHART</h1>
        <form  style= {{marginTop: 10}}>
          <label>
            Stock
            <input onChange={this.handleOnChange} id = "stock" type="text" name="stock-name" value={this.state.inputStock}/>
          </label>
          <input onClick={this.handleOnClick} type="submit" value="Submit" />
          <h6> Sample Input are like AMZN, TSLA, FB, MSFT, and so on</h6>
        </form>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1000, height: 640}}
        />
      </div>
    )
  }
}

export default Stock;