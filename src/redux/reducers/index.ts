import { combineReducers } from 'redux';

import productsReducer from './products';
import basketReducer from './basket';
import advantagesReducer from './advantages';
import productPageReducer from './productPage';

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    advantages: advantagesReducer,
    productPage: productPageReducer
})

export default rootReducer;