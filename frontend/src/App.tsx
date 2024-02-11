import { MainLayout } from '@layouts/'
import { Dashboard, AccountForm, AccountsTable } from '@pages/'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-account" element={<AccountForm />} />
          <Route path="/edit-account/:id" element={<AccountForm />} />
          <Route path="/view-accounts" element={<AccountsTable />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
