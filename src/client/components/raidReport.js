import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

//style
import style from './appStyle.scss';


class RaidReport extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
	
		return (
			<Paper className='report-content'>
				<Table>
			        <TableHead>
			          <TableRow>
			            <TableCell>Player</TableCell>
			            <TableCell >Level</TableCell>
			            <TableCell>Team</TableCell>
			          </TableRow>
			        </TableHead>
			        <TableBody>
			              <TableRow key='1'>
			                <TableCell>Player1</TableCell>
			                <TableCell >34</TableCell>
			                <TableCell >Valor</TableCell>
			              </TableRow>
			              <TableRow key='2'>
			                <TableCell>Player2</TableCell>
			                <TableCell >34</TableCell>
			                <TableCell >Valor</TableCell>
			              </TableRow>
			              <TableRow key='3'>
			                <TableCell>Player3</TableCell>
			                <TableCell >34</TableCell>
			                <TableCell >Valor</TableCell>
			              </TableRow>
			              <TableRow key='4'>
			                <TableCell>Player4</TableCell>
			                <TableCell >34</TableCell>
			                <TableCell >Valor</TableCell>
			              </TableRow>
			        </TableBody>
			      </Table>
		      </Paper>
			);
	}		
}

export default RaidReport;