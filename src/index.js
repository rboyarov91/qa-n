import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
	<Router>
  		<div>
  			<Route path='/' component={App} />
    		<Route path='/user' component={App} />
    		<Route path='/test' component={App} />
  		</div>
	</Router>, 
    document.getElementById('root')
	);
registerServiceWorker();
