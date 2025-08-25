import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components";
import { useSortFilter, SORT_TYPE, SORT_DIRECTION } from "../hooks";
import { useCallback } from "react";

interface SortFilterProps {
  className?: string;
}

export const SortFilter = ({ className }: SortFilterProps) => {
  const { filterValues, setFilterValues } = useSortFilter();

  const setSortType = useCallback(
    (type: string) => {
      setFilterValues({ ...filterValues, sortType: type });
    },
    [filterValues, setFilterValues],
  );

  const setSortDirection = useCallback(
    (direction: string) => {
      setFilterValues({ ...filterValues, sortDirection: direction });
    },
    [filterValues, setFilterValues],
  );

  return (
    <div className={`flex gap-2 ${className}`}>
      {/* 정렬 타입 선택 */}
      <Select value={filterValues.sortType} onValueChange={setSortType}>
        <SelectTrigger className="w-[120px] bg-slate-800/50 border-slate-700 text-white">
          <SelectValue placeholder="정렬 기준" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700">
          <SelectItem value={SORT_TYPE.NAME}>이름</SelectItem>
          <SelectItem value={SORT_TYPE.SCORE}>점수</SelectItem>
        </SelectContent>
      </Select>

      {/* 정렬 방향 선택 */}
      <Select value={filterValues.sortDirection} onValueChange={setSortDirection}>
        <SelectTrigger className="w-[120px] bg-slate-800/50 border-slate-700 text-white">
          <SelectValue placeholder="정렬 방향" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700">
          <SelectItem value={SORT_DIRECTION.ASC}>오름차순</SelectItem>
          <SelectItem value={SORT_DIRECTION.DESC}>내림차순</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
