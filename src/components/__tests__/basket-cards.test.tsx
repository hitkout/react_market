import React from 'react';
import { mount } from 'enzyme';
import BasketCards from '../basket-cards';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { StaticRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';
import { ComputerFor1Card } from '../../assets/import';

describe('Тестирование Basket', () => {

    it('Тестируем рендер Basket', async () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter>
                    <BasketCards id={5} image={ComputerFor1Card} name="Computer" totalPrice={40000} totalCount={5} onRemove onMinus onPlus />
                </StaticRouter>
            </Provider>
        )

        expect(component).toMatchSnapshot()
    });
});