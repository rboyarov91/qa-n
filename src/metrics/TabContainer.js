import React, { Component } from 'react';
import GraphView from './GraphView';
import TableView from './TableView';

class TabContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graphActive:true
		};
	}

	handleOnClick = (event) => {
		let tab = event.target.parentElement;
		let tabId = tab.getAttribute('data');
		this.setState({
			graphActive: tabId === "graph"
		})
		console.log(this.state.graphActive);
	}

	render() {
		return (
			<div className={TabContainer.name}>
        <div className="row">
            <div className="col-md-6">
            <div className="card">
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" data="graph" className={'tab' + (this.state.graphActive ? ' active' : '')} onClick={this.handleOnClick}><a href="#graph" aria-controls="home" role="tab" data-toggle="tab">Graphs</a></li>
                    <li role="presentation" data="data" className={'tab' + (!this.state.graphActive ? ' active' : '')} onClick={this.handleOnClick}><a href="#data" aria-controls="profile" role="tab" data-toggle="tab">Data</a></li>
                </ul>

               
                <div className="tab-content">
                    <div role="tabpanel" className={'tab-pane' + (this.state.graphActive ? ' active' : '')} id="graph">
                      <GraphView/>
                    </div>
                    <div role="tabpanel" className={'tab-pane' + (!this.state.graphActive ? ' active' : '')} id="data">
                      <TableView/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
			);
		    
	}
}

export default TabContainer;