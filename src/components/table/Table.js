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
		let testData = '[{ "name":"John", "age":30, "city":"New York"},{ "name":"Ben", "age":24, "city":"New Jersey"}]'
		let parsedData = JSON.parse(testData)
		let parsedHeadings;
		if (parsedData instanceof Array) {
			parsedHeadings = Object.keys(parsedData[0])
		} else {
			parsedHeadings = Object.keys(parsedData)
		}
		this.setState({
			headings : parsedHeadings,
			data : parsedData
		})
	}
	render() {
		return (
			<div>
				<table className="SimpleTable">
					<thead>
						<tr>
							{this.state.headings.map((heading) => <th>{heading}</th>)}
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