import Dialogs from './Dialogs'

import { actions } from '../../redux/masseges-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'

let mapStateToProps = (state: AppStateType) => {
  return {
    messagePage: state.massegesPage,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (newMessageBody) => {
//       dispatch(actions.sendMessagesCreator(newMessageBody))
//     },
//   }
// }

export default compose<React.ComponentType>(
  connect(mapStateToProps, { ...actions }),
  withAuthRedirect
)(Dialogs)
