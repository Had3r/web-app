import { API_URL } from '../config'

export async function checkIfAccountExists(ownerId: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/accounts/${ownerId}`)
    if (response.ok) {
      // Zakładamy, że jeśli serwer zwrócił odpowiedź 200 OK, konto istnieje
      return true
    } else if (response.status === 404) {
      // Jeśli serwer zwrócił błąd 404, oznacza to, że konto nie istnieje
      return false
    } else {
      // Inne kody odpowiedzi traktujemy jako błąd
      throw new Error('Failed to check account existence')
    }
  } catch (error) {
    console.error('Error checking account existence:', error)
    throw error // Rzucamy wyjątek, aby obsłużyć go na wyższym poziomie
  }
}
