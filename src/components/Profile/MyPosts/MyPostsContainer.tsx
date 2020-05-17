// import React from 'react';
import { connect } from 'react-redux'

import MyPosts from './MyPosts'

import { actions } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/redux-store'

type MapStatePropsType = {}

// type MapDispatchPropsType = {
//   addPost: (newPostText: string) => void
//   deletePost: (postId: number) => void
// }

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    photo: state.profilePage.profile!.photos.small,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(actions.addPost(newPostText))
    },
    deletePost: (id: number) => {
      dispatch(actions.deletePost(id))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
