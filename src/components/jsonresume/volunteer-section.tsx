import React from "react";
import { paragraphSplit } from "./utils/helpers";

interface Volunteer {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

interface VolunteerProps {
  volunteer: Volunteer[];
}

const VolunteerSection: React.FC<VolunteerProps> = ({ volunteer }) => {
  if (!volunteer || volunteer.length === 0) return null;
  return (
    <section className="mb-8">
      <header>
        <h2 className="uppercase text-orange-500 font-semibold text-base mb-2">
          Volunteer
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        {volunteer.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-4 border-l-4 border-green-400"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-blue-900">
                  {item.position}
                </span>
                <span className="text-blue-700 font-medium">
                  {item.organization}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1 md:mt-0 md:text-right">
                {item.startDate} - {item.endDate ? item.endDate : "Present"}
              </div>
            </div>
            {item.summary && (
              <div
                className="text-gray-700 text-sm mt-2"
                dangerouslySetInnerHTML={{
                  __html: paragraphSplit(item.summary) || "",
                }}
              />
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm">
                {item.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerSection;
