import React, { useState } from 'react'

import { FormInput, Button } from '@components/ui'
import {
  checkIfAccountExists,
  createAccount,
  updateAccountByOwnerId,
} from '@services/'

export const AccountForm = () => {
  const [formData, setFormData] = useState({
    ownerId: '',
    currency: '',
    balance: '',
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target
    const { id, value } = target

    setFormData((prevState) => ({ ...prevState, [id]: value }))
  }

  // Funkcja do walidacji i zapisu formularza
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { ownerId, currency, balance } = formData

    try {
      if (ownerId) {
        // Sprawdzenie, czy konto z tym ownerId już istnieje
        // Zakładamy, że funkcja `accountExists` sprawdza istnienie konta
        // To jest tylko przykład, musisz zaimplementować logikę sprawdzania istnienia konta na podstawie Twojego API
        const accountExists = await checkIfAccountExists(ownerId)
        if (accountExists) {
          // Aktualizacja istniejącego konta
          await updateAccountByOwnerId({ ownerId, currency, balance }, ownerId)
          alert('Account updated successfully!')
        } else {
          // Tworzenie nowego konta
          await createAccount({ ownerId, currency, balance })
          alert('Account created successfully!')
        }
      } else {
        alert('Owner ID is required.')
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
