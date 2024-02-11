import { Link } from 'react-router-dom';

export const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <p>Total Accounts: 5</p>
    <p>Total Balance: 1000</p>
    <nav className="py-8 inline-flex flex-col gap-4">
      <Link to="/create-account">Create Account</Link>
      <Link to="/view-accounts">View Accounts</Link>
    </nav>
  </>
);
