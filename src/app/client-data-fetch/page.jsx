'use client';

import Link from 'next/link';

import Loading from '../loading';
import { useDummyJsonUsers } from './queries';

export default function ClientSideDataFetching() {
  const { data: users, isLoading, isError } = useDummyJsonUsers();

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {users &&
        users.map((user) => (
          <p className='hover:text-primary' key={user.id}>
            <Link href={`/client-data-fetch/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </p>
        ))}
    </div>
  );
}
