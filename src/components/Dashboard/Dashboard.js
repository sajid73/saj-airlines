import { Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {isAdmin} = loggedInUser;
  const handleSignOut =() =>{
    setLoggedInUser({})
  }
  return (
    <div className="dashboard d-flex flex-column justify-content-between p-4">
      <ul className="list-unstyled">
        {
          !isAdmin && <div>
            <li>
           <Link className="link-style" to="/book">
            Book
          </Link>
        </li>
        <li>
           <Link className="link-style" to="/dashboard">
            Booking List
          </Link>
        </li>
        <li>
           <Link className="link-style" to="/review">
            Write review
          </Link>
        </li>
          </div>
        }
        {
          isAdmin && <div>
            <li>
           <Link className="link-style" to="/orderlist">Ordered list</Link>
        </li>
        <li>
           <Link className="link-style" to="/addservice">Add Service</Link>
        </li>
        <li>
           <Link className="link-style" to="/makeadmin">Make an admin</Link>
        </li>
        <li>
           <Link className="link-style" to="/manageservices">Manage services</Link>
        </li>
          </div>
        }
        <li style={{marginTop: '300px'}}>
          <Button variant="contained" color="secondary" onClick={() => handleSignOut()}>Sign Out</Button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;