import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
