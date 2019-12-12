import { combineReducers } from 'redux-immutable';

import { reducers as mainReducers } from '../main/reducers';

const reducers = combineReducers({
  mainReducers,
});

export { reducers };
