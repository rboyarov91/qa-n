import React, { Component } from 'react';
import Table from '../components/table/Table'
import Loader from '../components/loader/Loader'


class TableView extends Component {
	render() {
		if (this.props.data === null) {
			return <Loader/>
		}
		return <Table data={this.props.data}/>
	}
}

export default TableView;