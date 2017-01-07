import { CHANGE_TEMPERATURE } from '../actions';

export default (state = 10, action) => {
  switch (action.type) {
    case CHANGE_TEMPERATURE:
      return action.payload;
      break;
    default:
    return state;
  }
}
