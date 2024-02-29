import React from 'react';
import { useGetUserRepositoriesLanguageQuery } from '@/services';
import { 
	Box, 
	LinearProgress,
	Chip,
	Typography,
	Divider,
	PieChart,
  Grid,
} from '@/components';

interface LanguageUsageProps {
  username: string;
}

const LanguageUsage: React.FC<LanguageUsageProps> = ({ username }) => {
  
  const { data, error, isLoading } = useGetUserRepositoriesLanguageQuery(username);

  if (isLoading) {
    return <Box sx={{ width: '100%' }}><LinearProgress /></Box>;
  }

  if (!data || !data.length || error) {
    return null;
  }

	const languageCounts: { [lang: string]: number } = data.reduce<{ [lang: string]: number }>((acc, repo) => {
		const lang = repo.language || 'Unknown';
		acc[lang] = (acc[lang] || 0) + 1;
		return acc;
	}, {});

  const languageCountsPercent = Object.entries(languageCounts).map(([lang, count]) => ({
    label: lang,
    value: Number(((count / data.length) * 100).toFixed(2)),
  }));

  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
			<Typography variant="h4" sx={{ py: 4 }}>Languages Usage for {username}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PieChart data={languageCountsPercent} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ my: 4 }}>
            {languageCountsPercent.map(({ label, value }) => (
              <Chip key={label} label={`${label}: ${value}%`} sx={{ mx: 0.5, mb: 1 }} />
            ))}
          </Box>
        </Grid>
      </Grid>
			<Divider />
    </Box>
  );
};

export default LanguageUsage;
