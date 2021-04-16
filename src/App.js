import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CompanyProfile from './components/CompanyProfile'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CompanyProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
