import React from 'react';
import { mount } from 'enzyme';
import ProductCard from '../product-card';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { StaticRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';

describe('Тестирование ProductCard', () => {

    it('Тестируем рендер ProductCard', async () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter>
                    <ProductCard id image name price onClickAddProducts addedCount processor motherboard videocard RAMmemory hdd hddMemory ssd powerSupplyUnit />
                </StaticRouter>
            </Provider>
        )

        expect(component).toMatchSnapshot()
    });
});