import React from "react";
import { paragraphSplit } from "./utils/helpers";

interface Award {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

interface AwardsProps {
  awards: Award[];
}

const AwardsSection: React.FC<AwardsProps> = ({ awards }) => {
  if (!awards || awards.length === 0) return null;
  return (
    <section className="mb-8">
      <header>
        <h2 className="uppercase text-orange-500 font-semibold text-base mb-2">
          Awards
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-4 border-l-4 border-yellow-400"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-blue-900">
                  {award.title}
                </span>
                <span className="text-blue-700 font-medium">
                  {award.awarder}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1 md:mt-0 md:text-right">
                {award.date}
              </div>
            </div>
            {award.summary && (
              <div
                className="text-gray-700 text-sm mt-2"
                dangerouslySetInnerHTML={{
                  __html: paragraphSplit(award.summary) || "",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
