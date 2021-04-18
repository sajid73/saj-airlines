import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../Dashboard';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const OrderedList = () => {
    const [bookings, setBookings] = useState([])
    fetch('https://thawing-earth-88805.herokuapp.com/orderlist')
    .then(res => res.json())
    .then(data => {
        setBookings(data)
    })

    const handleStatus = (e, id) =>{
      const updateStatus = {status: e.target.value};
      fetch(`https://thawing-earth-88805.herokuapp.com/updatestatus/${id}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    const classes = useStyles();
    return (
        <div className='row'>
            <div className="col-md-3">
                <Dashboard></Dashboard>
            </div>
            <div className="col-md-6">
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Service Type</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
        {
            bookings.map(booking => <TableRow key={booking._id}>
            <TableCell component="th" scope="row">{booking.name}</TableCell>
            <TableCell align="left">{booking.email}</TableCell>
            <TableCell align="left">{booking.service}</TableCell>
            <TableCell align="left">
            <select onChange={(e)=> handleStatus(e,booking._id)}  class="form-select">
            <option selected>{booking.status}</option>
            <option  value="pending">pending</option>
            <option value="on going">on going</option>
            <option value="done">done</option>
            </select>
            </TableCell>
            
          </TableRow>)
        }

        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    );
};

export default OrderedList;