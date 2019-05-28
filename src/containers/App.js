import React from 'react';
import { connect } from 'react-redux';
import { setTransaction } from '../actions/transactionActions';
import AsideLeft from '../components/AsideLeft';
import Main from '../components/Main';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    // Create WebSocket connection.
    const socket = new WebSocket('wss://ws.blockchain.info/inv');

    // Connection opened
    socket.addEventListener('open', (event) => {
      socket.send('{"op":"unconfirmed_sub"}');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      if ('data' in event) {
        const transaction = JSON.parse(event.data);
        this.props.setTransaction(transaction);
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        <AsideLeft />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTransaction: (transaction) => dispatch(setTransaction(transaction))
  }
};

export default connect(null, mapDispatchToProps)(App);
