import { useState } from 'react';

import './AnswerForm.css';

const AnswerForm = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answer.trim()) {
      alert('Answer cannot be empty!');
      return;
    }

    alert('Answer submitted!');
    setAnswer('');
  };

  return (
    <section className="answer-form-card">
      <h2 className="answer-form-title">Your Answer</h2>
      <form onSubmit={handleSubmit} className="answer-form">
        <textarea
          rows={8}
          className="answer-form-textarea"
          placeholder="Write your answer here..."
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          aria-label="Your Answer"
        />
        <button type="submit" className="answer-form-submit-btn">
          Post Answer
        </button>
      </form>
    </section>
  );
};

export default AnswerForm;