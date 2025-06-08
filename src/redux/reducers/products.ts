const initialState = {
    items: [],
    loading: false
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                loading: true
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default products;