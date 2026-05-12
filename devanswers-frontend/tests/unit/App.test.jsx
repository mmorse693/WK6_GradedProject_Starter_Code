import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import App from '../../src/App.jsx';

vi.mock('../../src/layouts/BaseLayout.jsx', () => ({
  default: ({ children }) => <div data-testid="base-layout-mock">{children}</div>,
}));

vi.mock('../../src/layouts/SideBarLayout.jsx', () => ({
  default: ({ children }) => <div data-testid="sidebar-layout-mock">{children}</div>,
}));

vi.mock('../../src/pages/Question/Home.jsx', () => ({
  default: ({ onSelectQuestion }) => (
    <div>
      <div data-testid="home-screen">Home screen</div>
      <button type="button" onClick={() => onSelectQuestion('q2')}>
        Open Question
      </button>
    </div>
  ),
}));

vi.mock('../../src/pages/Question/QuestionDetail.jsx', () => ({
  default: ({ id, onBack }) => (
    <div>
      <div data-testid="question-detail-screen">Question detail for {id}</div>
      <button type="button" onClick={onBack}>
        Back to Questions
      </button>
    </div>
  ),
}));

describe('App', () => {
  it('shows the home screen first, opens a selected question, and returns home', () => {
    render(<App />);

    expect(screen.getByTestId('home-screen')).toBeInTheDocument();
    expect(screen.queryByTestId('question-detail-screen')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Question' }));

    expect(screen.queryByTestId('home-screen')).not.toBeInTheDocument();
    expect(screen.getByTestId('question-detail-screen')).toHaveTextContent('Question detail for q2');

    fireEvent.click(screen.getByRole('button', { name: 'Back to Questions' }));

    expect(screen.getByTestId('home-screen')).toBeInTheDocument();
    expect(screen.queryByTestId('question-detail-screen')).not.toBeInTheDocument();
  });
});