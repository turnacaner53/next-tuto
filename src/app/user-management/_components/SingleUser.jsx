'use client';

import { deleteUserAction } from '@/actions/user';
import useUserStore from '@/store/user-store';
import { Edit2, Trash2 } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SingleUser({ user }) {
  const { setOpenPopup, setAddNewUserFormData, setEditId } = useUserStore(
    useShallow((state) => ({
      setOpenPopup: state.setOpenPopup,
      setAddNewUserFormData: state.setAddNewUserFormData,
      setEditId: state.setEditId,
    })),
  );
  const handleDelete = async (id) => {
    await deleteUserAction(id, '/user-management');
    return null;
  };

  const handleEdit = (user) => {
    setOpenPopup(true);
    setAddNewUserFormData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      address: user?.address,
    });
    setEditId(user?._id);
  };

  return (
    <Card className='bg-primary/60'>
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription className='text-foreground'>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>{user?.address}</CardContent>
      <CardFooter className='justify-end gap-4'>
        <Button onClick={() => handleEdit(user)} size='icon' variant='outline'>
          <Edit2 size={24} />
        </Button>
        <Button onClick={() => handleDelete(user?._id)} size='icon' variant='destructive'>
          <Trash2 size={24} />
        </Button>
      </CardFooter>
    </Card>
  );
}
