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
     <Route exact path="/adslab//">
          <WelcomeBody/>
          
          </Route>
          <Route exact path="/adslab/index">
          <WelcomeBody/>
          
          </Route>
          <Route path="/adslab/networks">
            <Networkspage/>
          </Route>
          <Route path="/adslab/facebook">
            <Facebook/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
