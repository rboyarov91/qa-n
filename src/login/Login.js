import React, { Component } from 'react';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			emailInput: false,
			passInput: false,
			 }
	}

	handleInputChange = (event) => {
		if (event.target.type === "email" && event.target.value.length !== 0) {
			this.setState({
				emailInput:true
			})

		} else if (event.target.type === "email" && event.target.value.length === 0) {
			this.setState({
				emailInput:false
			})

		}
		if (event.target.type === "password" && event.target.value.length !== 0) {
			this.setState({
				passInput:true
			})

		} else if (event.target.type === "password" && event.target.value.length === 0) {
			this.setState({
				passInput:false
			})

		}
		console.log("email input: " + this.state.emailInput);
		console.log("password input: " + this.state.passInput);
	}

	handleButtonPress = () => {
		// TODO send post to backend once up
		console.log("Button pressed");
	}

	render() {
		return (
			<div className={Login.name}>
				<hgroup>
					<h1>{this.props.projectName}</h1>
				</hgroup>
				<form>
					<div className="group">
						<input type="email" onChange={this.handleInputChange} className={this.state.emailInput ? "used" : ""}/><span className="highlight"></span><span className="bar"></span>
						<label>Email</label>
					</div>
					 <div className="group"> 
					 <input type="password" onChange={this.handleInputChange} className={this.state.passInput ? "used" : ""}/><span className="highlight"></span><span className="bar"></span>
        				<label>Password</label>
      				</div>
      				<button type="button" className="button buttonBlue" onClick={this.handleButtonPress}>Login
        				<div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
    				</button>
				</form>
			</div>
			);
	}
}

export default Login;