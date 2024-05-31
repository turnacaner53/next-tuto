import { getRecipeById } from '@/api/dummy-json';
import Image from 'next/image';
import Link from 'next/link';

export default async function RecipeDetails({ params }) {
  const recipe = await getRecipeById(params.details);
  return (
    <div>
        <Link className='hover:text-primary text-pretty' href='/foot-recipe-app'>Go to recipes</Link>
      <div className='mx-auto max-w-2xl p-6 lg:max-w-6xl'>
        <div className='gam-8 grid grid-cols-1 items-start lg:grid-cols-2'>
          <div className='top-0 w-full gap-2 sm:flex lg:sticky'>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={300}
              height={300}
              className='mb-4 w-4/5 rounded-md object-cover'
            />
          </div>

          <div>
            <h2 className='mb-5 text-3xl font-extrabold text-slate-800 dark:text-slate-400'>
              {recipe.name}
            </h2>
            <div className='mt-5 flex flex-wrap gap-4'>
              <p className='text-xl text-muted-foreground'>{recipe.mealType[0]}</p>
            </div>
            <div className='mt-4 text-muted-foreground'>
              <p>{recipe.cuisine}</p>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-bold text-foreground'>Ingredients</h3>
              <ul className='mt-4 list-disc space-y-3 pl-4 text-sm text-muted-foreground'>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
