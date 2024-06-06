import connectDb from '@/db';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export async function GET(id) {
  try {
    await connectDb();
    const blog = await Blog.find({ id });
    if (blog) {
      return NextResponse.json({
        success: true,
        data: blog,
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
