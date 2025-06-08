import { pcmBhAxios } from '../../__data__/axios';

const selectproduct = (items) => ({
    type: 'SELECT_PRODUCT',
    payload: items
});

const productLoading = () => ({
    type: 'PRODUCT_LOADING'
});

const productError = () => ({
    type: 'PRODUCT_ERROR'
});

export const getSelectComponent = () => dispatch => {
    dispatch(productLoading());
    pcmBhAxios.get('/catalog').then(({ data }) => {
        dispatch(selectproduct(data.data));
    }).catch(() => {
        dispatch(productError())
    })
};