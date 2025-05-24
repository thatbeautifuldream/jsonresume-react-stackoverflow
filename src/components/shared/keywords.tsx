import React from "react";

interface KeywordsProps {
  keywords?: string[];
  className?: string;
}

export const Keywords: React.FC<KeywordsProps> = ({
  keywords,
  className = "",
}) => {
  if (!keywords || keywords.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1 mt-2 ${className}`}>
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};
