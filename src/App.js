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
import Checkout from "./components/Shared/Checkout/Checkout";
import Bookingslist from "./components/Dashboard/Bookinglist.js/Bookingslist";
import AddServices from "./components/Dashboard/AddService/AddServices";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageService/ManageServices";
import OrderedList from "./components/Dashboard/OrderedList/OrderedList";
import Services from "./components/Home/Services/Services";

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
              {
                loggedUser.isAdmin ? <OrderedList></OrderedList> : <Bookingslist></Bookingslist>
              }
            </PrivateRoute>
            <PrivateRoute path="/book">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/services/:serviceid">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <WriteReview></WriteReview>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/manageservices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute path="/orderlist">
              <OrderedList></OrderedList>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
