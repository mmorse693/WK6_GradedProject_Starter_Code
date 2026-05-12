import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaArrowUp, FaUser, FaClock } from 'react-icons/fa';
import VoteButtons from '../Shared/VoteButtons.jsx';
import './QuestionContent.css';

const QuestionContent = ({ question }) => {

  return (
    <>
      {/* Question Header */}
      <Card className="qcontent-header-card mb-4">
        <Card.Body className="p-3 p-sm-4">
          <Card.Title as="h2" className="qcontent-title mb-3">
            {question.title}
          </Card.Title>
          <div className="qcontent-meta d-flex flex-wrap gap-3 gap-sm-4">
            <span className="d-flex align-items-center gap-2">
              <FaArrowUp className="qcontent-vote-icon-up" />
              <strong>{question.voteCount || 0}</strong> votes
            </span>
            <span className="d-flex align-items-center gap-2">
              <FaClock />
              Asked {new Date(question.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </Card.Body>
      </Card>

      {/* Question Body */}
      <Card className="qcontent-body-card mb-4">
        <Card.Body className="p-3 p-sm-4">
          <Row>
            {/* Voting Controls */}
            <Col xs="auto" className="d-flex flex-column align-items-center pe-3 pe-sm-4">
              <VoteButtons
                voteCount={question.voteCount || 0}
                onUpvote={() => alert('Upvoted!')}
                onDownvote={() => alert('Downvoted!')}
                variant="outline"
                size="lg"
              />
            </Col>

            {/* Main Content */}
            <Col>
              <div className="qcontent-description mb-4">{question.description}</div>
              <div className="mb-4">
                {question.tags?.map((tag) => (
                  <Badge key={tag.name} className="qcontent-tag-badge me-2 mb-2">
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <div className="qcontent-author-row d-flex align-items-center gap-2">
                <FaUser className="qcontent-user-icon" />
                <span>Posted by </span>
                <strong className="qcontent-author-name">{question.author.name}</strong>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuestionContent;
