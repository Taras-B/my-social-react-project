/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field, reset, InjectedFormProps } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea, createField, Input } from '../../common/FormsControls/FormsControls'
import { Button, Typography } from '@material-ui/core'
import { PostType, ProfilePhoto } from '../../../types/types'

type PropsT = {
  posts: Array<PostType>
  photo: ProfilePhoto
  addPost: (newPostText: string) => void
  deletePost: (id: number) => void
}

const MyPosts: React.FC<PropsT> = (props) => {
  let onAddPost = (value: PostFormKeysT) => {
    props.addPost(value.newPostText)
  }
  // через мап  рисуєм пости
  let postElements = props.posts.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      deletePost={props.deletePost}
      photo={props.photo}
      message={p.message}
      like={p.likeCount}
    />
  ))

  return (
    <div className={s.posts}>
      <Typography variant="h4">My Posts</Typography>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={s.post}>
        {postElements} {/* Метод map вставить всі повідомленя які є в обєкті */}
      </div>
    </div>
  )
}

const maxLenght10 = maxLengthCreator(10)

type PostFormKeysT = {
  newPostText: string
}

type PostFormValuesTypeKeys = Extract<keyof PostFormKeysT, string>

const AddPostForm: React.FC<InjectedFormProps<PostFormKeysT>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<PostFormValuesTypeKeys>(
          'Email',
          'newPostText',
          [required, maxLenght10],
          Input,
          {
            variant: 'outlined',
            size: 'small',
            color: 'secondary',
          }
        )}
        {/* <Field
          name="newPostText"
          component={Textarea}
          placeholder="sign text"
          validate={[required, maxLenght10]}
        /> */}
        <br />
        <Button color="secondary" type="submit">
          Add post
        </Button>
      </div>
    </form>
  )
}

const afterSubmit = (result: any, dispatch: any) => dispatch(reset('newPostText'))

const AddPostReduxForm = reduxForm<PostFormKeysT, {}>({
  form: 'newPostText',
  onSubmitSuccess: afterSubmit,
})(AddPostForm)
const MyPostsMemo = React.memo(MyPosts)
export default MyPostsMemo
