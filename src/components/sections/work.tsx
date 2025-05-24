import React from "react";
import type { TWork } from "../../utils/resume.schema";
import { DateRange } from "../shared/date-range";
import { Highlights } from "../shared/highlights";
// import { Keywords } from "../shared/keywords";
import { splitParagraphs } from "../../utils/helpers";

interface WorkProps {
  work?: TWork[];
}

export const Work: React.FC<WorkProps> = ({ work }) => {
  if (!work || work.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
        <i className="fas fa-briefcase mr-2"></i>
        Work Experience
      </h2>
      <div className="space-y-6">
        {work.map((job, index) => (
          <div key={index} className="border-l-4 border-blue-200 pl-4">
            <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.position}
                </h3>
                <h4 className="text-md text-gray-700">
                  {job.url ? (
                    <a
                      href={job.url}
                      className="hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.name}
                    </a>
                  ) : (
                    job.name
                  )}
                </h4>
                {job.location && (
                  <p className="text-sm text-gray-600">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {job.location}
                  </p>
                )}
              </div>
              <DateRange
                startDate={job.startDate}
                endDate={job.endDate}
                className="tablet:text-right"
              />
            </div>

            {job.summary && (
              <div className="mb-3 text-gray-700">
                {splitParagraphs(job.summary).map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <Highlights highlights={job.highlights} />
            {/* <Keywords keywords={job.keywords} /> */}
          </div>
        ))}
      </div>
    </section>
  );
};
