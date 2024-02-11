import { API_URL } from '../config'

interface AccountData {
  ownerId: string
  currency: string
  balance: string
}

export async function updateAccountByOwnerId(
  accountData: AccountData,
  ownerId: string
): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/accounts/${ownerId}`, {
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
