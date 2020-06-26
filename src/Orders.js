import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Divider from '@material-ui/core/Divider';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';



export const data = [
  [22.510570, 88.376890, 'AMRI Hospital, Dhakuria',1,'Kolkata' ,46, 8],
  [22.620730, 88.378720, 'Apollo Gleneagles Hospita',2, 'Kolkata', 30, 0],
  [22.572410, 88.358230, 'B.P. Poddar Hospital',3, 'Kolkata', 36, 15],
  [22.565570, 88.370210 , 'Belle Vue Clinic*',4, 'Kolkata', 86, 11],
  [22.5637675,88.3825054,' Bhagirathi Neotia Woman and Child Care Centre, Rawdon Street',5,'Kolkata' ,1, 1],
  [22.5752586,88.4161183, 'Calcutta Heart Clinic',6, 'North 24-Parganas',24 ,7],
  [22.5885419,88.3802549,'Charnock Hospital',7, 'North 24-Parganas' ,52 ,25],
  [22.5767954,88.3912109,'Charring Cross Nursing Home',8, 'North 24-Parganas', 20, 0 ],
  [22.563703,88.2774388,'CMRI',9,'Kolkata', 58, 33 ],
  [22.5885419,88.3802549,'Columbia Asia Hospital',10, 'North 24-Parganas',7, 0],
  [22.6007451,88.4028246,'Daffodil Hospita',11, 'Kolkata',47, 15 ],
  [22.5032472,88.362275,' EEDF (Sri Aurobinda Seva Kendra)',12,'Kolkata',15, 5],
  [22.5343674,88.3226259,'Ekbalpur Nursing Home Pvt Ltd',13, 'Kolkata ' ,33, 21],
  [22.5988183,88.291788,'Fortis Hospital',14,'Kolkata', 52, 1 ],
  [22.5141362,88.3969304,'Genesis Hospital',15, 'Kolkata', 4, 4],
  [22.624582,88.4149373,'ILS Dumdum',16, 'Kolkata' ,52, 6],
  [22.5469568,88.3597299,'INK Kolkata',17, 'Kolkata', 4 ,0],
  [22.5177593,88.3192564,'Kolkata Port Trust',18, 'Kolkata',40, 20 ],
  [22.5325926,88.3283038,'Kothari Medical Centre',19, 'Kolkata', 102,43 ],
  [22.494397,88.3986416,'Medica Superspecialty Hospital',20, 'Kolkata' ,92, 8],
  [22.5460829,88.3492676,' Nightingale Hospital',21, 'Kolkata', 3, 3],
  [22.5894048,88.3916188,'North City Hospital',22, 'Kolkata' ,6, 0],
  [22.4806837,88.3919835,'Peerless Hospital',23, 'Kolkata' ,47, 2],
  [22.4913137,88.4002597,'R N Tagore International Institute of Cardiac Science',24, 'Kolkata',27, 1],
  [22.5233638,88.349733,'Ramkrishna Mission Seva Prathisthan',25, 'Kolkata',0, 0],
  [22.6205981,88.4307119,'Spandan Hospital, Kolkata',26, 'North 24-Paraganas', 15, 7],
  [22.5874387,88.4694196,'Tata Medical Centre (For cancer patient only)',27, 'North 24-Paraganas',9, 2],
  [22.5322604,88.3269842,'Woodlands Multispecility Hospital',28, 'Kolkata', 47, 29],
  [22.519828,88.3293549,'Zodiac Medicare Pvt. Ltd.',29, 'Kolkata', 40, 21],
  [22.5135084,88.4006953,'Ruby General Hospital',30,'Kolkata', 32, 0] ,
  [22.5532,88.3543 ,'Royd Nursing Home' ,31,'Kolkata',6 ,6 ]

];
export const data_gov=[
  [22.499335,88.3444002,'M R Bangur DH & SSH',1, 'Kolkata',  670, 395],
  [22.5256847,88.3443903, 'CNCI' , 2, 'Kolkata', 'CNCI' ,400, 256],
  [22.5683058,88.4094769,'AMRI Salt Lake ', 3, 'Kolkata', 61, 10],
  [22.5147387,88.4010695, 'Desun Hospital, Kolkata', 4, 'Kolkata',  78, 0],
  [22.5624966,88.3963726,'ID BG', 5, 'Kolkata',  115, 31],
  [22.5624814,88.3285209, 'KPC Medical College',6, 'Kolkata ', 200, 83],
  [22.5735705,88.3596629,  'Kolkata Medical College',7, 'Kolkata',  500, 196],
  [26.5695593,88.7239663, ' Integrated Ayush (COVID 19) Hospital Tapsikhata', 8, 'Alipurduar', 100, 13],
  [23.143377,87.1870278, 'Onda SSH', 9, 'Bankura', 250, 207],
  [23.0128163,87.5917637, 'Medicare General Hospital (NH)',10, 'Bankura',  54, 54],
  [23.7898804,87.3861927,  'Glocal Hospital, Birbhum',11, 'Birbhum', 50, 45],
  [22.5699038,88.235708, 'RMYF Royal Nursing Home & Diagnostic Centre', 12, 'Birbhum',  50, 44],
  [24.1243538,87.7932202, 'Madhumamata Lodge',13, 'Birbhum',  150, 150],
  [26.337725,89.4758653,'Cooch Behar Mission Hospital',  14,'Coochbehar', 120, 95],
  [25.3879473,88.3059815, 'Prayas Atreyi Eye Hospital', 15, 'Dakshin Dinajpur',  20, 20],
  [26.7239181,88.3900982, 'Chang Hospital', 16, 'Darjeeling',100, 24],
  [26.6856256,88.393844,  'Desun CoVid Hospital',17, 'Darjeeling', 160 ,118],
  [26.6856245,88.3785231, 'Medica Hospital',18, 'Darjeeling',  110, 110],
  [26.6636256,88.3645418, 'Medica Cancer Hospital', 19, 'Darjeeling ', 50, 50],
  [26.73048,88.3980837, 'Nivedita Cancer Hospital' , 20, 'Darjeeling',64, 64],
  [22.755381,88.3075898, 'Shramajibi Hospital', 21, 'Hooghly', 100, 53],
  [22.8349699,88.2882208, 'ESI Hospital, Bandel', 22, 'Hooghly', 250, 242],
  [22.8893884,87.7786274, 'Blue View Nursing Home', 23, 'Hooghly', 30, 30],
  [22.6909873,88.2892716, 'Seven Rangers',24, 'Hooghly',  90, 90],
  [22.683564,88.3523237,'Kamala Roy', 25, 'Hooghly',  50, 50],
  [22.8857373,87.7810561,'Arambagh Nursing Home', 26, 'Hooghly',  30, 30],
  [22.8103547,88.3503754, 'ESI Hospital, Gourhati',27, 'Hooghly',  216, 216],
  [22.4808674,88.1129,  'Sanjiban Hospital',28,'Howrah',  300, 153],
  [22.5930295,88.3443394,'ILS, Golabari' ,  29, 'Howrah', 88, 4],
  [22.6108877,88.3432612, 'Satyabala IDH' , 30, 'Howrah' ,25 ,18],
  [22.6065402,88.2800373,'ESI Hospital, Baltikuri', 31, 'Howrah',  230, 198],
  [22.4792264,88.0947947,'Uluberia ESI Hospital', 32, 'Howrah',  216, 189],
  [22.5673769,88.2681993,  'Narayana Hospital Old Building, West Bank Hospital',33, 'Howrah', 130, 116],
  [22.5673731,88.2353684, 'TLJ Hospital',34, 'Howrah' , 250, 250],
  [26.5361697,88.7156488,'Biswabangla Krirangan', 35, 'Jalpaiguri',  200, 145],
  [26.6550506,88.4140486,'Agrasen Hospital',  36, 'Jalpaiguri',  41, 41],
  [22.4850618,87.0897969, 'St. Joseph Hospital',37, 'Jhargram', 100, 100],
  [27.0619948,88.442226,'Triveni Hospital',38, 'Kalimpong',  150, 150],
  [25.0110664,88.1355711,'EHC Glocal Hospital, Malda' , 39, 'Malda' ,100 ,56],
  [25.3941863,88.0139905, 'Dishari Nursing Home, Chanchal',40, 'Malda',  30, 30],
  [25.1179654,87.9017867,'Manikchak Model School,Manikchak', 41, 'Malda',  50, 37],
  [24.1832234,88.240556,  'Old Matri Sadan Hospital',42, 'Murshidabad', 100, 55],
  [24.0920009,88.2621374,'Monmohini Private Health Care', 43, 'Murshidabad', 100, 100],
  [24.108899,88.2302342,'Gitaram Private Hospital', 44, 'Murshidabad',  100 ,100],
  [24.174005,88.2735753,  'Lalbagh Rainbow Nursshing Home',45, 'Murshidabad', 50, 50],
  [24.4353232,88.0251056, 'Basumati Healthcare Private Ltd',46, 'Murshidabad',  50, 50],
  [24.1832314,88.240556, 'Khristio Seba Sadan',47, 'Murshidabad',  100, 100],
  [22.9690371,88.4630881, 'SNR carnival Hospital',  48, 'Nadia',120, 91],
  [23.3911495,88.4806721, 'Glocal Hospital, Nadia', 49, 'Nadia', 150, 131],
  [22.9617373,88.4678189, 'T B Hospital, Kalyani',50, 'Nadia',  300, 300],
  [22.6026895,88, 'Al Amin Gopalpur Nursing Home',51, 'North 24 Pgs', 50, 32],
  [22.7133619,88.4972813,'GNRC', 52, 'North 24 Pgs',  80, 7],
  [22.7671001,88.3653545, 'Nehru Memorial Techno Global', 53, 'North 24 Pgs',  134, 106],
  [23.0428073,88.2684826,'Bibhuti Nursing Home',  54, 'North 24 Pgs',  10, 10],
  [22.5728059,88.4112559,'Subodh Mitra Cancer Hospital',   55, 'North 24 Pgs', 40, 40],
  [22.675432,88.3711384, 'COM & Sagar Datta Hospital',  56, 'North 24 Pgs', 500, 496],
  [23.5738823,87.4027792, 'Sanaka Hospital',57, 'Paschim Bardhaman',  400, 397],
  [23.704427,86.883187,'HLG Hospitals', 58, 'Paschim Bardhaman',  100, 100],
  [22.4435509,87.3138267, 'AYUSH Corona Hospital, Paschim Medinipore', 59, 'Paschim Medinipur',  50, 49],
  [22.4074952,87.3385285,'Glocal Corona Hospital, Paschim Medinipore',  60, 'Paschim Medinipur', 50, 44],
  [22.5194619,87.3758571, 'Salboni SSH' ,61, 'Paschim Medinipur', 150, 134],
  [23.2201387,87.9078858,'Camri Hospital', 62, 'Purba Burdwan',  120, 116],
  [23.2604259,87.8334495,'Bengal Medica Hospital', 63, 'Purba Burdwan',  100, 100],
  [22.0955075,87.8595539, 'Chandipur Multi Speciality Hospital',64, 'Purba Mednipur',  100, 59],
  [21.7874272,87.7445348, 'R C N Sanjiban Hospita' , 65, 'Purba Mednipur' ,50, 50],
  [22.1531272,87.4494863, 'Baroma Multi speciality Hospital', 66, 'Purba Mednipur', 180, 131],
  [23.3393703,86.3542308,  'Rotary Club of Purulia Service Centre - Nursing home',67, 'Purulia',  60, 53],
  [23.338676,86.3545691, 'R Singhania Seva pratishtan Hospital',68, 'Purulia',  60, 60],
  [22.4526379,88.2986844,  'ESIC Medical College and Hospital',69, 'South 24 Parganas', 470, 403],
  [22.2984052,88.1416346,'The Saharahat NH' , 70, 'South 24 Parganas' ,120 ,120],
  [22.1733792,88.2758429, 'Maa Durga NH', 71, 'South 24 Parganas',  50, 50],
  [22.3119063,88.6413274,'Canning Covid Hospital (Stadium)',  72, 'South 24 Parganas',  55, 47],
  [22.3118452,88.5187501, 'Bharat Sevashram Sangha', 73, 'South 24 Parganas',  100 ,100],
  [22.454136,88.1756709, 'Jagannath Gupta Medical College & Hospital',74, 'South 24 Parganas',  100, 100],
  [22.4234475,88.500445, 'Ispat Cooperative Hospital',75, 'South 24 Parganas',  125, 125],
  [25.6586695,88.15938,'Mikki Megha Hospital',76, 'Uttar Dinajpur',  36, 1],
  [25.6586653,88.1265491, 'Jeevan Rekha Nursing Home',77, 'Uttar Dinajpur',  45, 45],
  [22.4500,86.9800,'Jhargram Night Shelter', 78, 'Jhargram',75, 75]
];
export const d=data.concat(data_gov)

// Generate Order Data
function createData(id, district,name, total, vacancy , ownership) {
  return { id, district,name, total, vacancy , ownership };
}
var rows=[];
for (var index = 0; index < data.length; ++index) {
  rows.push(createData(data[index][3],data[index][4] ,data[index][2] ,data[index][5], data[index][6]))
}
var rows_govt=[];
for (var index = 0; index < data_gov.length; ++index) {
  rows_govt.push(createData(data_gov[index][3],data_gov[index][4] ,data_gov[index][2] ,data_gov[index][5], data_gov[index][6]))
}
/*
  const rows_govt = [
    createData(1, 'Kolkata', 'M R Bangur DH & SSH', 670, 352),
    createData(2, 'Kolkata', 'CNCI' ,400, 223),
    createData(3, 'Kolkata', 'AMRI Salt Lake ',51, 2),
    createData(4, 'Kolkata', 'Desun Hospital, Kolkata', 78, 12),
    createData(5, 'Kolkata', 'ID BG', 82, 5),
    createData(6, 'Kolkata ','KPC Medical College', 200, 71),
    createData(7, 'Kolkata', 'Kolkata Medical College', 500, 252),
    createData(8, 'Alipurduar',' Integrated Ayush (COVID 19) Hospital Tapsikhata', 100, 3),
    createData(9, 'Bankura' ,'Onda SSH', 250, 236),
    createData(10, 'Bankura', 'Medicare General Hospital (NH)', 54, 54),
    createData(11, 'Birbhum', 'Glocal Hospital, Birbhum', 50, 44),
    createData(12, 'Birbhum', 'RMYF Royal Nursing Home & Diagnostic Centre', 50, 45),
    createData(13, 'Birbhum', 'Madhumamata Lodge', 150, 150),
    createData(14,'Coochbehar', 'Cooch Behar Mission Hospital', 120, 112),
    createData(15, 'Dakshin Dinajpur', 'Prayas Atreyi Eye Hospital', 20, 20),
    createData(16, 'Darjeeling', 'Chang Hospital', 100, 35),
    createData(17, 'Darjeeling', 'Desun CoVid Hospital', 160 ,124),
    createData(18, 'Darjeeling', 'Medica Hospital', 110, 110),
    createData(19, 'Darjeeling ','Medica Cancer Hospital', 50, 50),
    createData(20, 'Darjeeling', 'Nivedita Cancer Hospital' ,64, 64),
    createData(21, 'Hooghly', 'Shramajibi Hospital', 100, 56),
    createData(22, 'Hooghly', 'ESI Hospital, Bandel', 250, 242),
    createData(23, 'Hooghly', 'Blue View Nursing Home', 30, 30),
    createData(24, 'Hooghly', 'Seven Rangers', 90, 90),
    createData(25, 'Hooghly', 'Kamala Roy', 50, 50),
    createData(26, 'Hooghly', 'Arambagh Nursing Home', 30, 30),
    createData(27, 'Hooghly', 'ESI Hospital, Gourhati', 216, 216),
    createData(28, 'Howrah', 'Sanjiban Hospital', 300, 166),
    createData(29, 'Howrah', 'ILS, Golabari' ,88, 2),
    createData(30, 'Howrah' ,'Satyabala IDH' ,25 ,7),
    createData(31, 'Howrah', 'ESI Hospital, Baltikuri', 230, 179),
    createData(32, 'Howrah', 'Uluberia ESI Hospital', 216, 202),
    createData(33, 'Howrah', 'Narayana Hospital Old Building, West Bank Hospital', 130, 110),
    createData(34, 'Howrah' ,'TLJ Hospital', 250, 250),
    createData(35, 'Jalpaiguri', 'Biswabangla Krirangan', 200, 110),
    createData(36, 'Jalpaiguri', 'Agrasen Hospital', 41, 41),
    createData(37, 'Jhargram', 'St. Joseph Hospital', 100, 100),
    createData(38, 'Kalimpong', 'Triveni Hospital', 150, 150),
    createData(39, 'Malda' ,'EHC Glocal Hospital, Malda' ,100 ,70),
    createData(40, 'Malda', 'Dishari Nursing Home, Chanchal', 30, 30),
    createData(41, 'Malda', 'Manikchak Model School,Manikchak', 50, 41),
    createData(42, 'Murshidabad', 'Old Matri Sadan Hospital', 100, 78),
    createData(43, 'Murshidabad','Monmohini Private Health Care', 100, 100),
    createData(44, 'Murshidabad', 'Gitaram Private Hospital', 100 ,100),
    createData(45, 'Murshidabad', 'Lalbagh Rainbow Nursshing Home', 50, 50),
    createData(46, 'Murshidabad', 'Basumati Healthcare Private Ltd', 50, 50),
    createData(47, 'Murshidabad', 'Khristio Seba Sadan', 100, 100),
    createData(48, 'Nadia', 'SNR carnival Hospital', 120, 64),
    createData(49, 'Nadia', 'Glocal Hospital, Nadia', 150, 140),
    createData(50, 'Nadia', 'T B Hospital, Kalyani', 300, 300),
    createData(51, 'North 24 Pgs', 'Al Amin Gopalpur Nursing Home', 50, 27),
    createData(52, 'North 24 Pgs', 'GNRC', 80, 30),
    createData(53, 'North 24 Pgs', 'Nehru Memorial Techno Global', 134, 113),
    createData(54, 'North 24 Pgs', 'Bibhuti Nursing Home', 10, 10),
    createData(55, 'North 24 Pgs', 'Subodh Mitra Cancer Hospital', 40, 40),
    createData(56, 'North 24 Pgs', 'COM & Sagar Datta Hospital', 500, 500),
    createData(57, 'Paschim Bardhaman', 'Sanaka Hospital', 400, 386),
    createData(58, 'Paschim Bardhaman', 'HLG Hospitals', 100, 99),
    createData(59, 'Paschim Medinipur', 'AYUSH Corona Hospital, Paschim Medinipore', 50, 46),
    createData(60, 'Paschim Medinipur', 'Glocal Corona Hospital, Paschim Medinipore', 50, 46),
    createData(61, 'Paschim Medinipur', 'Salboni SSH' ,150, 130),
    createData(62, 'Purba Burdwan', 'Camri Hospital', 120, 117),
    createData(63, 'Purba Burdwan', 'Bengal Medica Hospital', 100, 100),
    createData(64, 'Purba Mednipur', 'Chandipur Multi Speciality Hospital', 100, 77),
    createData(65, 'Purba Mednipur' ,'R C N Sanjiban Hospita' ,50, 50),
    createData(66, 'Purba Mednipur', 'Baroma Multi speciality Hospital', 180, 147),
    createData(67, 'Purulia', 'Rotary Club of Purulia Service Centre - Nursing home', 60, 54),
    createData(68, 'Purulia', 'R Singhania Seva pratishtan Hospital', 60, 60),
    createData(69, 'South 24 Parganas', 'ESIC Medical College and Hospital', 470, 407),
    createData(70, 'South 24 Parganas' ,'The Saharahat NH' ,120 ,120),
    createData(71, 'South 24 Parganas', 'Maa Durga NH', 50, 50),
    createData(72, 'South 24 Parganas', 'Canning Covid Hospital (Stadium)', 55, 51),
    createData(73, 'South 24 Parganas', 'Bharat Sevashram Sangha', 100 ,100),
    createData(74, 'South 24 Parganas', 'Jagannath Gupta Medical College & Hospital', 100, 100),
    createData(75, 'South 24 Parganas', 'Ispat Cooperative Hospital', 125, 125),
    createData(76, 'Uttar Dinajpur', 'Mikki Megha Hospital', 36, 26),
    createData(77, 'Uttar Dinajpur', 'Jeevan Rekha Nursing Home', 45, 45)
];
*/
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>List of Covid care center (Govt. & Private) </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Total beds</TableCell>
            <TableCell align="right">Available beds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.district}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell align="right">{row.vacancy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        <Divider />
        <Title>Government Centers </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Total beds</TableCell>
            <TableCell align="right">Available beds</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_govt.map((row_govt) => (
            <TableRow key={row_govt.id}>
              <TableCell>{row_govt.id}</TableCell>
              <TableCell>{row_govt.name}</TableCell>
              <TableCell>{row_govt.district}</TableCell>
              <TableCell>{row_govt.total}</TableCell>
              <TableCell align="right">{row_govt.vacancy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}