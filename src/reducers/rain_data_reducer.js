import { LOAD_RAIN_DATA } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_RAIN_DATA:
      return action.payload;
      break;
    default:
    return state;
  }
}
