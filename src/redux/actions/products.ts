import { pcmBhAxios } from '../../__data__/axios';

export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: 'SET_LOADING',
        payload: false
    });

    pcmBhAxios.get('/catalog').then(({ data }) => {
        dispatch(setProducts(data.data));
    });
};

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
})