import React from "react";
import { Container } from "reactstrap";
import Navi from "../navigation/Navi";
import Dashboard from "./Dashboard";
import {Route,Switch} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
function App() {
  return (
    <div >
      <Container>
        <Navi/>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Dashboard}/>
          <Route path="/components" exact component={Dashboard}/>
          <Route path="/cart" exact component={CartDetail}/>
        </Switch>
   
      </Container>
    </div>
  );
}

export default App;
