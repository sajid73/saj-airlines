import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Header/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Banner from './components/Home/Banner/Banner';
import Home from './components/Home/Home/Home';
import Login from './components/Shared/Login/Login';

function App() {
  return (
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
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
