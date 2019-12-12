import * as configs from '../_environments/index';
import { environments } from '../constants/environments';

const environment =
  process.env.REACT_APP_ENVIRONMENT || environments.development;
const config = configs[environment];

export { config };
