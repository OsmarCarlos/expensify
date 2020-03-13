import {Route, BrowserRouter, Switch} from 'react-router-dom';
import React from 'react';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}></Route>
                <Route path="/create" component={AddExpense}></Route>
                <Route path="/edit/:id" component={EditExpense}></Route>
                <Route path="/help" component={Help}></Route>
                <Route path="/*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;