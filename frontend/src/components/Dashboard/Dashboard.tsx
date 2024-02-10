import { Link } from 'react-router-dom'

export const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="/create-account">Create Account</Link>
    <Link to="/view-accounts">View Accounts</Link>
  </div>
)
