const BASE_URL = 'https://dummyjson.com/';

export const getUsers = async () => {
  const response = await fetch(BASE_URL + 'users');
  const result = await response.json();
  return result.users;
};

export const getUserById = async (id) => {
  const response = await fetch(BASE_URL + `users/${id}`);
  const result = await response.json();
  return result;
};
