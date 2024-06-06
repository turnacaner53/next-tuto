import connectDb from '@/db';
import Blog from '@/models/blog';
import Joi from 'joi';
import { NextResponse } from 'next/server';

const editBlog = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export async function PUT(req) {
  try {
    await connectDb();
    const { searchParams } = new URL(req.url);
    const getBlogId = searchParams.get('id');

    if (!getBlogId) {
      return NextResponse.json({
        success: false,
        message: 'Invalid blog id!',
      });
    }

    const { title, content } = await req.json();
    const { error } = editBlog.validate({ title, content });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const updateBlog = await Blog.findOneAndUpdate(
      { _id: getBlogId },
      { title, content },
      { new: true },
    );
    if (updateBlog) {
      return NextResponse.json({
        success: true,
        message: 'Blog updated successfully!',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'No blog found!',
      });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong!',
    });
  }
}
