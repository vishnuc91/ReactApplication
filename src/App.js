import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';



class TableData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Temperature", field: "reading" },
        { headerName: "Time", field: "timestamp" },
        { headerName: "SensorType", field: "sensorType" }],
      rowData: [{ reading: 26.0, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 26.5, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 23.5, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 22.4, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 21.0, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 28.0, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 32.0, timestamp: 1511161234, sensorType: "Temperature" }]
    }

  }


  render() {
    return (
      <div className="App">
        <div className="ag-theme-balham" style={ {height: '400px', width: '600px'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
      </div>
    );
  }
}

//Not needed since we call this component inside Linchart
// export default TableData;

class LineChart extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Temperature", field: "reading" },
        { headerName: "Time", field: "timestamp" },
        { headerName: "SensorType", field: "sensorType" }],
      rowData: [{ reading: 26.0, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 26.5, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 23.5, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 22.4, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 21.0, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 28.0, timestamp: 1511161234, sensorType: "Temperature" },
        { reading: 32.0, timestamp: 1511161234, sensorType: "Temperature" }]
    }

  }


  render() {
    return (
      <TableData />
    );
  }

}

export default LineChart;
