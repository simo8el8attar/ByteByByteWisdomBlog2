import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Install react-ga4 using npm
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetail from './pages/PostDetail';

// Google Analytics Tracking ID
const TRACKING_ID = "G-5CRD2S8JZ6"; // Replace with your GA4 Tracking ID

// Component for handling Google Analytics
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID, { debug: true });
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Analytics /> {/* Analytics component to track page views */}
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:slug" element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
