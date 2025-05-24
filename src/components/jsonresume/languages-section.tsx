import React from "react";

interface Language {
  language?: string;
  fluency?: string;
}

interface LanguagesProps {
  languages: Language[];
}

const LanguagesSection: React.FC<LanguagesProps> = ({ languages }) => {
  if (!languages || languages.length === 0) return null;
  return (
    <section className="mb-8">
      <header>
        <h2 className="uppercase text-orange-500 font-semibold text-base mb-2">
          Languages
        </h2>
      </header>
      <ul className="flex flex-wrap gap-4">
        {languages.map((lang, idx) => (
          <li
            key={idx}
            className="bg-blue-50 px-3 py-1 rounded text-blue-900 font-medium flex items-center gap-2"
          >
            <span>{lang.language}</span>
            {lang.fluency && (
              <span className="text-xs text-gray-500">({lang.fluency})</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LanguagesSection;
