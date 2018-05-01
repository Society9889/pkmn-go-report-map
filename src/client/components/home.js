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

import RaidReport from './raidReport.js';
import Map from './map.js';

//routes
import {Switch, Route, IndexRoute, Link} from 'react-router-dom';

//style
import style from './appStyle.scss';


class Home extends React.Component {

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
		          <IconButton color="inherit" aria-label="Menu">
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
		       	     			<Route exact path="/" component={Map}/>
								<Route path="/raidReport" component={RaidReport}></Route>
							</Switch>
	       	     		</div>
	       	     		 <Paper id='paperDrawer' className="build-alert-nav-menu">
	       	     		 <List component="nav">
	       	     			<ListItem component={Link} to="/" button>
					            <ListItemText primary="Map" />
					        </ListItem>
							<ListItem component={Link} to="/raidreport" button>
					            <ListItemText primary="Raid Reports" />
					        </ListItem>
					        <ListItem button>
					        	<ListItemText primary="Gyms" />
					        </ListItem>
					        <ListItem button>
					          	<ListItemText primary="Poke Stops" />
					        </ListItem>
						</List>
						</Paper>
				 </div>
		    </div>
			);
	}		
}

export default Home;