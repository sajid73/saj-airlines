import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Login from "./components/Shared/Login/Login";
import WriteReview from "./components/Home/WriteReview/WriteReview";
import Dashboard from "./components/Dashboard/Dashboard";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({
    signed: false,
    displayName: "",
    email: "",
    photoURL: "",
    isAdmin: false
  });
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
