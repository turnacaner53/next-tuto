'use server';

import connectDb from '@/db';
import User from '@/models/user';
import { revalidatePath } from 'next/cache';

// add user
export async function addUserAction(formData, pathToRevalidate) {
  await connectDb();

  try {
    const newUser = await User.create(formData);
    if (newUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: 'User added successfully',
      };
    } else {
      return {
        success: false,
        message: 'User not added!',
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}

// edit user
export async function editUserAction(id, formData, pathToRevalidate) {
  await connectDb();

  const { firstName, lastName, email, address } = formData;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { firstName, lastName, email, address },
      { new: true },
    );
    if (updatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: 'User updated successfully',
      };
    } else {
      return {
        success: false,
        message: 'User not updated!',
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}

// fetch all users
export async function fetchAllUsersAction() {
  await connectDb();

  try {
    const users = await User.find({});
    return {
      success: true,
      data: JSON.parse(JSON.stringify(users)),
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}

// delete user
export async function deleteUserAction(id, pathToRevalidate) {
  await connectDb();

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: 'User deleted successfully',
      };
    } else {
      return {
        success: false,
        message: 'User not deleted!',
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
}
