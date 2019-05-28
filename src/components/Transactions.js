import React from 'react';
import { connect } from 'react-redux';
import { Segment, List, Placeholder, Divider } from 'semantic-ui-react';
import '../styles/Transactions.css';

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }
  }

  render() {
    const transactions = this.props.items.map((item, index) => {
      return (
        <List.Item key={index}>
          <List.Content>
            <div className="addresses">
              <div className="address" alt={item.from}>{item.from}</div>
              <i aria-hidden="true" className="arrow down icon"></i>
              <div className="address">{item.to}</div>
            </div>

            <div className="amount">{item.amount} BTC</div>
          </List.Content>
        </List.Item>
      )
    })

    return (
      <div className="Transactions">
        <Segment inverted> 
          <List divided inverted relaxed>
            {(transactions.length > 0) ? transactions : (
              <div>
                <Placeholder inverted>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>   
              
                <Divider />

                <Placeholder inverted>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>  

                <Divider />

                <Placeholder inverted>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>  
              </div>             
            )}
          </List>
        </Segment>
    </div>
    ); 
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.transactions.items
  }
};

export default connect(mapStateToProps, null)(Transactions);