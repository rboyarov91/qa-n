import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';



class Chart extends Component {

	constructor(props){
		super(props);
		console.log("Using labels: " + this.props.labels)
		console.log("Using title: " + this.props.title)
		console.log("Using data: "  + this.props.data)
		let dataInfo = {
			labels: this.props.labels,
  			//labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  			datasets: [
			    {
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
  			]
		};

		this.state = {
			data: dataInfo
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