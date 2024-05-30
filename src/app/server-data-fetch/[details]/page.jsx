import { getUserById } from '@/api/dummy-json';

async function fetchUserDetails(id) {
  try {
    const user = await getUserById(id);

    return user;
  } catch (err) {
    throw new Error(err);
  }
}

export default async function UserDetails({ params }) {
  const userDetais = await fetchUserDetails(params.details);

  return (
    <div>
      <h2 className='mb-6 text-2xl'>User Details</h2>
      <p>{userDetais?.firstName}</p>
      <p>{userDetais?.lastName}</p>
      <p>{userDetais?.age}</p>
      <p>{userDetais?.email}</p>
      <p>{userDetais?.phone}</p>
      <p>{userDetais?.birhtDate}</p>
    </div>
  );
}
