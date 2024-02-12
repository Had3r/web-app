export const getAccountById = async (id: string) => {
  const response = await fetch(`http://localhost:3001/accounts/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
