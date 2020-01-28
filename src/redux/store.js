// import profileReducer from "./profile-reducer";
// import massegesReducer from "./masseges-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likeCount: 10},
//                 {id: 2, message: 'It is my first props', likeCount: 23},
//                 {id: 3, message: 'It the end?', likeCount: 70}
//             ],
//             newPostText: 'Chtoto'
//         },
//         massegesPage: {
//             dialogs: [
//                 {id: 1, name: 'Andrey'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Oleh'},
//                 {id: 4, name: 'Ana'},
//                 {id: 5, name: 'Olesia'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi, how are your lessons'},
//                 {id: 2, message: 'Hi, fine'},
//                 {id: 3, message: 'Ok, by by'}
//             ],
//             newMessageBody: ""
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log('change')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch (action) { //type= 'ADD-POST'

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.massegesPage = massegesReducer(this._state.massegesPage, action);

//     this._callSubscriber(this._state);
//     }
// };





// window.state = store;
// export default store;