import React from 'react';
import { useGetUserRepositoriesLanguageQuery } from '@/services';
import { 
	Box, 
	LinearProgress,
	Chip,
	Typography,
	Divider, 
} from '@/components';

interface LanguageUsageProps {
  username: string;
}

const LanguageUsage: React.FC<LanguageUsageProps> = ({ username }) => {
  const { data, error, isLoading } = useGetUserRepositoriesLanguageQuery(username);

  if (isLoading) {
    return <Box sx={{ width: '100%' }}><LinearProgress /></Box>;
  }

  if (!data || error) {
    return <div>No data available</div>;
  }

	const languageCounts: { [lang: string]: number } = data.reduce<{ [lang: string]: number }>((acc, repo) => {
		const lang = repo.language || 'Unknown';
		acc[lang] = (acc[lang] || 0) + 1;
		return acc;
	}, {});

  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
			<Typography variant="h4">Languages Usage for {username}</Typography>
      <Box sx={{ my: 4 }}>
        {Object.entries(languageCounts).map(([lang, count]) => (
					<Chip key={lang} label={`${lang}: ${((count / data.length) * 100).toFixed(2)}%`} sx={{ mx: 0.5, mb: 1 }} />
        ))}
      </Box>
			<Divider />
    </Box>
  );
};

export default LanguageUsage;
