import { useParams } from "react-router";

export const useUserIdByParam = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error("User ID is required");
  }

  return id.slice(1);
};
