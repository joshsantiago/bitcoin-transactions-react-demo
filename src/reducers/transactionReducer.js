import { SET_TRANSACTION } from '../constants/actionTypes';

const initialState = {
  items: [],
  total: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
      case SET_TRANSACTION:
        return {
          items: [...state.items, action.payload.item],
          total: (state.total + action.payload.total)
        }
      default:
        return state;
  }
}