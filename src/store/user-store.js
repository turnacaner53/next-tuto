import { addNewUserFormInitialState } from '@/utils/user-form-controls';
import { create } from 'zustand';

const useUserStore = create((set) => ({
  editId: null,
  setEditId: (id) => set({ editId: id }),
  openPopup: false,
  setOpenPopup: (value) => set({ openPopup: value }),
  addNewUserFormData: addNewUserFormInitialState,
  setAddNewUserFormData: (data) => set({ addNewUserFormData: data }),
}));

export default useUserStore;
