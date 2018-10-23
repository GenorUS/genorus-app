import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CompanyPage from "./pages/CompanyPages";
import ApplicationPage from "./pages/ApplicationPage";
import { SignIn, SignUp } from "./pages/SignIn";


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/scholarship" component={Portfolio} />
        <Route exact path="/scholarship/:company" component={CompanyPage}/>
        <Route path="/scholarship/:company/apply" component={ApplicationPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
