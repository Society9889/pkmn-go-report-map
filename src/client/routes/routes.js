import React from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";

//store
import store from '../redux/store.js';

//routes
import Home from '../components/home.js';

injectTapEventPlugin();

const app = document.getElementById("PkmnReportContainer");
const history = createBrowserHistory()


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={Home}>
			</Route>
		</BrowserRouter>
	</Provider>,
	app);