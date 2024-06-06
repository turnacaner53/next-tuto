import connectDb from '@/db';
import Blog from '@/models/blog';
import Joi from 'joi';
import { NextResponse } from 'next/server';

const addBlog = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectDb();
    const extractBlogData = await req.json();
    const { title, content } = extractBlogData;

    const { error } = addBlog.validate({ title, content });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const blog = await Blog.create(extractBlogData);
    if (blog) {
      return NextResponse.json({
        success: true,
        message: 'Blog added successfully!',
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Something went wrong!',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong!',
    });
  }
}
