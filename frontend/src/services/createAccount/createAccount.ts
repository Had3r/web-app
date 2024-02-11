import type { AccountData } from './createAccount.type'
import { API_URL } from '../config'

export async function createAccount(accountData: AccountData): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    })

    if (!response.ok) {
      throw new Error('Failed to create account')
    }

    // Opcjonalnie: obsługa odpowiedzi, np. wyświetlenie komunikatu o sukcesie
    console.log('Account created successfully')
  } catch (error) {
    console.error('Error creating account:', error)
    throw error
  }
}
