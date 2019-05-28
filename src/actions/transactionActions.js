import { SET_TRANSACTION } from '../constants/actionTypes';
import satoshiToBitcoin from '../utils/satoshiToBitcoin';

export const setTransaction = transaction => {
  return dispatch => {
    const item = {
      hash: transaction.x.hash,
      from: transaction.x.inputs[0].prev_out.addr,
      to: transaction.x.out[0].addr,
      amount: satoshiToBitcoin(transaction.x.out[0].value),
      time: transaction.x.time 
    };

    dispatch({
      type: SET_TRANSACTION,
      payload: {
        item,
        total: item.amount
      }
    });
  };
};