export const getAccountById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/accounts/${id}`);
    if (!response.ok) {
      return Promise.reject('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching account:', error);
    return Promise.reject(error);
  }
};
