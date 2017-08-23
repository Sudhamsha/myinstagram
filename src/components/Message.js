import React from 'react';
import {connect} from 'react-redux'
import Snackbar from 'material-ui/Snackbar'

const Message = (props) => (
    props.message
        ? <Snackbar
            open={true}
            message={props.message}
            autoHideDuration={4000}
        />
        : null
)

export default connect(
    (state) => ({message: state.message})
)(Message);