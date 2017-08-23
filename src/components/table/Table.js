import React, { Component } from 'react'

class TableRow extends Component {
	render() {
		let rowInfo = this.props.rowInfo;
		let rowValues = [];
		for (let key in Object.keys(rowInfo)) {
			rowValues.push(rowInfo[Object.keys(rowInfo)[key]])
		}
		return (
			<tr>
				{rowValues.map((value) => <td>{value}</td>)}
			</tr>
			);
	}
}

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headings : [],
			data : []
		}
	}

	componentDidMount() {
		let testData = '[{"date":"May 13, 2016","Loadtime":" 7.72s","TTFB":" 0.253s","Start Render":" 1.505s","Visually Complete":" 10.199s","Speed Index":" 3364","DOM Elements":" 694","DOCTime":" 7.72s","DOCRequests":" 85","DOCBytesIn":" 3852 KB","FLTime":" 8.298s","FLRequests":" 98","FLBytesIn":" 3914 KB","200s":" 91","404s":" 0","Others":" 8","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s","DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 59"}]';
		let parsedData = JSON.parse(this.props.data)
		let parsedHeadings;
		if (parsedData instanceof Array) {
			parsedHeadings = Object.keys(parsedData[0])
		} else {
			parsedHeadings = Object.keys(parsedData)
		}
		this.setState({
			headings : parsedHeadings
		})
		if (parsedData instanceof Array) {
			this.setState({
				data : parsedData
			})
		} else {
			this.setState({
				data : [parsedData]
			})
		}

	}
	render() {
		return (
			<div>
				<table className="Table">
					<thead>
						<tr>
							{this.state.headings.map((heading) => <th scope="col">{heading}</th>)}
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((row) => <TableRow rowInfo={row}/>)
					}
					</tbody>
				</table>
				<ul>

				</ul>
				</div>
			);
	}
}

export default Table;