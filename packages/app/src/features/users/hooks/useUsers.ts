import { useAppDataContext } from "@/providers";

export const useUsers = () => {
  const { data } = useAppDataContext();
  return data.users;
};
