import { API_URL } from '../config'

interface AccountData {
  id: string | null
  ownerId: string
  currency: string
  balance: number
}

export async function updateAccountByOwnerId(
  accountData: AccountData,
  ownerId: string
): Promise<void> {
  try {
    const url = accountData.id
      ? `${API_URL}/accounts/${accountData.id}`
      : `${API_URL}/accounts/${ownerId}`

    const response = await fetch(url, {
      method: 'PATCH', // Lub 'PUT', w zależności od wymagań API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    })

    if (!response.ok) {
      throw new Error('Failed to update account')
    }

    // Opcjonalnie: obsługa odpowiedzi, np. wyświetlenie komunikatu o sukcesie
    console.log('Account updated successfully')
  } catch (error) {
    console.error('Error updating account:', error)
    throw error
  }
}
