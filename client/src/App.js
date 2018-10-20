import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import {SignIn, SignUp} from "./pages/SignIn";

//TODO <Route path="/company/:id" component={Companypage} />
//TODO Make Apllication Form to fill out for scholarship
//TODO <Route path="/company/:id/:sholarshipid" component={questionform} />
//TODO Create all DB/API calls 
//TODO USER AUTHENTICATION/AUTHORIZATION
//TODO REDIRECT AFTER SIGNIN OR SIGNUP 



//TODO Company Portal



const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/scholarship" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
