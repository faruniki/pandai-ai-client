import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './Pages/Main/ChatPage';
import SearchPage from './Pages/Main/SearchPage';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pandai-chat" element={<ChatPage />} />
        <Route path="/pandai-search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
