import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { TextareaAutosize } from '@material-ui/core';
import './App.css';
import Orders from './Orders';
import {data} from './Orders';
import Deposits from './Deposits';


function handleClick(){
  navigator.geolocation.getCurrentPosition(findNearBy);
}
function findNearBy(position){
  //const Geo = require('geo-nearby');
  
  function Deg2Rad(deg) {
    return deg * Math.PI / 180;
  }
  
  function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = (lat2 - lat1);
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
  }

  
  function NearestCity(latitude, longitude) {
    var minDif = 99999;
    var closest;
  
    for (var index = 0; index < data.length; ++index) {
      // eslint-disable-next-line no-restricted-globals
      if (data[index][6]==0){
        continue;
      }
      var dif = PythagorasEquirectangular(latitude, longitude, data[index][0], data[index][1]);
      if (dif < minDif) {
        closest = index;
        minDif = dif;
      }
    }
  
    // eslint-disable-next-line no-restricted-globals
    if (alert(data[closest][2] +" is nearest. Navigate?") || true){
      var alink="https://bing.com/maps/default.aspx?rtp=adr."+data[closest][2]+"~pos."+latitude+"_"+longitude+"_MyPlace&rtop=0~1~0";
      window.open(alink);
    };
  }
  /*
  const dataSet = Geo.createCompactSet(data);
  const geo = new Geo(dataSet, { sorted: true });*/
  NearestCity(position.coords.latitude, position.coords.longitude);
}

function getOrders(){
  const element = (
    <div class="App">
      <Orders />
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
function getDeposits(){
  const element = (
    <div class="App">
      <Deposits />
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

export const mainListItems = (
  
  <div>
    <ListItem button onClick={getDeposits}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={getOrders}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Covid Centers" />
    </ListItem>
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Search Nearest" />
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);


