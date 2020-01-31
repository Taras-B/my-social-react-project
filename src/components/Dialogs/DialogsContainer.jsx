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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);