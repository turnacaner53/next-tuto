'use client';

import { deleteBlog } from '@/actions/blog';
import useBlogStore from '@/store/blog';
import { Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Blog({ blog }) {
  const setEditBlogId = useBlogStore((state) => state.setEditBlogId);
  
  const handleDelete = async (id) => {
    await deleteBlog(id, '/blogs');
    return null;
  };

  const handleEdit = (id) => {
    setEditBlogId(id);
    console.log('edit', id);
  };
  

  return (
    <div
      className='flex flex-col justify-between rounded-lg bg-primary/80 p-4 shadow-md dark:bg-primary/40'
      key={blog._id}>
      <div className='grow'>
        <h2 className='mb-4 p-2 text-2xl font-bold capitalize'>{blog.title}</h2>
        <p className='text-justify text-white'>
          {blog.content?.length > 400 ? blog.content?.substring(0, 200) + '...' : blog.content}
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <Link href={`/blogs/${blog._id}`}>
          <Button variant='link' className='mt-4 text-white hover:text-gray-200'>
            Read More
          </Button>
        </Link>
        <div className='flex gap-2'>
          <Button
            onClick={() => handleEdit(blog._id)}
            variant='outline'
            className='hover:bg-purple-500'
            size='icon'>
            <Edit size={24} />
          </Button>
          <Button
            onClick={() => handleDelete(blog._id)}
            variant='destructive'
            className='hover:bg-purple-500'
            size='icon'>
            <Trash2 size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
