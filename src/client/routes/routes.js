import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

//routes
import Home from '../components/home.js';

const app = document.getElementById("PkmnReportContainer");
const history = createBrowserHistory()


ReactDOM.render(
		<BrowserRouter>
			<Route path="/" component={Home}>
			</Route>
		</BrowserRouter>,
	app);