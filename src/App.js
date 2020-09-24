import React from 'react';
import Navigationbar from "./components/NavigationBar"
import WelcomeBody from "./components/WelcomeBody"
import Networkspage from "./components/networkspage"
import Facebook from "./pages/facebook"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {

  return (
    <div className="App">
     <Navigationbar/>
    
     
     <Router>
     

     <Switch>
     <Route exact path="/">
          <WelcomeBody/>
          
          </Route>
          <Route exact path="/index">
          <WelcomeBody/>
          
          </Route>
          <Route path="/networks">
            <Networkspage/>
          </Route>
          <Route path="/facebook">
            <Facebook/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
