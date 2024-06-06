'use client';

import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import { addBlog } from '@/actions/blog';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useBlogStore from '@/store/blog';

const formSchema = z.object({
  title: z.string().min(3).max(40),
  content: z.string(),
});

export default function AddBlog() {
  const router = useRouter();
  const editBlogId = useBlogStore((state) => state.editBlogId);
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data) => {
    const result = await addBlog(data, '/blogs');
    if (result?.error) {
      console.log(result.error);
      return;
    }
    router.push('/blogs');
  };

  return (
    <div className='container'>
      <div className='mx-auto flex items-center justify-between gap-2'>
        <h2 className='m-4 mb-8 text-3xl'>Add New Blog</h2>
        <Button variant='text' className='hover:text-primary'>
          <Link href='/blogs'>Back to Blogs</Link>
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='container flex flex-col gap-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Enter a title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    className='h-48 hover:resize-y'
                    placeholder='Enter content'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Submit</Button>
        </form>
      </Form>
    </div>
  );
}
