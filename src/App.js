import React from 'react';
import {loadRainData, changeTemperature, changePressure} from './actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Slider from './components/slider';
import AmountRainChart from './components/amount_rain_chart';
import ChanceOfRainChart from './components/chance_of_rain_chart';

class App extends React.Component {

  componentDidMount() {
    this.props.loadRainData();
  }

  render() {
    console.log(this.props.chanceOfRainData);
    return (
      <div className="container">
        <div className="row">
          <h1 className="dashboard-title">Weather Service Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="well dashboard-widget">
              <Slider title="Pressure [hPa]" onChange={this.props.changePressure} minValue="970" maxValue="1030" value={this.props.pressure}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dashboard-widget">
              <ChanceOfRainChart chartData={this.props.chanceOfRainData} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="well dashboard-widget">
              <Slider title="Temperature [C°]" onChange={this.props.changeTemperature} minValue="10" maxValue="35" value={this.props.temperature}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="dashboard-widget">
              <AmountRainChart chartData={this.props.rainData} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    rainData: state.rainData,
    pressure: state.pressure,
    temperature: state.temperature,
    chanceOfRainData: state.chanceOfRainData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadRainData: loadRainData,
    changePressure: changePressure,
    changeTemperature: changeTemperature
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
