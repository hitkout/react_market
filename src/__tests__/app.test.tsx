import React from 'react';
import { mount } from 'enzyme';

import Dashboard from '../containers/dashboard';

import { StaticRouter } from 'react-router-dom';
import { URLs } from '../__data__/urls';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { describe, it, expect } from '@jest/globals';

describe('Тестирование всего приложения', () => {
    it('Тестируем рендер catalog', () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter location={URLs.catalog.url}>
                    <Dashboard />
                </StaticRouter>
            </Provider>
        )
        expect(component).toMatchSnapshot();
    });
    it('Тестируем рендер home', () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter location={URLs.home.url}>
                    <Dashboard />
                </StaticRouter>
            </Provider>
        )
        expect(component).toMatchSnapshot();
    });

    it('Тестируем рендер basket', () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter location={URLs.basket.url}>
                    <Dashboard />
                </StaticRouter>
            </Provider>
        )
        expect(component).toMatchSnapshot();
    });

    it('Тестируем рендер productPage', () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter location={URLs.productPage.url}>
                    <Dashboard />
                </StaticRouter>
            </Provider>
        )
        expect(component).toMatchSnapshot();
    });

    it('Тестируем рендер order', () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter location={URLs.order.url}>
                    <Dashboard />
                </StaticRouter>
            </Provider>
        )
        expect(component).toMatchSnapshot();
    });
});