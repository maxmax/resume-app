import { render, screen } from '@testing-library/react';
import UserInfo from '..';

const mockUser = {
  name: 'John Doe',
  avatar_url: 'https://example.com/avatar.jpg',
  html_url: 'https://example.com/johndoe',
  created_at: '2023-01-01T00:00:00Z',
  updated_at: '2023-01-05T00:00:00Z',
  public_repos: 10,
  followers: 100,
  blog: 'https://example.com/blog',
};

describe('UserInfo component', () => {
  it('renders user information correctly', () => {
    render(<UserInfo user={mockUser} />);
    
    expect(screen.getByText(mockUser.name)).toBeTruthy();
    expect(screen.getByAltText('Remy Sharp')).toBeTruthy();
    expect(screen.getByText('Website:')).toBeTruthy();

    // Checking href attributes
    const htmlUrlElement = screen.getByText(mockUser.html_url) as HTMLAnchorElement;
    expect(htmlUrlElement.getAttribute('href')).toEqual(mockUser.html_url);

    const blogElement = screen.getByText(mockUser.blog) as HTMLAnchorElement;
    expect(blogElement.getAttribute('href')).toEqual(mockUser.blog);
  });
});