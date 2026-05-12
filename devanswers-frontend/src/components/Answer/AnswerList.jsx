import { Card } from 'react-bootstrap';
import { FaClock, FaUser } from 'react-icons/fa';

import VoteButtons from '../Shared/VoteButtons.jsx';
import './AnswerList.css';

const formatAnswerDate = (answer) => {
  const rawDate = answer?.createdAt || answer?.postedAt || answer?.date;

  if (!rawDate) {
    return 'Date unavailable';
  }

  const parsedDate = new Date(rawDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Date unavailable';
  }

  return parsedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const AnswerList = ({ answers }) => {
  const answerItems = Array.isArray(answers) ? answers : [];
  const answerCount = answerItems.length;

  return (
    <section className="answer-list-section">
      <h2 className="answer-list-title">
        {answerCount} {answerCount === 1 ? 'Answer' : 'Answers'}
      </h2>

      {answerCount === 0 ? (
        <Card className="answer-list-empty-card">
          <Card.Body>
            <p className="answer-list-empty-text mb-0">No answers yet. Be the first to answer this question.</p>
          </Card.Body>
        </Card>
      ) : (
        <div className="answer-list-grid">
          {answerItems.map((answer, index) => (
            <Card
              key={answer._id}
              className={`answer-card ${index % 2 === 0 ? 'answer-card-even' : 'answer-card-odd'}`}
            >
              <Card.Body className="answer-card-body">
                <div className="answer-card-votes">
                  <VoteButtons
                    voteCount={answer.voteCount || 0}
                    onUpvote={() => alert('Answer upvoted!')}
                    onDownvote={() => alert('Answer downvoted!')}
                    variant="outline"
                  />
                </div>

                <div className="answer-card-content">
                  <p className="answer-card-text mb-3">{answer.answerText}</p>
                  <div className="answer-card-meta">
                    <span className="answer-card-meta-item">
                      <FaUser aria-hidden="true" />
                      <strong>{answer.author?.name || 'Anonymous'}</strong>
                    </span>
                    <span className="answer-card-meta-item">
                      <FaClock aria-hidden="true" />
                      <span>{formatAnswerDate(answer)}</span>
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default AnswerList;