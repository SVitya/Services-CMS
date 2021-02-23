import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Service from '../pages/service/Service';
import NewService from '../pages/new-service/NewService';
import Auth from '../pages/auth/Auth';

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/service/:id' exact component={Service} />
        <Route path='/new' exact component={NewService} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;