import React, { useState } from 'react';
import { useGetUserRepositoryLanguageQuery } from '@/services';
import { 
	Box, 
	LinearProgress,
  LineChart,
  PieChart,
  BarChart,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@/components';

interface LanguageUsageProps {
  repository: string;
}

const RepoLanguageUsage: React.FC<LanguageUsageProps> = ({ repository }) => {

  const [chartType, setChartType] = useState<'line' | 'pie' | 'bar'>('line');
  
  const { data, error, isLoading } = useGetUserRepositoryLanguageQuery(repository);

  if (isLoading) {
    return <Box sx={{ width: '100%' }}><LinearProgress /></Box>;
  }

  if (!data || error) {
    return null;
  }

  const handleChange = (event: SelectChangeEvent<unknown>) => setChartType(event.target.value as 'line' | 'pie' | 'bar');

  // Render the appropriate chart based on the selected chart type
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <LineChart data={Object.entries(data).map(([name, value]) => ({ name, value }))} />;
      case 'pie':
        return <PieChart data={Object.entries(data).map(([label, value]) => ({ label, value }))} />;
      case 'bar':
        return <BarChart data={Object.entries(data).map(([name, value]) => ({ name, value }))} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Select 
        value={chartType} 
        onChange={handleChange} 
        size="small"
        sx={{ my: 4 }}
      >
        <MenuItem value="line">Line Chart</MenuItem>
        <MenuItem value="pie">Pie Chart</MenuItem>
        <MenuItem value="bar">Bar Chart</MenuItem>
      </Select>
      {renderChart()}
    </Box>
  );
};

export default RepoLanguageUsage;
