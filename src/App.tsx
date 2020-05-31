import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, List, Edit } from './pages';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Route exact={true} path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/edit" component={Edit} />
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App;
