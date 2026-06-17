/**
 * @file App.tsx
 * @description Root application component for the web interface.
 * Implements React Router for client-side routing, Analytics hooks,
 * and context providers (PerformanceContext) for optimizing animations globally.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Download from './pages/Download';
import Privacy from './pages/Privacy';
import AuthPage from './pages/AuthPage';

/**
 * Main application component.
 * Sets up the routing structure and global UI wrappers.
 * 
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="download" element={<Download />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
