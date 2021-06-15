import './App.css';
import Landing from './landingPage';
import Home from './home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route
        exact path="/" component={Landing}
      />

      <Route
        path="/home" component={Home}
      />      
    </div>
  );
}

export default App;
