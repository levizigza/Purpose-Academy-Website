import { Route, Routes } from 'react-router-dom'
import { Shell } from './components/Chrome'
import { AboutPage } from './pages/About'
import { AdmissionsPage } from './pages/Admissions'
import { ContactPage } from './pages/Contact'
import { EmployersPage } from './pages/Employers'
import { HomePage } from './pages/Home'
import { LearningPage } from './pages/Learning'
import { NotFoundPage } from './pages/NotFound'
import { OutcomesPage } from './pages/Outcomes'
import { PrivacyPage } from './pages/Privacy'
import { ProgramPage, ProgramsPage } from './pages/Programs'
import { ProtectionPage } from './pages/Protection'
import { SupportPage } from './pages/Support'

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/outcomes" element={<OutcomesPage />} />
        <Route path="/protection" element={<ProtectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Shell>
  )
}
