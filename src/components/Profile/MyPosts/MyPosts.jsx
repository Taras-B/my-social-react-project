import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field, reset } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { Button, Typography } from '@material-ui/core';

const MyPosts = React.memo((props) => {

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };

    let postElements = props.posts.map(p => <Post key={p.id} photo={props.photo} message={p.message} like={p.likeCount} />);

    return (
        <div className={s.posts}>
            <Typography variant="h4">My Posts</Typography>
                <AddPostReduxForm onSubmit={onAddPost} />
            <div className={s.post}>
                {postElements} {/* Метод map вставить всі повідомленя які є в обєкті */}
            </div>
        </div>
    )
})


const maxLenght10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText'
                   component={Textarea}
                   placeholder='sign text'
                   validate={[required, maxLenght10]} /><br />
            <Button color="secondary" type='submit'>Add post</Button>
        </div>
    </form>
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('newPostText'))

const AddPostReduxForm = reduxForm({form: 'newPostText', onSubmitSuccess: afterSubmit})(AddPostForm)

export default MyPosts;