import { CHANGE_PRESSURE } from '../actions';

export default (state = 970, action) => {
  switch (action.type) {
    case CHANGE_PRESSURE:
      return action.payload;
      break;
    default:
    return state;
  }
}
