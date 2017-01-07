const defaultState = {
  temperature: 15,
  pressure: 970,
  chanceOfRainData: [],
  rainData: []
}

import { CHANGE_PRESSURE, CHANGE_TEMPERATURE, LOAD_RAIN_DATA } from '../actions';

function chanceOfRain(pressure, temperature, amount) {
  let score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
  let mean = Math.min(Math.max(score, 0), 100);
  return  {
    mean: mean,
    upperBound: Math.min(1.5 * mean, 100),
    lowerBound: Math.max(0.5 * mean, 0)
  }
}

function generateChanceOfRainData(pressure, temperature, rainData) {
  return rainData.map((day) => {
    let chance = chanceOfRain(pressure, temperature, day.amount);
    return Object.assign({}, day, chance);
  });
}


export default (state = defaultState, action) => {
  let newChanceOfRainData = [];
  switch (action.type) {
    case CHANGE_PRESSURE:
      let newPressure = action.payload;
      newChanceOfRainData = generateChanceOfRainData(newPressure, state.temperature, state.rainData);
      return Object.assign({}, state, {pressure: newPressure, chanceOfRainData: newChanceOfRainData});
    case CHANGE_TEMPERATURE:
      let newTemperature = action.payload;
      newChanceOfRainData = generateChanceOfRainData(state.pressure, newTemperature, state.rainData);
      return Object.assign({}, state, {temperature: newTemperature, chanceOfRainData: newChanceOfRainData});
    case LOAD_RAIN_DATA:
      let newRainData = action.payload.data[0].days;
      newChanceOfRainData = generateChanceOfRainData(state.pressure, state.temperature, newRainData);
      return Object.assign({}, state, {rainData: newRainData, chanceOfRainData: newChanceOfRainData});
    default:
    return state;
  }
}
