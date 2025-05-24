import React from "react";

interface Interest {
  name?: string;
  keywords?: string[];
}

interface InterestsProps {
  interests: Interest[];
}

const InterestsSection: React.FC<InterestsProps> = ({ interests }) => {
  if (!interests || interests.length === 0) return null;
  return (
    <section className="mb-8">
      <header>
        <h2 className="uppercase text-orange-500 font-semibold text-base mb-2">
          Interests
        </h2>
      </header>
      <div className="flex flex-wrap gap-4">
        {interests.map((interest, idx) => (
          <div
            key={idx}
            className="bg-blue-50 px-4 py-2 rounded shadow text-blue-900 font-medium"
          >
            <div>{interest.name}</div>
            {interest.keywords && interest.keywords.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-1">
                {interest.keywords.map((kw, i) => (
                  <li
                    key={i}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
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

export default InterestsSection;
