import React from 'react';
import ReactDom from 'react-dom';
import i18next from 'i18next';
import { i18nextInitConfig } from '@ijl/cli';

import App from './app'

export default () => <App />;

const i18NextPromise = i18nextInitConfig(i18next);

export const mount = async (Сomponent) => {
    await Promise.all([i18NextPromise])
    ReactDom.render(
        <Сomponent />,
        document.getElementById('app')
    );
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

