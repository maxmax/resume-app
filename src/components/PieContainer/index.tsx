import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };

interface PieLanguageProps {
  seriesData: { label: string, value: number }[];
}

const PieContainer: React.FC<PieLanguageProps> = ({ seriesData }) => {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2} sx={{ mt: 2 }}>
      <Box flexGrow={1}>
        <PieChart series={[{ data: seriesData }]} slotProps={{ legend: { hidden: true } }} {...pieParams} />
      </Box>
    </Stack>
  );
};

export default PieContainer;
