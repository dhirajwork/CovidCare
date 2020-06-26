import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Beds</Title>
      <Typography component="p" variant="h4">
      { 993 + 10425 }
      </Typography>
      <Title>Available Beds</Title>
      <Typography component="p" variant="h4">
       { 280 + 8233}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      { new Date().getDate()-1 }-
      { new Date().getMonth() }-
      {new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="https://www.wbhealth.gov.in/pages/corona/bed_availability" >
          Official source
        </Link>
      </div>
    </React.Fragment>
  );
}