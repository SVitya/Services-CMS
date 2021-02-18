import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Service from '../pages/service/Service';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exac component={Home} />
        <Route path='/service' exac component={Service} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
