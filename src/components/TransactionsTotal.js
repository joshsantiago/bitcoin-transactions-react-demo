import React from 'react';
import { connect } from 'react-redux';
import '../styles/TransactionsTotal.css';

const TransactionsTotal = (props) => {
  return (
    <div className="TransactionsTotal">
      {(!isNaN(props.total)) ? Number(props.total).toLocaleString('en') : 0 } <span className="ticker">BTC</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.transactions.total
  }
};

export default connect(mapStateToProps, null)(TransactionsTotal);

