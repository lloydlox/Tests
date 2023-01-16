import { render, screen } from '@testing-library/react';
import Login from '@/components/Login/Login';

describe('Login', () => {
  it('renders a heading', () => {
    render(<Login />);

    // const heading = screen.getByRole('heading', {
    //   name: /Login form\.js!/i,
    // })

    // expect(heading).toBeInTheDocument()
  });
});
