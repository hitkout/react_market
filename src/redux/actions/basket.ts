export const addProductsInBasket = (productsObj) => ({
    type: 'ADD_PRODUCTS_BASKET',
    payload: productsObj
});

export const clearBasket = () => ({
    type: 'CLEAR_BASKET'
});

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
});

export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    payload: id
});

export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    payload: id
});