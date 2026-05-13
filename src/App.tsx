import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HorsTravailPage from './pages/HorsTravailPage';
import WorkProjectPage from './pages/WorkProjectPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hors-travail" element={<HorsTravailPage />} />
        <Route path="/travail/:slug" element={<WorkProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
