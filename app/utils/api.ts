export async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  } catch (error) {
    console.error('An error occurred while fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}