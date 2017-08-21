import React, { Component } from 'react';

class NavigationItem extends Component {
	render() {
		return (
			<div className="NavigationItem">
				<div className="NavigationItem-text">
					<a className="NavigationItem-text-link" href={this.props.href} target={this.props.target ? this.props.target : "_self"}>{this.props.text}</a>
				</div>
			</div>
			);
	}
}

export default NavigationItem;