import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import List from './list';
import Lists from './lists';
import Header from './header'
import PrivateRoute from './private-route';

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <Header />

        <Switch>
          <PrivateRoute path="/list/:id" component={List} />

          <PrivateRoute path="/" component={Lists} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
