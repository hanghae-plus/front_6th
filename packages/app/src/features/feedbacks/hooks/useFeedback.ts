import { useAppDataContext } from "@/providers";

export const useFeedback = (url: string) => {
  const { data: appData } = useAppDataContext();
  const feedbacks = appData.feedbacks;
  return feedbacks[url];
};
