//  SELECTORS
export const getAllCart = state => state.cart;

//  ACTIONS
const createActionName = actionName => `app/cart/${actionName}`;
const GET_CART = createActionName('GET_CART');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const REMOVE_ALL = createActionName('REMOVE_ALL');

//  ACTION CREATORS
export const getCart = payload => ({ type: GET_CART, payload });
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const removeFromCart = payload => ({ type: REMOVE_FROM_CART, payload });
export const removeAll = payload => ({ type: REMOVE_ALL, payload});

/*  API
export const fetchCart = () => {
  return(dispatch) => {
    fetch("/api/cart")
    .then(res => res.json())
    .then(cart => {dispatch(getCart(cart))})
  }
};

export const fetchAddToCart = (editCart) => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editCart)
    };
    fetch("/api/cart", options)
    .then(res => res.json())
    .then(editCart => dispatch(addToCart(editCart)))
  }
};
*/

const cartReducer = (statePart = [], action) => {
  switch(action.type) {
    case GET_CART:
      return [...action.payload]
    case ADD_TO_CART:
      return [...statePart, {...action.payload}]
    case REMOVE_FROM_CART:
      return statePart.filter(product => product.id !== action.payload);
    case REMOVE_ALL:
      return statePart = []
    default:
      return statePart
  }
};

export default cartReducer;
