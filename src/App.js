import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import ScriptMerge from "./components/ScriptMerge";
import generateStory from "./components/storygenerator2";
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/merge">
            <ScriptMerge />
          </Route>
          <Route path="/story">
            <generateStory/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
