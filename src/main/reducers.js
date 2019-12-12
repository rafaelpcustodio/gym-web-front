import { handleActions } from 'redux-actions';

import { store } from './store';

const reducers = handleActions({}, store);

export { reducers };
