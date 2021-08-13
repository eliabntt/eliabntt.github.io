import {Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

export default(
    <Switch>
        <Route exact path='/' />
        <Route exact path='/blog'  />
        <Route path="/blog/:id" />
        <Route path='/404' />
        <Redirect from='*' to='/404' />
        <Redirect from='/blog/*' to='/404' />
    </Switch>
  );