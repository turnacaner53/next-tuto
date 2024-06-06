import { fetchAllUsersAction } from '@/actions/user';

import AddNewUser from './_components/AddNewUser';
import SingleUser from './_components/SingleUser';

export default async function UserManagement() {
  const users = await fetchAllUsersAction();

  return (
    <div className='max-w-6xl p-10'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>User Management</h1>
        <AddNewUser />
      </div>
      <div className='mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {users && users.data && users.data.length > 0 ? (
          users.data.map((user) => <SingleUser key={user.id} user={user} />)
        ) : (
          <h2 className='text-2xl'>No users found</h2>
        )}
      </div>
    </div>
  );
}
