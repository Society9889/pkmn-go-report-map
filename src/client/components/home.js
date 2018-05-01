import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import style from './appStyle.scss';


class Home extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		var titleStyle = {
				flex: 1
			};
		return (
			<div>
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
		    </div>
			);
	}		
}

export default Home;