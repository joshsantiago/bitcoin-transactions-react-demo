import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import moment from 'moment';
import bitcoinIcon from '../images/bitcoin.svg';
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.blockchain.info/charts/n-transactions?timespan=8days&cors=true&format=json')
      .then((res) => {
        const data = res.data.values.map((day) => {
          return {
            name: moment(day.x, 'X').utc().format('MM/D'),
            transactions: day.y
          }
        });

        this.setState({ chartData: data });
      });
  }

  render() {
    return (
      <div className="Main">
        <a href = "#" className="logo">
          <img src={bitcoinIcon} width="40" height="40" />
          Bitcoin
          <span className="ticker">(BTC)</span>
        </a>
  
        <p className="chart-title">#Transactions (past 7 days)</p>
        <ResponsiveContainer width={900} height="70%">
          <AreaChart
            data={this.state.chartData}
            margin={{
              left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="transactions" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default Main;