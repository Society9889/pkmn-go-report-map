/**
 * Created by evan on 5/3/2018.
 */
import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import PropTypes from 'prop-types';

class GymReportDialog extends React.Component {

    constructor(props){
        super(props);
        this.state = { isex: false };
    }

    switchToggled() {
        this.setState({isex: !this.state.isex});
    };

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
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Gym name"
                            fullWidth
                        />
                        <FormControlLabel control={<Checkbox checked={this.state.isex} onClick={this.switchToggled.bind(this)} />} label="Is this an EX gym?" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.props.onClose} color="primary">
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