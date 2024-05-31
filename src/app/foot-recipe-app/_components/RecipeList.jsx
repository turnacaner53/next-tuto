import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

export default async function RecipeList({ recipes }) {
  return (
    <div>
      <div className='mx-auto p-4 sm:max-w-full md:max-w-4xl lg:max-w-6xl'>
        <h2 className='mb-12 text-2xl font-semibold'>Recipes</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/foot-recipe-app/${recipe.id}`}>
              <Card>
                <CardContent className='cursor-pointer overflow-hidden rounded-md bg-slate-200 shadow-md transition-all duration-300 ease-out hover:scale-[1.05] dark:bg-slate-800'>
                  <div className='aspect-w-16 aspect-h-8 w-full pt-2'>
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      width={500}
                      height={500}
                      style={{ objectFit: 'cover' }}
                      className=' rounded-md  '
                    />
                    <div className='p-6'>
                      <CardTitle className='truncate text-lg font-semibold text-gray-900 dark:text-gray-400'>
                        {recipe.name}
                      </CardTitle>
                      <div className='mt-4 flex flex-wrap items-center gap-2'>
                        <p className='text-md text-muted-foreground'>Rating: {recipe.rating}</p>
                        <p className='text-md font-bold text-muted-foreground'>{recipe.cuisine}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
