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
	}

	render() {
		let testData = '[{"date":"May 13, 2016","Loadtime":" 7.72s","TTFB":" 0.253s","Start Render":" 1.505s","Visually Complete":" 10.199s","Speed Index":" 3364","DOM Elements":" 694",\
		"DOCTime":" 7.72s","DOCRequests":" 85","DOCBytesIn":" 3852 KB","FLTime":" 8.298s","FLRequests":" 98","FLBytesIn":" 3914 KB","200s":" 91","404s":" 0","Others":" 8","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 64"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 58"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 65"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 70"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 43"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 62"}]';

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