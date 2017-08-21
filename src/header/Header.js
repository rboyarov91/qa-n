import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from '../navigation/Navigation'

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navItems: []
		};
	}

	componentDidMount() {
		// Perform http call, using sample text for now
		this.setState({navItems:[{href:"/", target:"_self", text:"User"}, {href:"/", target:"_self", text:"Tools"}]})
	}

	render() {
		return (
			<div className={"Page-" + Header.name.toLowerCase()}>
			<header className="clearHeader">
				<div className="content">
					<Logo />
					<Navigation navigationItems={this.state.navItems}/>
				</div>
			</header>
			</div>
			);
	}
}

export default Header;