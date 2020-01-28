// import React from 'react';

import Dialogs from './Dialogs'

import { sendMessagesCreator } from '../../redux/masseges-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = state => {
    return {
        messagePage: state.massegesPage,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessagesCreator(newMessageBody));
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)



// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);