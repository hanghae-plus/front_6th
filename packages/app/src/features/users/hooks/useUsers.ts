import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchUsers } from "../service";
import { useAppDataContext } from "@/providers";

const queryKey = ["users"];

export const useUsers = () => {
  const initData = useAppDataContext();

  const users = useSuspenseQuery({
    queryKey,
    queryFn: fetchUsers,
    initialData: initData,
  });

  const items = useMemo(() => Object.values(users.data ?? {}), [users.data]);

  return { ...users, items };
};
