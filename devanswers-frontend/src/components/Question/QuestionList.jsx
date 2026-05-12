import { Spinner } from 'react-bootstrap';
import QuestionCard from './QuestionCard.jsx';
import './QuestionList.css';

const QuestionList = ({ questions, loading }) => {
  if (loading) {
    return (
      <div className="qlist-loading" role="status" aria-live="polite">
        <Spinner animation="border" className="qlist-spinner" />
        <p className="mt-3 mb-0">Loading questions...</p>
      </div>
    );
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return <p className="qlist-empty mb-0">No questions found</p>;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard
          key={question._id || question.id || question.title}
          question={question}
        />
      ))}
    </div>
  );
};

export default QuestionList;
