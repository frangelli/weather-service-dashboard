import React from 'react';
import {loadRainData, changeTemperature, changePressure} from './actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Slider from './components/slider';

class App extends React.Component {

  componentDidMount() {
    this.props.loadRainData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 dashboard-widget">
            <Slider title="Pressure [hPa]" onChange={this.props.changePressure} minValue="970" maxValue="1030" value={this.props.pressure}/>
          </div>
          <div className="col-sm-6 dashboard-widget">
            {this.props.pressure}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 dashboard-widget">
            <Slider title="Temperature [C°]" onChange={this.props.changeTemperature} minValue="10" maxValue="35" value={this.props.temperature}/>
          </div>
          <div className="col-sm-6 dashboard-widget">
            {this.props.temperature}
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
    temperature: state.temperature
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
