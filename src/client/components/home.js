import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import io from 'socket.io-client';

//components
import RaidReport from './raidReport.js';
import Map from './map.js';
import GymReportDialog from './gymReportingDialog.js';

//routes
import {Switch, Route, IndexRoute, Link} from 'react-router-dom';

//redux-actions
import {updateGyms} from '../redux/actions/gymActions.js';
import {updateUsers} from '../redux/actions/usersActions.js';
import { connect } from 'react-redux';

//style
import style from './appStyle.scss';

//socket connection
var socket = io.connect();

class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = { 
			isOpen: false,
			menuHidden: true,
			style: {
				display: 'none'
			}
		};
	}

	componentDidMount(){
		socket.on("Users", this.processUsers.bind(this));
		socket.on("Gyms", this.processGyms.bind(this));
		socket.emit('getGyms');
	}

	processUsers(users){
		this.props.updateUsers(users);
	}

	processGyms(gyms){
		this.props.updateGyms(gyms);
	}

	openGymReportDialog(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	toggleMenu(){
		if(this.state.menuHidden === false){
			this.setState({
				menuHidden: true,
				style: {
				display: 'none'
			}});
		} else {
			this.setState(
				{
					menuHidden: false,
					style:{}
				});
		}
	}

	render() {

		var titleStyle = {
				flex: 1
			},
			drawerStyle = {
				width: 250
			};
		return (
			<div className="main">
		      <AppBar className="test" position="static">
		        <Toolbar>
		          <IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu.bind(this)}>
		            <MenuIcon />
		          </IconButton>
		          <Typography variant="title" style={titleStyle} color="inherit">
		            Title
		          </Typography>
		          <Button color="inherit">Login</Button>
		        </Toolbar>
		      </AppBar>
	       	     <div className="main-body">
	       	     		<div className="content">
		       	     		<Switch>
								<Route path="/raidReport" component={RaidReport}></Route>
							</Switch>
							<Map/>
	       	     		</div>
	       	     		 <Paper id='paperDrawer' className="build-alert-nav-menu" style={this.state.style}>
	       	     		 <List component="nav">
	       	     			<ListItem component={Link} to="/" button>
					            <ListItemText primary="Map" />
					        </ListItem>
							<ListItem component={Link} to="/raidreport" button>
					            <ListItemText primary="Raid Reports" />
					        </ListItem>
					        <ListItem button onClick={this.openGymReportDialog.bind(this)}>
					        	<ListItemText primary="Report a Gym" />
					        </ListItem>
					        <ListItem button>
					          	<ListItemText primary="Poke Stops" />
					        </ListItem>
						</List>
						</Paper>
				 </div>
				<GymReportDialog show={this.state.isOpen}
								 onClose={this.openGymReportDialog.bind(this)} socket={socket}/>
		    </div>
			);
	}		
}

export default connect(null, {updateGyms})(Home);