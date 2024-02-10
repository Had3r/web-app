/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const AccountsTable = () => {
  const [accounts, setAccounts] = useState([])

  return (
    <div>
      <h1>Accounts</h1>
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}
