import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };

    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likeCount} />);

    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
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
            <button>Add post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({form: 'newPostText'})(AddPostForm)

export default MyPosts;