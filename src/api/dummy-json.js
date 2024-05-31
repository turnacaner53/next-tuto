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

export const getRecipes = async () => {
  const response = await fetch(BASE_URL + 'recipes');
  if (!response.ok) throw new Error('Failed to fetch recipes');
  const result = await response.json();
  return result.recipes;
};

export const getRecipeById = async (id) => {
  const response = await fetch(BASE_URL + `recipes/${id}`);
  if (!response.ok) throw new Error('Failed to fetch recipe');
  const result = await response.json();
  return result;
};
