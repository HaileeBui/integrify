import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './views/Home';
import Detail from './views/Detail';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/:id" component={Detail} />
        </Switch>
      </Router>
  );
}

export default App;
