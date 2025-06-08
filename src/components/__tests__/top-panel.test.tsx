import React from 'react';
import { mount } from 'enzyme';
import TopPanel from '../top-panel';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { StaticRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';

describe('Тестирование TopPanel', () => {

    it('Тестируем рендер TopPanel', async () => {
        const component = mount(
            <Provider store={store}>
                <StaticRouter>
                    <TopPanel />
                </StaticRouter>
            </Provider>
        )

        expect(component).toMatchSnapshot()

        component.find('button#clickLanguageIdEn').simulate('click')
        component.update()

        expect(component).toMatchSnapshot()

        component.find('button#clickLanguageIdRu').simulate('click')
        component.update()

        expect(component).toMatchSnapshot()
    });
});