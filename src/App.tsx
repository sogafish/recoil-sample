import React from 'react';
// import {
//   RecoilRoot,
//   // atom,
//   // selector,
//   // useRecoilState,
//   // useRecoilValue,
// } from 'recoil';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { Home, Roster, Edit } from './pages';

function App() {
  console.log(process);
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/edit" component={Edit} />
    </BrowserRouter>
  );
}

export default App;
