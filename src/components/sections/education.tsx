import React from "react";
import type { TEducation } from "../../utils/resume.schema";
import { DateRange } from "../shared/date-range";

interface EducationProps {
  education?: TEducation[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
        <i className="fas fa-graduation-cap mr-2"></i>
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-green-200 pl-4">
            <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {edu.studyType} in {edu.area}
                </h3>
                <h4 className="text-md text-gray-700">
                  {edu.url ? (
                    <a
                      href={edu.url}
                      className="hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </h4>
                {(edu.gpa || edu.score) && (
                  <p className="text-sm text-gray-600">
                    GPA: {edu.gpa || edu.score}
                  </p>
                )}
              </div>
              <DateRange
                startDate={edu.startDate}
                endDate={edu.endDate}
                className="tablet:text-right"
              />
            </div>

            {edu.courses && edu.courses.length > 0 && (
              <div className="mt-2">
                <h5 className="font-medium text-gray-700 mb-1">
                  Relevant Courses:
                </h5>
                <p className="text-sm text-gray-600">
                  {edu.courses.join(", ")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
