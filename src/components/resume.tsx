import React from "react";
import { Basics } from "./sections/basics";
import { Skills } from "./sections/skills";
import { Work } from "./sections/work";
import { Education } from "./sections/education";
import type { TResumeSchema } from "../utils/resume.schema";
import { cn } from "./lib/utils";

interface ResumeProps {
  resume: TResumeSchema;
  className?: string;
}

export const Resume: React.FC<ResumeProps> = ({ resume, className = "" }) => {
  return (
    <div id="resume" className={cn("max-w-4xl mx-auto p-8", className)}>
      <Basics basics={resume.basics} />
      <Skills skills={resume.skills} />
      <Work work={resume.work} />
      <Education education={resume.education} />
    </div>
  );
};
