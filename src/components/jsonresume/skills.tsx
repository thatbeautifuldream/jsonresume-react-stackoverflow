import React from "react";
import { toLowerCase } from "./utils/helpers";

interface Skill {
  name?: string;
  level?: string;
  levelDisplay?: string;
  keywords?: string[];
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  return (
    <section className="mb-8">
      <header className="flex items-center mb-2">
        <h2 className="uppercase text-orange-600 font-bold text-sm tracking-wide whitespace-nowrap">
          Skills
        </h2>
        <div
          className="flex-1 border-t-1 border-gray-300 ml-2"
          style={{ minWidth: 0 }}
        />
      </header>
      <div className="w-full flex flex-wrap gap-x-8 gap-y-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="min-w-[220px] max-w-xs flex-1 mb-2">
            {skill.name && (
              <h3 className="font-bold text-lg text-black mb-0 leading-tight">
                {skill.name}
              </h3>
            )}
            {skill.level && (
              <div className="flex flex-col items-start gap-2 mb-1 mt-0.5">
                <em className="capitalize text-gray-500 text-sm italic">
                  {skill.levelDisplay || skill.level}
                </em>
                <div className="flex-1 h-1 bg-gray-200 min-w-[60px] max-w-[120px]">
                  <div
                    className={
                      `h-1 bg-orange-500 ` +
                      (toLowerCase(skill.level) === "beginner"
                        ? "w-1/4"
                        : toLowerCase(skill.level) === "intermediate"
                        ? "w-1/2"
                        : toLowerCase(skill.level) === "advanced" ||
                          toLowerCase(skill.level) === "fluent"
                        ? "w-3/4"
                        : toLowerCase(skill.level) === "master" ||
                          toLowerCase(skill.level) === "native speaker"
                        ? "w-full"
                        : "w-1/4")
                    }
                  />
                </div>
              </div>
            )}
            {skill.keywords && skill.keywords.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-2">
                {skill.keywords.map((kw, i) => (
                  <li
                    key={i}
                    className="bg-orange-100 text-orange-800 px-2 py-0.5 text-xs font-medium"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
