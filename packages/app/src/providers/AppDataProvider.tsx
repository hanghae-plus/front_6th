import { createContext, type PropsWithChildren, useContext, useMemo } from "react";
import type { AppData, AssignmentDetail, CommonAssignment } from "@hanghae-plus/domain";
import appData from "../../../../docs/data/app-data.json";

interface ContextValue {
  data: AppData;
}

export type Assignment = AssignmentDetail & Omit<CommonAssignment, "id">;

const AppDataContext = createContext<ContextValue>({ data: appData as AppData });

export const useAppDataContext = () => useContext(AppDataContext);

export function AppDataProvider({ children }: PropsWithChildren) {
  const contextValue = useMemo(() => ({ data: appData as AppData }), []);
  return <AppDataContext value={contextValue}>{children}</AppDataContext>;
}
