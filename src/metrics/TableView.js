import React, { Component } from 'react';
import Table from '../components/table/Table'

class TableView extends Component {
	render() {
		return <Table data={this.props.data}/>
	}
}

export default TableView;