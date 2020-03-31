
import React from 'react';
import Header from '../components/Header/header';
import { Route } from 'react-router-dom';

const AppLayout = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

const AppLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <AppLayout>
                <Component {...matchProps} />
            </AppLayout>
        )} />
    )
};

export default AppLayoutRoute; 