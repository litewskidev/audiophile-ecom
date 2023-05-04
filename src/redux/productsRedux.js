// SELECTORS
export const getAllProducts = state => state.products;
export const getHeadphones = ({ products }) => products.filter(product => product.category === "headphones");
export const getSpeakers = ({ products }) => products.filter(product => product.category === "speakers");
export const getEarphones = ({ products }) => products.filter(product => product.category === "earphones");

//  ACTIONS
const createActionName = actionName => `app/products/${actionName}`;
const GET_PRODUCTS = createActionName('GET_PRODUCTS');

//  ACTION CREATORS
export const getProducts = payload => ({ type: GET_PRODUCTS, payload});
export const fetchProducts = () => {
  return(dispatch) => {
    fetch("/api/products")
    .then(res => res.json())
    .then(products => {dispatch(getProducts(products))})
  }
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload]
    default:
      return statePart
  }
};

export default productsReducer;
