import { useState, useEffect } from 'react';
import QuestionDetail from './pages/Question/QuestionDetail.jsx';
import BaseLayout from './layouts/BaseLayout.jsx';
import SideBarLayout from './layouts/SideBarLayout.jsx';
import Home from './pages/Question/Home.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

function App() {
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

  return (
    <BaseLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      <SideBarLayout>
        <Home />
        {/* <QuestionDetail id={"q1"} /> */}
        {/* <Login /> */}
        {/* <Register /> */}
      </SideBarLayout>
    </BaseLayout>
  );
}

export default App;