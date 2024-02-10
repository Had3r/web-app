import { Link } from 'react-router-dom'

import { Container } from '../../ui'

export const Dashboard = () => (
  <Container>
    <h1>Dashboard</h1>
    <Link to="/create-account">Create Account</Link>
    <Link to="/view-accounts">View Accounts</Link>
  </Container>
)
