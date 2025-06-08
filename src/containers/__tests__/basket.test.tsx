import React from 'react';
import { mount } from 'enzyme';
import Basket from '../basket';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { StaticRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';

describe('Тестирование Basket', () => {

    it('Тестируем рендер Basket', async () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter>
                    <Basket />
                </StaticRouter>
            </Provider>
        )

        expect(component).toMatchSnapshot()

        component.find('button#clearBasketId').simulate('click')
        component.update()

        expect(component).toMatchSnapshot()
    });
});