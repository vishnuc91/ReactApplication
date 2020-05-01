import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { Line } from 'react-chartjs-2';


class TableData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {

    return (
      <div className="App">
        
        <div className="ag-theme-balham" style={{ height: '400px', width: '600px' }}>
          <AgGridReact
            columnDefs={this.props.columns}
            rowData={this.props.rows}>
          </AgGridReact>

        </div>
      </div>
    );
  }
}

//Not needed since we call this component inside Linchart
// export default TableData;

class LineChart extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {}
    this.state = {
      labels: ['1511161234', '1511161234', '1511161238', '1511161210', '1511161278', '1511161298'],
      datasets: [
        {
          label: 'Temperature',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [26.5, 23.5, 22.4, 21.0, 28.0, 32.0]
        }
      ],
      columnDefs: [
        { headerName: "Temperature", field: "reading" },
        { headerName: "Time", field: "timestamp" },
        { headerName: "SensorType", field: "sensorType" }],
      rowData: [{ reading: 26.0, timestamp: 1511161234, sensorType: "Temperature" },
      { reading: 26.5, timestamp: 1511161234, sensorType: "Temperature" },
      { reading: 23.5, timestamp: 1511161236, sensorType: "Temperature" },
      { reading: 22.4, timestamp: 1511161238, sensorType: "Temperature" },
      { reading: 21.0, timestamp: 1511161210, sensorType: "Temperature" },
      { reading: 28.0, timestamp: 1511161278, sensorType: "Temperature" },
      { reading: 32.0, timestamp: 1511161298, sensorType: "Temperature" }]
    }

  }

  render() {

    return (
      <div>
        <TableData columns={this.state.columnDefs} rows={this.state.rowData} />
        <Line
          width={50}
          height={10}
          data={this.state}
          options={{
            title: {
              display: true,
              text: 'Temperature from IOT Device',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }

}

export default LineChart;
