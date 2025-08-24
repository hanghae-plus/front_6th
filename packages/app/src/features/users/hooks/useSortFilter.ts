import React from "react";
import { useSearchParams } from "react-router";

// 정렬 타입 상수
export const SORT_TYPE = {
  NAME: "name",
  SCORE: "score",
} as const;

// 정렬 방향 상수
export const SORT_DIRECTION = {
  ASC: "asc",
  DESC: "desc",
} as const;

export const useSortFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortType = searchParams.get("sortType") ?? SORT_TYPE.NAME;
  const sortDirection = searchParams.get("sortDirection") ?? SORT_DIRECTION.ASC;

  const filterValues = React.useMemo(() => {
    return {
      sortType,
      sortDirection,
    };
  }, [sortType, sortDirection]);

  const setFilterValues = React.useCallback(
    (values: { sortType: string; sortDirection: string }) => {
      setSearchParams({ sortType: values.sortType, sortDirection: values.sortDirection });
    },
    [setSearchParams],
  );

  return {
    setFilterValues,
    filterValues,
  };
};
