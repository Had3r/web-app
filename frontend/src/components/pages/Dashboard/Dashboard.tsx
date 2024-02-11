import { Container } from '@ui/'
import { Link } from 'react-router-dom'

export const Dashboard = () => (
  <Container>
    <h1>Dashboard</h1>
    <Link to="/create-account">Create Account</Link>
    <Link to="/view-accounts">View Accounts</Link>
  </Container>
)
