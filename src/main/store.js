import { List, Record } from 'immutable';

const store = Record({
  test: List(),
})();

export { store };
