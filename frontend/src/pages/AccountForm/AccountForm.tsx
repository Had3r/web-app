import React, { useState } from 'react'

export const AccountForm = () => {
  // Przykład stanu formularza
  const [formData, setFormData] = useState({
    ownerId: '',
    currency: '',
    balance: '',
  })

  // Funkcja do obsługi zmian w formularzu
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  // Funkcja do walidacji i zapisu formularza
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Tutaj dodaj logikę walidacji
    // Jeśli walidacja przebiegnie pomyślnie, zapisz dane
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ownerId">Owner ID:</label>
        <input
          type="number"
          id="ownerId"
          name="ownerId"
          value={formData.ownerId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="balance">Balance:</label>
        <input
          type="number"
          id="balance"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}
