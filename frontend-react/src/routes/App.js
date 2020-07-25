import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from '../components/Search';
import EditForm from '../components/EditForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/post/:id" component={EditForm} />
        <Route exact path="/post" component={EditForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
