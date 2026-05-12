import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

import { questions as mockQuestions } from '../../../data/questions.js';
import AnswerForm from '../../components/Answer/AnswerForm.jsx';
import AnswerList from '../../components/Answer/AnswerList.jsx';
import QuestionContent from '../../components/Question/QuestionContent.jsx';
import './QuestionDetail.css';

const QuestionDetail = ({ id }) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timerId = window.setTimeout(() => {
      const matchedQuestion = mockQuestions.find((item) => item._id === id) || null;

      setQuestion(matchedQuestion);
      setLoading(false);
    }, 500);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [id]);

  return (
    <Container fluid className="question-detail-container py-4 px-3 px-md-4">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} className="question-detail-col">
          {loading ? (
            <div className="question-detail-loading d-flex justify-content-center py-5" role="status" aria-live="polite">
              <Spinner animation="border" aria-label="Loading question details" />
            </div>
          ) : question ? (
            <>
              <QuestionContent question={question} />
              <AnswerList answers={question.answers || []} />
              <AnswerForm questionId={question._id} />
            </>
          ) : (
            <section className="question-detail-empty py-4">
              <h1 className="h4 mb-2">Question not found</h1>
              <p className="mb-0">The requested question could not be loaded.</p>
            </section>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionDetail;