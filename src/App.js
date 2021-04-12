import Root from './components/Root';
import Listening from './components/Listening';

import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <main>
      <Root />
      <Switch>
          <Route path="/listening" component={Listening} />
      </Switch>
    </main>
  );
}

export default App;
