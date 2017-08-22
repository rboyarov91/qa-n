import React, { Component } from 'react';
import Header from './header/Header'
import Menu from './menu/Menu'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// If false, menu close
			// If true, menu open
			menuIn: false
		}
	}

	toggleMenu = () => {
		this.setState({menuIn : !this.state.menuIn})
		console.log("Menu is toggled to " + this.state.menuIn)
	}

	render() {
		let menuItems = ["Site Metrics", "Some other tool"];
		let divClass = "Page-body"
		let blackFadeClass = "black-fade";
		if (this.state.menuIn) {
			blackFadeClass = blackFadeClass.concat(' fade-in')
		} else {
			blackFadeClass = blackFadeClass.concat(' display-hide')
		}
		return (
			<div className={divClass}>
				<div className="white-fade fade-out display-hide"></div>
				<div className={blackFadeClass}></div>
				<Menu tools={menuItems} open={this.state.menuIn} handleClick={this.toggleMenu}/>
				<Header handleClick={this.toggleMenu}/>
			</div>
			);
	}
}

export default App;