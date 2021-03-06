import React, { Component } from 'react';
import NavigationItem from '../components/NavigationItem'

class Navigation extends Component {
	render() {
		return (
			<nav className="Navigation">
			<ul className="navList">
				{/*this.props.navigationItems.map((item) => <li><NavigationItem href={item.href} target={item.target} text={item.text}/></li>});*/}
				{this.props.navigationItems.map((item, i) => <li key={i}><NavigationItem href={item.href} target={item.target} text={item.text}/></li>)}
				<li onClick={() => this.props.handleClick()}><div className="Navigation-items-menu nav-menu-open">Tools</div></li>
				</ul>
			</nav>
			);
		
	}
}

export default Navigation;