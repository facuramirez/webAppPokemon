import './App.css';
import Landing from './landingPage';
import Home from './home';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

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
// const mapStateToProps = ({ detail }) => ({ detail })


//   export default connect(mapStateToProps)(App);
