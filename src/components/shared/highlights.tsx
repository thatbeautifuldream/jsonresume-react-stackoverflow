import React from "react";

interface HighlightsProps {
  highlights?: string[];
  className?: string;
}

export const Highlights: React.FC<HighlightsProps> = ({
  highlights,
  className = "",
}) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <ul
      className={`list-disc list-inside space-y-1 text-sm text-gray-700 ${className}`}
    >
      {highlights.map((highlight, index) => (
        <li key={index}>{highlight}</li>
      ))}
    </ul>
  );
};
