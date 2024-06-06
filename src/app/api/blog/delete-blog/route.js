import connectDb from '@/db';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
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

    const deleteBlog = await Blog.findByIdAndDelete(getBlogId);
    if (deleteBlog) {
      return NextResponse.json({
        success: true,
        message: 'Blog deleted successfully!',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'No blog found!',
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong!',
    });
  }
}
