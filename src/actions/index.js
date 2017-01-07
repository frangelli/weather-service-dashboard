import axios from 'axios';

const ROOT_URL = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

export const LOAD_RAIN_DATA = 'LOAD_RAIN_DATA';
export const CHANGE_PRESSURE = 'CHANGE_PRESSURE';
export const CHANGE_TEMPERATURE = 'CHANGE_TEMPERATURE';

export function loadRainData() {
  const request = axios.get(ROOT_URL);
  console.log("ACTION");
  return {
    type: LOAD_RAIN_DATA,
    payload: request
  };
}

export function changePressure(pressure) {
  console.log("CHANGE PRESSURE");
  return {
    type: CHANGE_PRESSURE,
    payload: pressure
  };
}

export function changeTemperature(temperature) {
  console.log("CHANGE TEMPERATURE");
  return {
    type: CHANGE_TEMPERATURE,
    payload: temperature
  };
}
