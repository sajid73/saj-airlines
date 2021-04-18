import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Dashboard from '../Dashboard';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const ManageServices = () => {
    const [services, setServices] = useState([]);
    fetch('https://thawing-earth-88805.herokuapp.com/services')
    .then(res => res.json())
    .then(data => {
        setServices(data);
    })
    const handleDelete = (id) => {
        fetch(`https://thawing-earth-88805.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    const classes = useStyles();
    fetch('')
    return (
        <div className="row">
            <div className="col-md-3 col-sm-2">
              <Dashboard></Dashboard>
            </div>
            <div className="col-md-7">
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell align="right">Service image</TableCell>
            <TableCell align="right">Service rate</TableCell>
            <TableCell align="right">Delete Service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            

        {
            services.map(service => <TableRow key={service._id}>
            <TableCell component="th" scope="row">{service.title}</TableCell>
            <TableCell align="right"><img src={service.imgURL} width="20px" height="15px" alt=""/></TableCell>
            <TableCell align="right">{service.price}</TableCell>
            <TableCell align="right"><Button onClick={() => handleDelete(service._id)} variant="outlined" color="secondary">Delete</Button></TableCell>
          </TableRow>)
        }



        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    );
};

export default ManageServices;