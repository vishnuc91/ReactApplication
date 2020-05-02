import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { Line } from 'react-chartjs-2';
import DatePicker from 'react-date-picker';

class TableData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {

    return (
      <div className="App">
        <div className="ag-theme-balham" style={{ height: '400px', width: '803px' }}>
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
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.state = {}
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      mean:"0",
      max:"0",
      min:"0",
      labels: [],
      datasets: [
        {
          label: 'Temperature',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ],
      columnDefs: [
        { headerName: "Time", field: "time" },
        { headerName: "Date", field: "date" },
        { headerName: "Temperature", field: "temperature" },
        { headerName: "SensorType", field: "sensortype" }],
      rowData: [],
      isLoaded: false
    }

  }

  componentDidMount() {
    fetch("http://localhost:5000/home")
      .then(res => res.json())
      .then(
        (result) => {
          for (const [index, item] of result.data.entries()) {
            this.state.labels.push(item['date']);
            this.state.datasets[0].data.push(item['temperature'])
            
          }
          this.setState({
            isLoaded: true,
            rowData: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  onChange1(event) {
    this.setState({
      startDate: event
    });
  }

  // Could be done with single function but event.target is not working
  onChange2(event) {
    this.setState({
      endDate: event
    });
  }

  handleClick(event) {
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <div className="datepicker">
        <form>
          <label>From Date:</label>
          <DatePicker
            name="startDate"
            onChange={this.onChange1}
            value={this.state.startDate}
          />
          <label>To Date:</label>
          <DatePicker
            name="endDate"
            onChange={this.onChange2}
            value={this.state.endDate}

          />
          <button onClick={this.handleClick} type="submit">Submit</button>
        </form>
        </div>
        <label>Mean: {this.state.mean}</label><br />
        <label>Max Temperature:{this.state.mean}</label><br />
        <label>Min Temperature:{this.state.mean}</label><br />
        <TableData columns={this.state.columnDefs} rows={this.state.rowData} date={this.state.startDate} />
        <div style={{ height: '300px', width: '1010px' }}>
          <Line
            width={50}
            height={20}
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
      </div>
    );
  }

}

export default LineChart;
