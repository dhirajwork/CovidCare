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
import {data} from './listItems';

// Generate Order Data
function createData(id, district,name, total, vacancy , ownership) {
  return { id, district,name, total, vacancy , ownership };
}
var rows=[];
for (var index = 0; index < data.length; ++index) {
  rows.push(createData(data[index][3],data[index][4] ,data[index][2] ,data[index][5], data[index][6]))
}
/*const rows = [
  createData(1,'Kolkata' ,'AMRI Hospital Dhakuria' ,60, 43 ),
  createData(2, 'Kolkata', 'Apollo Gleneagles Hospital', 44, 0),
  createData(3, 'Kolkata', 'B P Poddar', 20, 19),
  createData(4, 'Kolkata', 'Belle Vue Clinic *', 86, 32 ),
  createData(5,'Kolkata' ,'Bhagirathi Neotia Hospital,Kolkata' ,1, 1), 
  createData(6, 'North 24-Parganas','Calcutta Heart Clinic & Hospital ,Salt Lake',24 ,13 ),
  createData(7, 'North 24-Parganas','Charnok Hospital' ,50 ,34),
  createData(8, 'North 24-Parganas', 'Charring Cross', 8, 0 ),
  createData(9,'Kolkata', 'CMRI', 20, 19 ),
  createData(10, 'North 24-Parganas','Columbia Asia Hospital, Salt Lake',4, 0 ),
  createData(11, 'Kolkata', 'Dafodil Hospital' ,20, 6 ),
  createData(12,'Kolkata', 'EEDF Sri Aurobinda Seva Kendra',15, 4),
  createData(13, 'Kolkata ','Ekbalpur Nursing Home' ,17, 7 ),
  createData(14,'Kolkata', 'Fortis Hospital', 52, 0  ),
  createData(15, 'Kolkata', 'Genesis Hospital', 4, 0  ),
  createData(16, 'Kolkata', 'ILS Dumdum' ,52, 7 ),
  createData(17, 'Kolkata', 'INK Kolkata', 2 ,0),
  createData(18, 'Kolkata', 'Kolkata Port Trust Centenary Hospital',40, 17 ),
  createData(19, 'Kolkata', 'Kothari Medical Centre', 84 ,33 ),
  createData(20, 'Kolkata','Medica Superspecialty Hospital' ,92, 20),
  createData(21, 'Kolkata', 'Nightingale Hospital', 3, 3) , 
  createData(22, 'Kolkata','North City Hospital #*' ,6, 6),
  createData(23, 'Kolkata','Peerless Hospital' ,47, 6 ),
  createData(24, 'Kolkata','R N Tagore International Institute of Cardiac Science',27, 5),
  createData(25, 'Kolkata','Ramkrishna Mission Seva Prathisthan' ,50, 13),
  createData(26, 'North 24-Paraganas','Spandan Hospital Kolkata', 12, 11), 
  createData(27, 'North 24-Paraganas','Tata Medical Centre (For cancer patient only)' ,15, 13), 
  createData(28, 'Kolkata','Woodlands Multispecility Hospital', 43, 22), 
  createData(29, 'Kolkata','Zodiac Medicare Pvt. Ltd.(Flemming Nursing Home)', 20, 2) ]; */
  const rows_govt = [
    createData(1, 'Kolkata', 'M R Bangur DH & SSH', 670, 352),
    createData(2, 'Kolkata CNCI' ,400, 223),
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