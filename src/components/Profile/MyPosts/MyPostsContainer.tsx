// import React from 'react';
import { connect } from 'react-redux'

import MyPosts from './MyPosts'

import { addPost, deletePost } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/redux-store'

type MapStatePropsType = {}

// type MapDispatchPropsType = {
//   addPost: (newPostText: string) => void
//   deletePost: (postId: number) => void
// }

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    photo: state.profilePage.profile!.photos.small
  }
}

// const mapDispatchToProps = dispatch => {
//     return {

//         addPost: (newPostText) => {
//             dispatch(addPost(newPostText));
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, { addPost, deletePost })(MyPosts)

export default MyPostsContainer
