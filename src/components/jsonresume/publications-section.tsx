import React from "react";
import { paragraphSplit } from "./utils/helpers";

interface Publication {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

interface PublicationsProps {
  publications: Publication[];
}

const PublicationsSection: React.FC<PublicationsProps> = ({ publications }) => {
  if (!publications || publications.length === 0) return null;
  return (
    <section className="mb-8">
      <header>
        <h2 className="uppercase text-orange-500 font-semibold text-base mb-2">
          Publications
        </h2>
      </header>
      <div className="flex flex-col gap-6">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-4 border-l-4 border-purple-400"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-blue-900">
                  {pub.name}
                </span>
                <span className="text-blue-700 font-medium">
                  {pub.publisher}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1 md:mt-0 md:text-right">
                {pub.releaseDate}
              </div>
            </div>
            {pub.url && (
              <div className="mt-1">
                <a
                  className="text-blue-600 hover:underline"
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.url}
                </a>
              </div>
            )}
            {pub.summary && (
              <div
                className="text-gray-700 text-sm mt-2"
                dangerouslySetInnerHTML={{
                  __html: paragraphSplit(pub.summary) || "",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
