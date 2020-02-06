import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Common/Layout/Layout';
import Home from './components/Home/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import SignUp from './components/SignUp/SignUp'; 
import SignIn from './components/SignIn/SignIn';
import Order from './components/Order/Order';
import Profile from './components/Profile/Profile';
import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/order' component={Order} />
        <Route path='/profile' component={Profile} />
    </Layout>
);
