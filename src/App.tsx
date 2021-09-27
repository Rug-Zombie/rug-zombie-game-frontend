import React from 'react'
import Landing from 'components/Landing';
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'

function App() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
    <div className="App">
      <Landing />
    </div>
    </Router>
  );
}

export default App;
