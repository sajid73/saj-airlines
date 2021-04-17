import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MakeAdmin from './MakeAdmin';
import WriteReview from '../Home/WriteReview/WriteReview';
import { UserContext } from '../../App';
import AddServices from './AddServices';
import ManageServices from './ManageServices';
import Services from '../Home/Services/Services';
import Bookingslist from './Bookingslist';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 700,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {isAdmin} = loggedInUser;
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div>
            <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Book" {...a11yProps(0)} />
        <Tab label="Book list" {...a11yProps(1)} />
        <Tab label="Review" {...a11yProps(2)} />
        {
            isAdmin && <Tab label="Order list" {...a11yProps(3)} />
        }
        {
            isAdmin && <Tab label="Add Service" {...a11yProps(4)} />
        }
        {
            isAdmin && <Tab label="Make Admin" {...a11yProps(5)} />
        }
        {
            isAdmin && <Tab label="Manage Services" {...a11yProps(6)} />
        }
      </Tabs>

      {
        isAdmin ? <TabPanel value={value} index={0}>
        This section is for users only
      </TabPanel> : <TabPanel value={value} index={0}>
        <Services></Services>
      </TabPanel>
      }
      {
        isAdmin ? <TabPanel value={value} index={1}>
        This section is for users only
      </TabPanel> : <TabPanel value={value} index={1}>
        <Bookingslist></Bookingslist>
      </TabPanel>
      }
      {
        isAdmin ? <TabPanel value={value} index={2}>
        This section is for users only
        </TabPanel> : <TabPanel value={value} index={2}>
      <WriteReview></WriteReview>
      </TabPanel>
      }
      {
          isAdmin && <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      }
      {
          isAdmin && <TabPanel value={value} index={4}>
          <AddServices></AddServices>
        </TabPanel>
      }
      {
          isAdmin && <TabPanel value={value} index={5}>
          <MakeAdmin></MakeAdmin>
        </TabPanel>
      }
      {
          isAdmin && <TabPanel value={value} index={6}>
          <ManageServices></ManageServices>
        </TabPanel>
      }
    </div>
        </div>
    );
};

export default Dashboard;