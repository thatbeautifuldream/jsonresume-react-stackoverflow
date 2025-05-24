import React from "react";
import { formatDateRange } from "../../utils/helpers";

interface DateRangeProps {
  startDate?: string;
  endDate?: string;
  className?: string;
}

export const DateRange: React.FC<DateRangeProps> = ({
  startDate,
  endDate,
  className = "",
}) => {
  const dateStr = formatDateRange(startDate, endDate);

  if (!dateStr) return null;

  return (
    <span className={`text-gray-600 text-sm ${className}`}>{dateStr}</span>
  );
};
