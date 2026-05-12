import { Card, Badge } from 'react-bootstrap';
import { FaComments, FaUser, FaClock } from 'react-icons/fa';
import VoteButtons from '../Shared/VoteButtons.jsx';
import './QuestionCard.css';

const QuestionCard = ({ question }) => {
  if (!question || !question._id) return null;

  const voteCount = question.voteCount || question.upvotes || 0;
  const answerCount = question.answerCount || (Array.isArray(question.answers) ? question.answers.length : 0);
  const authorName = question.author?.name || 'Anonymous';
  const createdDate = question.createdAt ? new Date(question.createdAt) : new Date();

  const handleVote = (voteType) => {
    alert(`${voteType === 'upvote' ? 'Upvoted' : 'Downvoted'}!`);
  };

  return (
    <Card className="qcard mb-2">
      <Card.Body className="p-3">
        <div className="d-flex gap-2">
          {/* Stats Column */}
          <div className="qcard-stats-col d-flex flex-column align-items-center gap-1">
            <VoteButtons
              voteCount={voteCount}
              onUpvote={() => handleVote('upvote')}
              onDownvote={() => handleVote('downvote')}
              variant="link"
              size="sm"
            />
            <div className="d-flex align-items-center gap-1 text-muted mt-1">
              <FaComments className="qcard-comment-icon" />
              <span className="qcard-answer-count">{answerCount}</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex-grow-1">
            <Card.Title className="mb-2">
              <span className="qcard-title-link">{question.title}</span>
            </Card.Title>
            <Card.Text className="qcard-desc mb-2">{question.description}</Card.Text>
            <div className="mb-2">
              {question.tags && Array.isArray(question.tags) && question.tags.map((tag) => (
                <Badge key={tag.name || tag} className="qcard-tag-badge me-2 mb-1">
                  {tag.name || tag}
                </Badge>
              ))}
            </div>
            <div className="qcard-meta d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1">
                <FaUser className="qcard-user-icon" />
                <strong className="qcard-author">{authorName}</strong>
              </span>
              <span className="d-flex align-items-center gap-1">
                <FaClock className="qcard-clock-icon" />
                <span className="qcard-date-text">
                  Asked {createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
