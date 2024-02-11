import React, { useState, useEffect } from 'react'

import { FormInput, Button } from '@components/ui'
import {
  checkIfAccountExists,
  createAccount,
  updateAccountByOwnerId,
} from '@services/'
import { useParams } from 'react-router-dom'

export const AccountForm = () => {
  const { id } = useParams<{ id: string }>()

  const [formData, setFormData] = useState({
    id: null,
    ownerId: '',
    currency: '',
    balance: 0,
  })
  const [ownerExists, setOwnerExists] = useState(false)

  useEffect(() => {
    const checkOwner = async () => {
      if (id) {
        const exists = await checkIfAccountExists(id)
        setOwnerExists(exists)
        if (exists) {
          // Add logic to fill the form with data from the existing account
        }
      }
    }

    checkOwner()
  }, [id])

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target
    const { id, value } = target

    setFormData((prevState) => ({ ...prevState, [id]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { id, ownerId, currency, balance } = formData

    // Early return if ownerId is not provided
    if (!ownerId) {
      alert('Owner ID is required.')
      return
    }

    try {
      // Separate logic for creation and update
      if (ownerExists) {
        // Update existing account
        await updateAccountByOwnerId(
          { id, ownerId, currency, balance: Number(balance) },
          ownerId
        )
        alert('Account updated successfully!')
      } else {
        // Create new account
        await createAccount({ ownerId, currency, balance: Number(balance) })
        alert('Account created successfully!')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
      alert('Failed to submit the form. Please try again.')
    }
  }

  return (
    <form
      className="mx-auto max-w-[600px] flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div className={`text-${ownerExists ? 'green' : 'blue'}-500`}>
        {ownerExists ? 'Edit account data.' : 'Create new account.'}
      </div>
      <FormInput
        label="Owner ID:"
        value={formData.ownerId}
        id="ownerId"
        placeholder="Enter owner ID"
        onChange={handleChange}
      />
      <FormInput
        label="Currency:"
        value={formData.currency}
        id="currency"
        placeholder="Enter currency"
        onChange={handleChange}
      />
      <FormInput
        label="Balance:"
        value={formData.balance}
        id="balance"
        placeholder="Enter balance"
        type="number"
        onChange={handleChange}
      />

      <Button className="mt-12" type="submit">
        Save
      </Button>
    </form>
  )
}
