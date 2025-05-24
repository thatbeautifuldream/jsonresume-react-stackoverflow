import React from "react";
import { formatDateMY, paragraphSplit } from "./utils/helpers";

interface Work {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  location?: string;
}

interface WorkProps {
  work: Work[];
}

const WorkSection: React.FC<WorkProps> = ({ work }) => {
  if (!work || work.length === 0) return null;
  return (
    <section className="mb-8">
      <header className="flex items-center mb-2">
        <h2 className="uppercase text-orange-600 font-bold text-sm tracking-wide whitespace-nowrap">
          Work Experience{work.length ? ` (${work.length})` : ""}
        </h2>
        <div
          className="flex-1 border-t-1 border-gray-300 ml-2"
          style={{ minWidth: 0 }}
        />
      </header>
      <div className="flex flex-col gap-6">
        {work.map((job, idx) => (
          <div key={idx}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <div className="flex flex-col">
                <span className="font-bold text-base text-black">
                  {job.position}
                </span>
                <span className="text-sm text-gray-700 font-normal flex items-center gap-1">
                  <span className="font-bold">at</span>
                  <span className="font-bold text-black">{job.name}</span>
                  {job.url && (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline ml-1"
                    >
                      {job.url.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </span>
                {job.location && (
                  <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z"
                      />
                    </svg>
                    {job.location}
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-700 font-semibold mt-1 md:mt-0 md:text-right whitespace-nowrap">
                {job.startDate && formatDateMY(job.startDate)} -{" "}
                {job.endDate ? formatDateMY(job.endDate) : "Current"}
              </div>
            </div>
            {job.summary && (
              <div
                className="text-gray-700 text-sm mt-2"
                dangerouslySetInnerHTML={{
                  __html: paragraphSplit(job.summary) || "",
                }}
              />
            )}
            {job.highlights && job.highlights.length > 0 && (
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm">
                {job.highlights.map((hl, i) => (
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

export default WorkSection;
