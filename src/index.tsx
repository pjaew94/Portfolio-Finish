import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.scss';



import Home from "./pages/Home/Home";


const App = () => {



  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
