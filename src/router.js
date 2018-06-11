import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Gallery from './Component/Gallery'
import Contact from './Component/Contact'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact" component={Contact} />
  </Switch>
)