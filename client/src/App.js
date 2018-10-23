import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CompanyPage from "./pages/CompanyPages";
import {SignIn, SignUp} from "./pages/SignIn";


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/scholarship" component={Portfolio} />
          <Route exact path="/scholarship/:company/:companyid" component={CompanyPage}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
