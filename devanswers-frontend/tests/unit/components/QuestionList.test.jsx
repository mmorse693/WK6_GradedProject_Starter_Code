import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import QuestionList from '../../../src/components/Question/QuestionList.jsx';

const mockQuestions = [
	{
		_id: 'q1',
		title: 'How do I test React components?',
		description: 'I need a reliable way to test React components with Vitest and Testing Library.',
		voteCount: 7,
		answerCount: 3,
		tags: [{ name: 'React' }, { name: 'Testing' }],
		author: { _id: 'u1', name: 'qaDev' },
		createdAt: '2023-10-18T12:00:00Z',
	},
	{
		_id: 'q2',
		title: 'Why is my useEffect running twice?',
		description: 'My effect fires two times in development and I want to understand why.',
		voteCount: 2,
		answers: [{ _id: 'a1' }],
		tags: [{ name: 'Hooks' }],
		author: { _id: 'u2', name: 'hookUser' },
		createdAt: '2023-10-19T08:30:00Z',
	},
];

describe('QuestionList', () => {
	it('shows a loading state when loading is true', () => {
		render(<QuestionList questions={[]} loading />);

		expect(screen.getByText('Loading questions...')).toBeInTheDocument();
		expect(screen.getByRole('status')).toBeInTheDocument();
	});

	it('shows an empty state when no questions are available', () => {
		render(<QuestionList questions={[]} loading={false} />);

		expect(screen.getByText('No questions found')).toBeInTheDocument();
	});

	it('renders each question title and description from props', () => {
		render(<QuestionList questions={mockQuestions} loading={false} />);

		expect(screen.getByRole('button', { name: 'How do I test React components?' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Why is my useEffect running twice?' })).toBeInTheDocument();
		expect(screen.getByText(/reliable way to test react components/i)).toBeInTheDocument();
		expect(screen.getByText(/effect fires two times in development/i)).toBeInTheDocument();
	});

	it('renders vote counts, answer counts, tags, authors, and formatted dates from props', () => {
		render(<QuestionList questions={mockQuestions} loading={false} />);

		const firstCard = screen.getByRole('button', { name: 'How do I test React components?' }).closest('.qcard');
		const secondCard = screen.getByRole('button', { name: 'Why is my useEffect running twice?' }).closest('.qcard');

		expect(firstCard).not.toBeNull();
		expect(secondCard).not.toBeNull();
		expect(within(firstCard).getByText('7')).toBeInTheDocument();
		expect(within(firstCard).getByText('3')).toBeInTheDocument();
		expect(within(secondCard).getByText('2')).toBeInTheDocument();
		expect(within(secondCard).getByText('1')).toBeInTheDocument();

		expect(screen.getByText('React')).toBeInTheDocument();
		expect(screen.getByText('Testing')).toBeInTheDocument();
		expect(screen.getByText('Hooks')).toBeInTheDocument();
		expect(screen.getByText('qaDev')).toBeInTheDocument();
		expect(screen.getByText('hookUser')).toBeInTheDocument();
		expect(screen.getByText('Asked Oct 18, 2023')).toBeInTheDocument();
		expect(screen.getByText('Asked Oct 19, 2023')).toBeInTheDocument();
	});

	it('calls onSelectQuestion with the selected question id when a title is clicked', () => {
		const onSelectQuestion = vi.fn();

		render(<QuestionList questions={mockQuestions} loading={false} onSelectQuestion={onSelectQuestion} />);

		fireEvent.click(screen.getByRole('button', { name: 'Why is my useEffect running twice?' }));

		expect(onSelectQuestion).toHaveBeenCalledWith('q2');
		expect(onSelectQuestion).toHaveBeenCalledTimes(1);
	});
});