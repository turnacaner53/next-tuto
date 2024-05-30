import { useQuery } from '@tanstack/react-query';

import { getUserById, getUsers } from '../../api/dummy-json';

export const useDummyJsonUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
};

export const useDummyJsonUserById = (id) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
  });
};
