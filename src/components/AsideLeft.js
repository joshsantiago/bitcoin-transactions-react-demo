import React from 'react';
import { Divider } from 'semantic-ui-react';
import Transactions from './Transactions';
import TransactionsTotal from './TransactionsTotal';
import '../styles/AsideLeft.css';

const AsideLeft = () => {
    return (
        <div className="AsideLeft">
					<h3>total bitcoins</h3>
					<TransactionsTotal />

					<Divider />

          <h3>transactions</h3>
					<Transactions />
        </div>
    );
};

export default AsideLeft;