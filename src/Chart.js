import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, cases) {
  return { time, cases };
}

const data = [
  createData('20200525',2402),
  createData('20200528',2868),
  createData('20200601',3466),
  createData('20200604',3928),
  createData('20200607',4884),
  createData('20200610',5549),
  createData('20200613',6156),
  createData('20200616',5881),
  createData('20200619',5787),
  createData('20200622',5615),
  createData('20200625',4852)
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