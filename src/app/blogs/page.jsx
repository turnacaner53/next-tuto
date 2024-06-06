import { fetchBlogs } from '@/actions/blog';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import Blog from './_components/Blog';

export default async function Blogs() {
  const blogList = await fetchBlogs();

  console.log(blogList, 'blogList');

  return (
    <div className='container'>
      <div className='mx-auto flex items-center justify-between gap-2'>
        <Link href='/blogs'>
          <h1 className='my-4 text-3xl font-bold'>Blogs</h1>
        </Link>
        <Link href='/blogs/add'>
          <Button variant='outline' className='border-purple-800'>
            Add New Blog
          </Button>
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
        {blogList && blogList.map((blog) => <Blog key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
}
