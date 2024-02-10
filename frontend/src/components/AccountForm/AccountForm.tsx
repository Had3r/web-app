import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const AccountForm = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  )
}
