import { getRecipes } from '@/api/dummy-json';

import RecipeList from './_components/RecipeList';

export default async function FootRecipes() {
  const recipes = await getRecipes();

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
}
