import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
