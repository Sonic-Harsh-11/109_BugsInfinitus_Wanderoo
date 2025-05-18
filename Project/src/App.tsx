import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import UserPanel from './components/UserPanel';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateTrip from './pages/CreateTrip';
import Profile from './pages/Profile';
import ReelAnalyzer from "./components/ReelAnalyzer";
function App() {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        <Navbar onProfileClick={() => setIsUserPanelOpen(true)} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reel-analyzer" element={<ReelAnalyzer />} />
          </Routes>
        </main>
        <ChatWidget />
        <UserPanel isOpen={isUserPanelOpen} onClose={() => setIsUserPanelOpen(false)} />
      </div>
    </Router>
  );
}

export default App;