import React, { Component } from 'react';
import GraphView from './GraphView';
import TableView from './TableView';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

class TabContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graphActive:true,
			siteData:null
		};
	}

	handleOnClick = (event) => {
		let tab = event.target.parentElement;
		let tabId = tab.getAttribute('data');
		this.setState({
			graphActive: tabId === "graph"
		})
	}

	getSiteData = () => {
		const url = BASE_URL + '/api/siteInfo'
		return axios.get(url).then(response => response.data);
	}

	componentDidMount() {
		const url = BASE_URL + '/api/siteInfo'
		//console.log("Setting state to: " + this.getSiteData())
		this.getSiteData().then((data) => {
			this.setState({siteData:data})
		})
		
		//axios.get(url).then(response => this.setState({siteData:response.data}))
	}

	render() {
		let testData = this.state.siteData
		//console.log("data being used: " + testData)
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
                      <GraphView data={testData}/>
                    </div>
                    <div role="tabpanel" className={'tab-pane' + (!this.state.graphActive ? ' active' : '')} id="data">
                      <TableView data={testData}/>
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