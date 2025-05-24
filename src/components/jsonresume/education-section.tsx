import React from "react";
import { formatDateMY } from "./utils/helpers";

interface Education {
  institution?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  courses?: string[];
  location?: string;
}

interface EducationProps {
  education: Education[];
}

const EducationSection: React.FC<EducationProps> = ({ education }) => {
  if (!education || education.length === 0) return null;
  return (
    <section className="mb-8">
      <header className="flex items-center mb-2">
        <h2 className="uppercase text-orange-600 font-bold text-sm tracking-wide whitespace-nowrap">
          Education{education.length ? ` (${education.length})` : ""}
        </h2>
        <div
          className="flex-1 border-t-1 border-gray-300 ml-2"
          style={{ minWidth: 0 }}
        />
      </header>
      <div className="flex flex-col gap-6">
        {education.map((ed, idx) => (
          <div key={idx}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <div className="flex flex-col">
                <span className="font-bold text-base text-black">
                  {ed.studyType} {ed.area && <span>{ed.area}</span>}
                </span>
                <span className="text-sm text-gray-700 font-normal flex items-center gap-1">
                  <span className="font-bold">at</span>
                  <span className="font-bold text-black">{ed.institution}</span>
                </span>
              </div>
              <div className="text-xs text-gray-700 font-semibold mt-1 md:mt-0 md:text-right whitespace-nowrap">
                {ed.startDate && formatDateMY(ed.startDate)} -{" "}
                {ed.endDate ? formatDateMY(ed.endDate) : "Present"}
              </div>
            </div>
            {ed.gpa && (
              <div className="text-xs text-gray-500 mt-1">GPA: {ed.gpa}</div>
            )}
            {ed.courses && ed.courses.length > 0 && (
              <ul className="list-disc ml-6 mt-2 text-gray-700 text-sm">
                {ed.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
