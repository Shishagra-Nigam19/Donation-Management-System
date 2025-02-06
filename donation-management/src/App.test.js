import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('navigates to the correct page when the link is clicked', () => {
    const linkElement = screen.getByText(/learn react/i);
    userEvent.click(linkElement);
    
    // Assuming the App component changes the URL or displays new content
    const newContent = screen.getByText(/new content after clicking/i); // Adjust this based on your app's behavior
    expect(newContent).toBeInTheDocument();
  });

  test('checks if the link has the correct href', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toHaveAttribute('href', '/learn-react'); // Adjust the href based on your app's routing
  });
});