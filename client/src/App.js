import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Books} />
//         <Route exact path="/books" component={Books} />
//         <Route exact path="/books/:id" component={Detail} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/scholarships" component={Portfolio} />
      </div>
    </Router>
  );
}
export default App;
