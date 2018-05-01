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

//style
import style from './appStyle.scss';


class Home extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

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
	       	     		<div className="content"></div>
	       	     		 <Paper id='paperDrawer' className="build-alert-nav-menu">
	       	     		 <List component="nav">
							<ListItem button>
					          <ListItemText primary="Test" />
					        </ListItem>
						</List>
						</Paper>
				 </div>
		    </div>
			);
	}		
}

export default Home;