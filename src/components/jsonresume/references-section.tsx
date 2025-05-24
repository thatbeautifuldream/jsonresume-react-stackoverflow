import React from "react";

interface Reference {
  name?: string;
  reference?: string;
}

interface ReferencesProps {
  references: Reference[];
}

const ReferencesSection: React.FC<ReferencesProps> = ({ references }) => {
  if (!references || references.length === 0) return null;
  return (
    <section className="mb-8">
      <header className="flex items-center mb-2">
        <h2 className="uppercase text-orange-600 font-bold text-sm tracking-wide whitespace-nowrap">
          References{references.length ? ` (${references.length})` : ""}
        </h2>
        <div
          className="flex-1 border-t-1 border-gray-300 ml-2"
          style={{ minWidth: 0 }}
        />
      </header>
      <ul className="flex flex-col gap-4">
        {references.map((ref, idx) => (
          <li
            key={idx}
            className="text-black font-bold border-l-4 border-orange-400 pl-4"
          >
            {ref.reference && (
              <div className="text-gray-700 text-sm mt-1 font-normal">
                {ref.reference}
              </div>
            )}
            <div className="text-blue-900 font-bold">{ref.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReferencesSection;
