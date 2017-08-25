import React, { Component } from 'react';
import Table from '../components/table/Table'

class TableView extends Component {
	render() {
		if (this.props.data === null) {
			return <div className="loader"></div>
		}
		return <Table data={this.props.data}/>
	}
}

export default TableView;