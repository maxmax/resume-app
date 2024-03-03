import { render, screen, waitFor } from '@testing-library/react';
import LanguageUsage from '..';
import { useGetUserRepositoriesLanguageQuery } from '@/services';

// Mock for the case when data is loaded
const mockDataLoaded = {
  isLoading: false,
  data: [
    { language: 'JavaScript' },
    { language: 'TypeScript' },
    { language: 'Python' },
  ],
  error: undefined,
};

// Mock for the case when the data is not loaded or is empty
const mockDataEmpty = {
  isLoading: false,
  data: [],
  error: undefined,
};

// Mock for the case when data is loaded
const mockDataLoading = {
  isLoading: true,
  data: undefined,
  error: undefined,
};

jest.mock('@/services', () => ({
  useGetUserRepositoriesLanguageQuery: jest.fn(),
}));

describe('LanguageUsage', () => {

  it('should render successfully with mocked data', async () => {
    // Use a mock for the loaded data
    (useGetUserRepositoriesLanguageQuery as jest.Mock).mockReturnValue(mockDataLoaded);

    render(<LanguageUsage username="octocat" />);

    await waitFor(() => {
      expect(screen.getByText('Languages Usage for octocat')).toBeTruthy();
      expect(screen.getByText('JavaScript: 33.33%')).toBeTruthy();
      expect(screen.getByText('TypeScript: 33.33%')).toBeTruthy();
      expect(screen.getByText('Python: 33.33%')).toBeTruthy();
    });
  });

  it('should render successfully with empty data', async () => {
    (useGetUserRepositoriesLanguageQuery as jest.Mock).mockReturnValue(mockDataEmpty);

    render(<LanguageUsage username="octocat" />);

    await waitFor(() => {
      expect(screen.queryByText('Languages Usage for octocat')).toBeNull();
    });
  });

  it('should render loading indicator while data is fetching', async () => {
    (useGetUserRepositoriesLanguageQuery as jest.Mock).mockReturnValue(mockDataLoading);

    render(<LanguageUsage username="octocat" />);

    expect(screen.getByRole('progressbar')).toBeTruthy();
  });

});
