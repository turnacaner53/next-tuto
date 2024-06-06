import { create } from 'zustand';

const useBlogStore = create((set) => ({
  editBlogId: '',
  setEditBlogId: (blog) => set({ blog }),
}));

export default useBlogStore;
