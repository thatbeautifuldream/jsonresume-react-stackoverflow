import React from "react";
import Basics from "./basics";
import Skills from "./skills";
import WorkSection from "./work-section";
import EducationSection from "./education-section";
import LanguagesSection from "./languages-section";
import InterestsSection from "./interests-section";
import AwardsSection from "./awards-section";
import VolunteerSection from "./volunteer-section";
import PublicationsSection from "./publications-section";
import ReferencesSection from "./references-section";
import { resumeData } from "../../lib/resume.data";

const JsonResume: React.FC = () => {
  const {
    basics,
    skills,
    work,
    education,
    languages,
    interests,
    awards,
    volunteer,
    publications,
    references,
  } = resumeData;
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white">
      {basics && <Basics basics={basics} />}
      {skills && skills.length > 0 && <Skills skills={skills} />}
      {work && work.length > 0 && <WorkSection work={work} />}
      {education && education.length > 0 && (
        <EducationSection education={education} />
      )}
      {languages && languages.length > 0 && (
        <LanguagesSection languages={languages} />
      )}
      {interests && interests.length > 0 && (
        <InterestsSection interests={interests} />
      )}
      {awards && awards.length > 0 && <AwardsSection awards={awards} />}
      {volunteer && volunteer.length > 0 && (
        <VolunteerSection volunteer={volunteer} />
      )}
      {publications && publications.length > 0 && (
        <PublicationsSection publications={publications} />
      )}
      {references && references.length > 0 && (
        <ReferencesSection references={references} />
      )}
    </main>
  );
};

export default JsonResume;
