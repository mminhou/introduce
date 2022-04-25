import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware({
  context: {
    //   history: customHistory,
  },
});

const rootStore = () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  return store;
};

export default rootStore;
export type RootStore = ReturnType<typeof rootStore>;
