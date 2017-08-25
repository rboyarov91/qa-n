import React, { Component } from 'react';
import Chart from '../components/chart/Chart'

class GraphView extends Component {

	getHeadings = (jsonData) => {
		let parsedHeadings;
		if (jsonData instanceof Array) {
			parsedHeadings = Object.keys(jsonData[0])
		} else {
			parsedHeadings = Object.keys(jsonData)
		}
		return parsedHeadings
	}

	getColumn = (jsonData, index, strip) => {
		let data = []
		jsonData.map((row, i) => {
			data.push(Object.values(row)[index])
			//console.log("found at row " + i + " : " + Object.values(row)[index])
		})
		if (strip) {
			data.forEach((part, index, array) => {
				array[index] = part.replace(/[^0-9.]/g, '')
			})
		}	
		return data
	}

	render() {
		//console.log("parsing: " + this.props.data)
		if (this.props.data === null) {
			return <div className="Loader"></div>
		}
		let parsedData = JSON.parse(this.props.data)
		let allHeadings = this.getHeadings(parsedData);
		allHeadings.shift()
		let labels = this.getColumn(parsedData,0, false);
		let test = this.getColumn(parsedData,1, true)
		return (
			<div className={GraphView.name}>
				<ul>
					{allHeadings.map((heading, index) => <li key={index}><Chart labels={labels} title={heading} data={this.getColumn(parsedData, index + 1, true)} threshold={this.getRandomThreshold(this.getColumn(parsedData, index + 1, true))}/></li>)
				}
				</ul>
			</div>
			);
	}

	getRandomThreshold = (data) => {
		let min = Math.min.apply(Math, data);
		let max = Math.max.apply(Math, data);
		let diff = max - min;
		let randomNum = Math.random() * diff
		let threshold;
		if (Math.random() < 0.5) {
			threshold = min + randomNum
		} else {
			threshold =  max + randomNum
		}
		return threshold

	}
}

export default GraphView;