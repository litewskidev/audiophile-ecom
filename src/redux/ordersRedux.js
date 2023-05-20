//  ACTIONS
const createActionName = actionName => `app/cart/${actionName}`;
const SEND_ORDER = createActionName('SEND_ORDER');

//  ACTIONS CREATORS
export const sendOrder = payload => ({ type: SEND_ORDER, payload });

//  API ORDERS
export const fetchSendOrder = (order) => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    };
    fetch("/api/orders", options)
    .then(order => dispatch(sendOrder(order)))
  }
};
