/**
 * Created by evan on 5/3/2018.
 */
import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

import PropTypes from 'prop-types';

class GymReportDialog extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            name: '',
            isex: false,
            lat: 0,
            lng: 0
        };
    }

    switchToggled() {
        this.setState({isex: !this.state.isex});
    };

    handleChange(mouseEvent, me, event){
         me.setState({
              [this]: event.target.value,
            });
    }
    
    submitGymAndClose(){
        var gym = {
            name: this.state.name,
            pos: {
                lat : parseFloat(this.state.lat),
                lng : parseFloat(this.state.lng)
            },
            isex : this.state.isex
        }
        this.props.socket.emit('addGym',gym);
        this.clearStateAndClose();
    }

    clearStateAndClose(){
        this.setState({
            name: '',
            isex: false,
            lat: 0,
            lng: 0
        });
        this.props.onClose();
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        return (
                <Dialog
                    open={this.props.show}
                    onClose={this.onClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Gym Submission</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                           Help make this map better by telling me what gyms are out there.
                        </DialogContentText>
                         <FormGroup>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Gym name"
                            value={this.state.name}
                            onChange={this.handleChange.bind('name', event, this)}
                            fullWidth
                        />
                        <TextField
                          id="number"
                          label="Latitude"
                          value={this.state.lat}
                          onChange={this.handleChange.bind('lat', event, this)}
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          margin="normal"
                        />
                        <TextField
                          id="number"
                          label="Longitude"
                          value={this.state.lng}
                          onChange={this.handleChange.bind('lng', event, this)}
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          margin="normal"
                        />
                        <FormControlLabel control={<Checkbox checked={this.state.isex} onClick={this.switchToggled.bind(this)} />} label="Is this an EX gym?" />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.clearStateAndClose.bind(this)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.submitGymAndClose.bind(this)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

GymReportDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default GymReportDialog;