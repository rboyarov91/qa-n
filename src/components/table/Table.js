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
				{rowValues.map((value, i) => <td key={i}>{value}</td>)}
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

		let parsedData = JSON.parse(this.props.data)
		let parsedHeadings = this.getHeadings(parsedData);

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

	getHeadings = (jsonData) => {
		let parsedHeadings;
		if (jsonData instanceof Array) {
			parsedHeadings = Object.keys(jsonData[0])
		} else {
			parsedHeadings = Object.keys(jsonData)
		}
		return parsedHeadings
	}

	render() {
		return (
			<div>
				<table className="Table">
					<thead>
						<tr>
							{this.state.headings.map((heading, i) => <th key={i} scope="col">{heading}</th>)}
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((row, i) => <TableRow key={i} rowInfo={row}/>)
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