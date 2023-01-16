import { render, screen } from '@testing-library/react';
import Homepage from '@/components/Homepage/Homepage';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Homepage />);

    // const heading = screen.findAllByAltText('Welcome to Urevise exam preparation');

    // expect(heading).toBeInTheDocument()
  });
});
