import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import DataDeletionPage from './pages/DataDeletionPage.jsx'
import SupportPage from './pages/SupportPage.jsx'
import InvitePage from './pages/InvitePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './styles/site.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="data-deletion" element={<DataDeletionPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="invite" element={<InvitePage />} />
          <Route path="delete-account" element={<Navigate to="/data-deletion" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
