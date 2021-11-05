import './App.css';
import Landing from './landingPage';
import Home from './home';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>      
      <Route
        exact path="/" component={Landing}
      />

      <Route
        exact path="/home" component={Home}
      />

      <Route
        path="/home/:name"
        render = { ({match}) => <Home pokemonName = { match.params.name }/> }
      />      
    </div>
  );
}

export default App;
