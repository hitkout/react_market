const initialState = {
    data: [],
    loading: false,
    error: false
};

const productPage = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return {
                ...state.data,
                data: action.payload,
                loading: false
            };
        case 'PRODUCT_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'PRODUCT_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default productPage;