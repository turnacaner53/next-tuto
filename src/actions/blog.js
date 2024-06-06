'use server';

import { revalidatePath } from 'next/cache';

export async function fetchBlogs() {
  try {
    const res = await fetch('http://localhost:3000/api/blog/get-blogs', {
      method: 'GET',
      cache: 'no-store',
    });

    const result = await res.json();
    if (result?.error) {
      throw new Error(result.error);
    }

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchBlog(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/get-blog?id=${id}`, {
      method: 'GET',
      cache: 'no-store',
    });

    const result = await res.json();
    if (result?.error) {
      throw new Error(result.error);
    }

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addBlog(formData, pathToRevalidate) {
  try {
    const res = await fetch('http://localhost:3000/api/blog/add-blog', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res?.error) {
      throw new Error(result.error);
    }

    revalidatePath(pathToRevalidate);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function editBlog(id, formData, pathToRevalidate) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/edit-blog?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
    });

    if (res?.error) {
      throw new Error(result.error);
    }

    revalidatePath(pathToRevalidate);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteBlog(id, pathToRevalidate) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/delete-blog?id=${id}`, {
      method: 'DELETE',
    });

    if (res?.error) {
      throw new Error(result.error);
    }

    revalidatePath(pathToRevalidate);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}