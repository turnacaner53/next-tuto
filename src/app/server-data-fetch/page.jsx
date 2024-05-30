import { getUsers } from '@/api/dummy-json';
import Link from 'next/link';

async function fetchListOfUsers() {
  try {
    const users = await getUsers();
    return users;
  } catch (err) {
    throw new Error(err);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();

  return (
    <div>
      <h2 className='mb-6 cursor-pointer text-2xl'>User Lists</h2>
      <ul>
        {listOfUsers.map((user) => (
          <li className='m-2 hover:text-primary hover:underline' key={user.id}>
            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
