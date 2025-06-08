import React from 'react';
import ScrollToTop from '../components/scroll';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//ссылки на странички
import { URLs } from '../__data__/urls';

import Advantages from './advantages';
import Footer from './footer';
import Header from './header';
import Toppanel from '../components/top-panel';
import MainPopular from './mainPopular';
import Basket from './basket';
import Catalog from './catalog';
import ProductPage from './product-page';
import Order from './order';

function Dashboard() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={URLs.home.url} />
            </Route>
            <Route path={URLs.home.url}>
                <Toppanel />
                <Header />
                <Advantages />
                <MainPopular />
                <ScrollToTop />
                <Footer />
            </Route>
            <Route path={URLs.basket.url}>
                <Basket />
            </Route>
            <Route path={URLs.catalog.url}>
                <Catalog/>
            </Route>
            <Route path={URLs.productPage.url} component={ProductPage}>
            </Route>
            <Route path={URLs.order.url}>
                <Order/>
            </Route>
            <Route exact path="*">
                <h1>Not found</h1>
            </Route>
        </Switch>
    )
}

export default Dashboard;