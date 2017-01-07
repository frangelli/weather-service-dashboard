import { combineReducers } from 'redux';
import rainDataReducer from './rain_data_reducer';
import pressureReducer from './pressure_reducer';
import temperatureReducer from './temperature_reducer';

const rootReducer = combineReducers({
  rainData: rainDataReducer,
  pressure: pressureReducer,
  temperature: temperatureReducer
});

export default rootReducer;
