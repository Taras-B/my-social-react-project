const SEND_MESSAGE = 'SEND_MESSAGE';

let initialMessages = {
    dialogs: [{
            id: 1,
            name: 'Andrey'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Oleh'
        },
        {
            id: 4,
            name: 'Ana'
        },
        {
            id: 5,
            name: 'Olesia'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hi, how are your lessons'
        },
        {
            id: 2,
            message: 'Hi, fine'
        },
        {
            id: 3,
            message: 'Ok, by by'
        }
    ],
}

const massegesReducer = (state = initialMessages, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                    messages: [...state.messages, {
                        id: Date.now(),
                        message: body
                    }]
            };
        default:
            return state;
    }

}

export const sendMessagesCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default massegesReducer;