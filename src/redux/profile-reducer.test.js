import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 10},
        {id: 2, message: 'It is my first props', likeCount: 23},
        {id: 3, message: 'It the end?', likeCount: 70}
    ]
}


it('lenght of paste should be increment', () => {
    // 1. Test data
    let action = addPostActionCreator("test add_post")

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(4)
}) 


it('message of new post should be increment', () => {
    // 1. Test data
    let action = addPostActionCreator("test add_post")
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts[3].message).toBe("test add_post")
}) 

it('delet post should be increment', () => {
    // 1. Test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(2)
}) 