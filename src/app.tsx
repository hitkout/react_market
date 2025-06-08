import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './containers/dashboard';
import {
    BrowserRouter
} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename='/project_pcm'>
                <Dashboard />
            </BrowserRouter >
        </Provider>
    )
}

export default App;