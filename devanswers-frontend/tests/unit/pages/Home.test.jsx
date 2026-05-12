import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { questions as mockQuestions } from '../../../data/questions.js';
import Home from '../../../src/pages/Question/Home.jsx';

describe('Home', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('renders the page heading and Ask Question button on load', () => {
		render(<Home />);

		expect(screen.getByRole('heading', { name: 'All Questions' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Ask Question' })).toBeInTheDocument();
	});

	it('shows the loading spinner before questions finish loading', () => {
		render(<Home />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByText('Loading questions...')).toBeInTheDocument();
	});

	it('shows a zero question count before the delayed load completes', () => {
		render(<Home />);

		expect(screen.getByText('0 Questions')).toBeInTheDocument();
	});

	it('updates the question count after the delayed load completes', () => {
		render(<Home />);

		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(screen.getByText(`${mockQuestions.length} Questions`)).toBeInTheDocument();
	});

	it('renders loaded question details from the questions data', () => {
		render(<Home />);

		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(screen.getByRole('button', { name: mockQuestions[0].title })).toBeInTheDocument();
		expect(screen.getByText(mockQuestions[0].description)).toBeInTheDocument();
		expect(screen.getByText(String(mockQuestions[0].voteCount))).toBeInTheDocument();
		expect(screen.getByText(mockQuestions[0].author.name)).toBeInTheDocument();
	});
});