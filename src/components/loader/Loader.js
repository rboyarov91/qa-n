import React, { Component } from 'react';

class Loader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			stillLoading:true
		}
	}

	componentDidMount() {
		setTimeout(function() { this.setState({stillLoading: false}); }.bind(this), 10000);
	}


	render() {
		if (this.state.stillLoading) {
			return <div className="Loading"></div>
		} else {
			return <div className="Timeout">OH NO, something must be wrong. Page timed out out trying to get the results.</div>
		}
		
	}
}

export default Loader;