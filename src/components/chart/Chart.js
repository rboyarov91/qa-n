import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';



class Chart extends Component {

	constructor(props){
		super(props);
		let dataInfo = {
			labels: this.props.labels,
  			//labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  			datasets: this.getDataSets()
  			// [
			  //   {
			  //     //label: 'My First dataset',
			  //     label: this.props.title,
			  //     //data: [65, 59, 80, 81, 56, 55, 40],
			  //     data: this.props.data,
			  //     // style
			  //     fill: false,
			  //     lineTension: 0.1,
			  //     backgroundColor: 'rgba(75,192,192,0.4)',
			  //     borderColor: 'rgba(75,192,192,1)',
			  //     borderCapStyle: 'butt',
			  //     borderDash: [],
			  //     borderDashOffset: 0.0,
			  //     borderJoinStyle: 'miter',
			  //     pointBorderColor: 'rgba(75,192,192,1)',
			  //     pointBackgroundColor: '#fff',
			  //     pointBorderWidth: 1,
			  //     pointHoverRadius: 5,
			  //     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			  //     pointHoverBorderColor: 'rgba(220,220,220,1)',
			  //     pointHoverBorderWidth: 2,
			  //     pointRadius: 1,
			  //     pointHitRadius: 10
			  //   }
  			// ]
		};

		this.state = {
			data: dataInfo
		}
	}

	getDataSets() {
		let datasets = [];
		datasets.push(this.getBaseDataSet())
		if (this.props.threshold) {
			datasets.push(this.getThresholdDataSet())
		}
		return datasets
	}

	getBaseDataSet() {
		return {
			      //label: 'My First dataset',
			      label: this.props.title,
			      //data: [65, 59, 80, 81, 56, 55, 40],
			      data: this.props.data,
			      // style
			      fill: false,
			      lineTension: 0.1,
			      backgroundColor: 'rgba(75,192,192,0.4)',
			      borderColor: 'rgba(75,192,192,1)',
			      borderCapStyle: 'butt',
			      borderDash: [],
			      borderDashOffset: 0.0,
			      borderJoinStyle: 'miter',
			      pointBorderColor: 'rgba(75,192,192,1)',
			      pointBackgroundColor: '#fff',
			      pointBorderWidth: 1,
			      pointHoverRadius: 5,
			      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			      pointHoverBorderColor: 'rgba(220,220,220,1)',
			      pointHoverBorderWidth: 2,
			      pointRadius: 1,
			      pointHitRadius: 10			      
			    }
	}

	getThresholdDataSet() {
		return {
			      //label: 'My First dataset',
			      label: "Threshold",
			      //data: [65, 59, 80, 81, 56, 55, 40],
			      data: Array(this.props.data.length).fill(this.props.threshold),
			      // style
			      fill: false,
			      lineTension: 0.1,
			      backgroundColor: 'rgba(255,0,0, 0.4)',
			      borderColor: 'rgba(255,0,0, 1)',
			      borderCapStyle: 'butt',
			      borderDash: [],
			      borderDashOffset: 0.0,
			      borderJoinStyle: 'miter',
			      pointBorderColor: 'rgba(255,0,0,1)',
			      pointBackgroundColor: '#fff',
			      pointBorderWidth: 1,
			      pointHoverRadius: 5,
			      pointHoverBackgroundColor: 'rgba(255,0,0,1)',
			      pointHoverBorderColor: 'rgba(255,0,0,1)',
			      pointHoverBorderWidth: 2,
			      pointRadius: 1,
			      pointHitRadius: 10			      
			    }
	}

	componentDidMount() {
		//console.log(this)
	}

	render() {
		return (
			<div className={Chart.name}>
				<Line id="{this.props.id}" data={this.state.data}/>
			</div>
			);	
		
	}
}

export default Chart;