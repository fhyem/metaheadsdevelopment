import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import blockchainReducer from './blockchain/BlockchainReducers';
import dataReducer from './data/dataReducers';

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

const middleware = [thunk];
// const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const configureStore = (state) => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export const store = configureStore({});
