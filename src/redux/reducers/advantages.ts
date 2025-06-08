const initialState = {
    items: []
};

const advantages = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ADVANTAGES':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};

export default advantages;