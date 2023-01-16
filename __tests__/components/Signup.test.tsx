import { render, screen } from '@testing-library/react';
import Signup from '@/components/Signup/Signup';

describe('Signup', () => {
  it('renders a heading', () => {
    render(<Signup />);

    // const heading = screen.getByRole('heading', {
    //   name: /Sign up form\.js!/i,
    // })

    // expect(heading).toBeInTheDocument()
  });
});
