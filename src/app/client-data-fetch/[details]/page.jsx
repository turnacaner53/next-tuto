'use client';

import Loading from '@/app/loading';

import { useDummyJsonUserById } from '../queries';

export default function UserDetails({ params }) {
  const { data: user, isLoading, isError } = useDummyJsonUserById(Number(params.details));

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <h2 className='mb-6 text-2xl'>User Details</h2>
      <p>{user?.firstName}</p>
      <p>{user?.lastName}</p>
      <p>{user?.age}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
      <p>{user?.birhtDate}</p>
    </div>
  );
}
