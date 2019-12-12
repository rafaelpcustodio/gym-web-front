import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, compose, createStore } from 'redux';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router/immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isImmutable, Map } from 'immutable';
import { environments } from '../constants/environments';
import { config } from './config';
import history from './history';
import { reducers } from './reducers';

import { sagas } from './sagas';

const logger = createLogger({
  actionTransformer: ({ type, payload }) => {
    if (isImmutable(payload)) {
      return {
        payload: payload.toJS(),
        type,
      };
    }
    return { payload, type };
  },
  stateTransformer: state => state.toJS(),
});

const sagaMiddleware = createSagaMiddleware();

const initialState = Map({});
const enhancers = [];
const middleware = [routerMiddleware(history), sagaMiddleware];

if (config.app.environment === environments.development) {
  middleware.push(logger);
}

const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  compose(composeWithDevTools(applyMiddleware(...middleware), ...enhancers))
);

sagaMiddleware.run(sagas);

export { store };
