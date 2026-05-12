import { useState, useEffect } from 'react';
import QuestionDetail from './pages/Question/QuestionDetail.jsx';
import BaseLayout from './layouts/BaseLayout.jsx';
import SideBarLayout from './layouts/SideBarLayout.jsx';
import Home from './pages/Question/Home.jsx';

function App() {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const handleSelectQuestion = (questionId) => setSelectedQuestionId(questionId);
  const handleBackToHome = () => setSelectedQuestionId(null);

  return (
    <BaseLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      <SideBarLayout>
        {selectedQuestionId ? (
          <QuestionDetail id={selectedQuestionId} onBack={handleBackToHome} />
        ) : (
          <Home onSelectQuestion={handleSelectQuestion} />
        )}
        {/* <Login /> */}
        {/* <Register /> */}
      </SideBarLayout>
    </BaseLayout>
  );
}

export default App;