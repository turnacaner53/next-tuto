'use client';

import { addUserAction, editUserAction } from '@/actions/user';
import useUserStore from '@/store/user-store';
import { addNewUserFormControls, addNewUserFormInitialState } from '@/utils/user-form-controls';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddNewUser() {
  const { openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData, editId, setEditId } =
    useUserStore(
      useShallow((state) => ({
        openPopup: state.openPopup,
        setOpenPopup: state.setOpenPopup,
        editId: state.editId,
        setEditId: state.setEditId,
        addNewUserFormData: state.addNewUserFormData,
        setAddNewUserFormData: state.setAddNewUserFormData,
      })),
    );

  const handleSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every((key) => addNewUserFormData[key] !== '');
  };

  const handleAddNewUserAction = async () => {
    const result = editId!==null ? await editUserAction(editId,addNewUserFormData,'/user-management'): await addUserAction(addNewUserFormData, '/user-management');
    console.log(result);
    setOpenPopup(false);
    setAddNewUserFormData(addNewUserFormInitialState);
    setEditId(null);
  };

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(addNewUserFormInitialState);
          setEditId(null);
        }}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{editId !== null ? 'Edit User' : 'Add New User'}</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className='grid gap-4 py-4'>
            {addNewUserFormControls.map((controlItem) => (
              <div className='mb-5 space-y-2' key={controlItem?.name}>
                <Label htmlFor={controlItem?.name} className='text-right'>
                  {controlItem?.label}
                </Label>
                <Input
                  id={controlItem?.name}
                  name={controlItem?.name}
                  placeholder={controlItem?.placeholder}
                  className='col-span-3'
                  type={controlItem?.type}
                  value={addNewUserFormData[controlItem?.name]}
                  onChange={(event) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem?.name]: event.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button className='min-w-24' disabled={!handleSaveButtonValid()} type='submit'>
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
