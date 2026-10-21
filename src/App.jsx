
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import ScrollProgress from './components/layout/ScrollProgress';
import ScrollManager from './components/layout/ScrollManager';
import Navbar from './components/layout/Navbar';
import Page from './components/layout/Page';
import SiteLoader from './components/SiteLoader';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BusinessGrowthStrategy from './pages/BusinessGrowthStrategy';
import BusinessGrowthStrategyAlt from './pages/BusinessGrowthStrategyAlt';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Article from './pages/Article';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound404 from './pages/Unknown';

const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  {
    path: '/services/business-growth-strategy',
    element: <BusinessGrowthStrategy />,
  },
  {
    path: '/services/business-growth-strategy-alt',
    element: <BusinessGrowthStrategyAlt />,
  },
  { path: '/industries', element: <Industries /> },
  { path: '/insights', element: <Insights /> },
  {
    path: '/insights/unlocking-sustainable-growth',
    element: <Article />,
  },
  { path: '/careers', element: <Careers /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
];

export default function App() {
  const location = useLocation();

  const isNotFound = !ROUTES.some(
    (route) => route.path === location.pathname
  );

  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <ScrollProgress />

      <SiteLoader />

      {!isNotFound && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Page>{route.element}</Page>}
            />
          ))}

          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  );
}
