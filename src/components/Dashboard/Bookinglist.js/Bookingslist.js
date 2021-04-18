import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard';

const useStyles = makeStyles({
    table: {
      maxWidth: 650,
    },
  });

const Bookingslist = () => {
    const [booking, setBooking] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    fetch('https://thawing-earth-88805.herokuapp.com/bookinglist?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    
            const classes = useStyles();
    return (
        <div className="row">
            <div className="col-md-3">
                <Dashboard></Dashboard>
            </div>
            <div className="col-md-5">
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'green', fontWeight: 'bolder'}}>Service Name</TableCell>
            <TableCell style={{color: 'tomato', fontWeight: 'bolder'}} align="left">Booking Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            

        {
            booking.map(booking => <TableRow key={booking._id}>
            <TableCell component="th" scope="row">{booking.service}</TableCell>
            <TableCell align="left">{booking.status}</TableCell>
            </TableRow>)
        }
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    );
};

export default Bookingslist;