import React from "react";
import type { TSkill } from "../../utils/resume.schema";
import { Keywords } from "../shared/keywords";

interface SkillsProps {
  skills?: TSkill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
        <i className="fas fa-cogs mr-2"></i>
        Skills
      </h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
            {skill.level && (
              <p className="text-sm text-gray-600 mb-2">Level: {skill.level}</p>
            )}
            <Keywords keywords={skill.keywords} />
          </div>
        ))}
      </div>
    </section>
  );
};
