import { MainLayout } from '@components/layouts';
import { Dashboard, AccountForm, AccountsTable, AccountSuccess } from 'pages'; // Import the new component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-account" element={<AccountForm />} />
          <Route path="/edit-account/:id" element={<AccountForm />} />
          <Route path="/view-accounts" element={<AccountsTable />} />
          <Route path="/account-success" element={<AccountSuccess />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
