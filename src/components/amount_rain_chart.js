import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class AmountRainChart extends React.Component {

  render() {
    return (
      <div className="weather-chart">
      <span className="title"></span>
      <BarChart width={600} height={300} data={this.props.chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis label="Days" dataKey="day"/>
        <YAxis label="lm2"/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Bar dataKey="amount" fill="#575A82" />
      </BarChart>
      </div>
    );
  }

}

export default AmountRainChart;
