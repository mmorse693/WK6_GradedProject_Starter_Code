import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import QuestionDetail from '../../../src/pages/Question/QuestionDetail.jsx';
import { questions as mockQuestions } from '../../../data/questions.js';

describe('QuestionDetail', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('shows a loading spinner before the question is loaded', () => {
		render(<QuestionDetail id="q1" />);

		expect(screen.getByLabelText('Loading question details')).toBeInTheDocument();
		expect(screen.queryByRole('heading', { name: mockQuestions[0].title })).not.toBeInTheDocument();
	});

	it('renders the loaded question content and metadata', () => {
		render(<QuestionDetail id="q1" />);

		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(screen.getByRole('heading', { name: mockQuestions[0].title })).toBeInTheDocument();
		expect(screen.getByText(mockQuestions[0].description)).toBeInTheDocument();
		expect(screen.getByText('Posted by')).toBeInTheDocument();
		expect(screen.getByText(mockQuestions[0].author.name)).toBeInTheDocument();
		expect(screen.getByText('CSS')).toBeInTheDocument();
		expect(screen.getByText('HTML')).toBeInTheDocument();
		expect(screen.getAllByText(String(mockQuestions[0].voteCount))).toHaveLength(2);
	});

	it('renders the answer list for the loaded question', () => {
		render(<QuestionDetail id="q1" />);

		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(screen.getByRole('heading', { name: '3 Answers' })).toBeInTheDocument();
		expect(screen.getByText(/you can center a div using flexbox/i)).toBeInTheDocument();
		expect(screen.getByText('cssGuru')).toBeInTheDocument();
		expect(screen.getAllByText('Date unavailable')).toHaveLength(3);
	});

	it('renders the answer form and back button after loading', () => {
		const handleBack = vi.fn();

		render(<QuestionDetail id="q1" onBack={handleBack} />);

		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(screen.getByRole('button', { name: 'Back to Questions' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Your Answer' })).toBeInTheDocument();
		expect(screen.getByRole('textbox', { name: 'Your Answer' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Post Answer' })).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'Back to Questions' }));

		expect(handleBack).toHaveBeenCalledTimes(1);
	});

	it('shows a not found message when no question matches the provided id', () => {
		render(<QuestionDetail id="missing" />);

		act(() => {
			vi.advanceTimersByTime(500);
		});

		expect(screen.getByRole('heading', { name: 'Question not found' })).toBeInTheDocument();
		expect(screen.getByText('The requested question could not be loaded.')).toBeInTheDocument();
		expect(screen.queryByRole('heading', { name: 'Your Answer' })).not.toBeInTheDocument();
	});
});