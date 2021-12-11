import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import CheckOut from "./Components/CheckOut";
import Home from "./Components/Home";
import Login from './Components/Login';
import ProductsByCatagory from './Components/ProductsByCatagory';
import Register from "./Components/Register";
import { initialState, reducer } from './initialState';
import { StateProvider } from "./StateProvider";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div >
    <StateProvider initialState={initialState} reducer={reducer}>
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/checkout">
              <CheckOut></CheckOut>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/catagory/:title">
              <ProductsByCatagory></ProductsByCatagory>
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
    </StateProvider>
      
    </div>
  );
}

export default App;
