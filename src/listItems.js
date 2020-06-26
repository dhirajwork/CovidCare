import React from 'react';
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

export const data = [
  [22.510570, 88.376890, 'AMRI Hospital, Dhakuria',1,'Kolkata' ,60, 43],
  [22.620730, 88.378720, 'Apollo Gleneagles Hospita',2, 'Kolkata', 44, 0],
  [22.572410, 88.358230, 'B.P. Poddar Hospital',3, 'Kolkata', 20, 19],
  [22.565570, 88.370210 , 'Belle Vue Clinic*',4, 'Kolkata', 86, 32],
  [22.5637675,88.3825054,' Bhagirathi Neotia Woman and Child Care Centre, Rawdon Street',5,'Kolkata' ,1, 1],
  [22.5752586,88.4161183, 'Calcutta Heart Clinic',6, 'North 24-Parganas',24 ,13],
  [22.5885419,88.3802549,'Charnock Hospital',7, 'North 24-Parganas' ,50 ,34],
  [22.5767954,88.3912109,'Charring Cross Nursing Home',8, 'North 24-Parganas', 8, 0 ],
  [22.563703,88.2774388,'CMRI',9,'Kolkata', 20, 19 ],
  [22.5885419,88.3802549,'Columbia Asia Hospital',10, 'North 24-Parganas',4, 0],
  [22.6007451,88.4028246,'Daffodil Hospita',11, 'Kolkata',20, 6 ],
  [22.5032472,88.362275,' EEDF (Sri Aurobinda Seva Kendra)',12,'Kolkata',15, 4],
  [22.5343674,88.3226259,'Ekbalpur Nursing Home Pvt Ltd',13, 'Kolkata ' ,17, 7],
  [22.5988183,88.291788,'Fortis Hospital',14,'Kolkata', 52, 0 ],
  [22.5141362,88.3969304,'Genesis Hospital',15, 'Kolkata', 4, 0],
  [22.624582,88.4149373,'ILS Dumdum',16, 'Kolkata' ,52, 7],
  [22.5469568,88.3597299,'INK Kolkata',17, 'Kolkata', 2 ,0],
  [22.5177593,88.3192564,'Kolkata Port Trust',18, 'Kolkata',40, 17 ],
  [22.5325926,88.3283038,'Kothari Medical Centre',19, 'Kolkata', 84 ,33 ],
  [22.494397,88.3986416,'Medica Superspecialty Hospital',20, 'Kolkata' ,92, 20],
  [22.5460829,88.3492676,' Nightingale Hospital',21, 'Kolkata', 3, 3],
  [22.5894048,88.3916188,'North City Hospital',22, 'Kolkata' ,6, 6],
  [22.4806837,88.3919835,'Peerless Hospital',23, 'Kolkata' ,47, 6]
  [22.4913137,88.4002597,'R N Tagore International Institute of Cardiac Science',24, 'Kolkata',27, 5],
  [22.5233638,88.349733,'Ramkrishna Mission Seva Prathisthan',25, 'Kolkata',50, 13],
  [22.6205981,88.4307119,'Spandan Hospital, Kolkata',26, 'North 24-Paraganas', 12, 11],
  [22.5874387,88.4694196,'Tata Medical Centre (For cancer patient only)',27, 'North 24-Paraganas',15, 13],
  [22.5322604,88.3269842,'Woodlands Multispecility Hospital',28, 'Kolkata', 43, 22],
  [22.519828,88.3293549,'Zodiac Medicare Pvt. Ltd.',29, 'Kolkata', 20, 2]
];

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
      if (data[index][6]=0){
        continue;
      }
      var dif = PythagorasEquirectangular(latitude, longitude, data[index][0], data[index][1]);
      if (dif < minDif) {
        closest = index;
        minDif = dif;
      }
    }
  
    // eslint-disable-next-line no-restricted-globals
    if (alert(data[closest][2] +"is nearest. Navigate?") || True){
      var alink="https://bing.com/maps/default.aspx?rtp=adr."+data[closest][2]+"~pos."+latitude+"_"+longitude+"_MyPlace&rtop=0~1~0";
      window.open(alink);
    };
  }
  /*
  const dataSet = Geo.createCompactSet(data);
  const geo = new Geo(dataSet, { sorted: true });*/
  NearestCity(position.coords.latitude, position.coords.longitude);
}

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
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


