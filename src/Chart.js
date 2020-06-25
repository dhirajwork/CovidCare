import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, cases) {
  return { time, cases };
}

const data = [
  createData('20200425',2402),
  createData('20200428',2868),
  createData('20200501',3466),
  createData('20200504',3928),
  createData('20200507',4884),
  createData('20200510',5549),
  createData('20200513',6156),
  createData('20200516',5881),
  createData('20200519',5787),
  createData('20200522',),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Last 30 days</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Cases
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="cases" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}