import React, { Component } from 'react';

class Menu extends Component {
	
	render() {
		const componentName = Menu.name;
		let classes = componentName;
		if (this.props.open) {
		 classes =  classes.concat(' ' + componentName + "-open");
		}
		return (
				<div className={classes}>
					<div className={componentName + "-list"}>
						<p className={componentName + "-title"}>Tools</p>
						<div className="nav-menu-close" onClick={() => this.props.handleClick()}></div>
						<ul>
							{this.props.tools.map((tool) => <li><a class={componentName + "-link"} href="/">{tool}</a></li>)}
						</ul>
					</div>
				</div> 
			);
	}
}

export default Menu;