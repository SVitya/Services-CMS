import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Service from '../pages/service/Service';
import Auth from '../pages/auth/Auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/service/:id' exact component={Service} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;