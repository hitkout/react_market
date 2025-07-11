const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS_BASKET': {
            const currentProductsItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentProductsItems,
                    totalPrice: getTotalPrice(currentProductsItems)
                }
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            };
        }
        case 'CLEAR_BASKET':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            };
        case 'REMOVE_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        case 'PLUS_ITEM': {
            const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }
            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        case 'MINUS_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }
            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        default:
            return state;
    }
}

export default basket;