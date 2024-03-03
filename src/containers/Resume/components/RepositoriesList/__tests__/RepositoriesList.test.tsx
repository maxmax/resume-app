import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesList from '..';

// Ваші тестові дані
const mockRepositories = [
  {
    id: 1,
    name: 'Repo 1',
    updated_at: '2023-01-01T00:00:00Z',
    language: 'JavaScript',
    full_name: 'username/repo1',
    html_url: 'https://example.com/repo1',
    languages_url: 'https://example.com/repo1/languages',
  },
  {
    id: 2,
    name: 'Repo 2',
    updated_at: '2023-01-02T00:00:00Z',
    language: 'TypeScript',
    full_name: 'username/repo2',
    html_url: 'https://example.com/repo2',
    languages_url: 'https://example.com/repo2/languages',
  },
];

describe('RepositoriesList component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
			<MemoryRouter>
				<RepositoriesList
					repositories={mockRepositories}
					currentPage={1}
					perPage={5}
					count={mockRepositories.length}
					selectedSort="updated"
					onPageChange={jest.fn()}
					onPerPageChange={jest.fn()}
					onSortChange={jest.fn()}
				/>
			</MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('RepositoriesList component', () => {
  it('renders repositories correctly', () => {
    render(
			<MemoryRouter>
				<RepositoriesList
					repositories={mockRepositories}
					currentPage={1}
					perPage={5}
					count={mockRepositories.length}
					selectedSort="updated"
					onPageChange={jest.fn()}
					onPerPageChange={jest.fn()}
					onSortChange={jest.fn()}
				/>
			</MemoryRouter>
    );

    // Checking that the repositories are displayed correctly
    expect(screen.getByText('Repo 1')).toBeTruthy();
    expect(screen.getByText('Repo 2')).toBeTruthy();

    // Checking if the language of the repositories is displayed
    expect(screen.getByText('JavaScript')).toBeTruthy();
    expect(screen.getByText('TypeScript')).toBeTruthy();

    // Checking if "Show more" buttons are visible
    const showMoreButtons = screen.getAllByText('Show more');
    expect(showMoreButtons).toHaveLength(mockRepositories.length);

    // Checking if pagination is displayed
		expect(screen.getByText('1–2 of 2')).toBeTruthy();
    expect(screen.getByLabelText('Rows per page:')).toBeTruthy();
  });

  it('displays message when there are no repositories', () => {
    render(
      <RepositoriesList
        repositories={[]}
        currentPage={1}
        perPage={5}
        count={0}
        selectedSort="updated"
        onPageChange={jest.fn()}
        onPerPageChange={jest.fn()}
        onSortChange={jest.fn()}
      />
    );

    expect(screen.getByText("Doesn't have any public repositories yet 🤔")).toBeTruthy();
  });
});
