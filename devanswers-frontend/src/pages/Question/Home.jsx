import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { questions as mockQuestions } from '../../../data/questions.js';
import QuestionList from '../../components/Question/QuestionList.jsx';
import './Home.css';

const Home = ({ onSelectQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timerId = window.setTimeout(() => {
      setQuestions(mockQuestions);
      setLoading(false);
    }, 500);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  const handleAskQuestion = () => {
    window.alert('Ask Question clicked');
  };

  return (
    <Container fluid className="home-container py-4 px-3 px-md-4">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} className="home-col">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
            <div>
              <h1 className="home-title mb-1">All Questions</h1>
              <p className="home-subtitle mb-0">{questions.length} Questions</p>
            </div>
            <Button className="home-ask-btn" onClick={handleAskQuestion}>
              Ask Question
            </Button>
          </div>

          <QuestionList questions={questions} loading={loading} onSelectQuestion={onSelectQuestion} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;