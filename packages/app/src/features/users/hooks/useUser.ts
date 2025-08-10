import { useUsers } from "@/features";

export const useUser = (id: string) => {
  const users = useUsers();
  return users[id];
};
