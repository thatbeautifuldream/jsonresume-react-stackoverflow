import React from "react";
import type { TBasics } from "../../utils/resume.schema";
import { getSocialIcon, getSocialColor } from "../../utils/helpers";
// import { formatBirthDate } from "../../utils/helpers";
// import { splitParagraphs } from "../../utils/helpers";
// import { Keywords } from "../shared/keywords";

interface BasicsProps {
  basics?: TBasics;
}

export const Basics: React.FC<BasicsProps> = ({ basics }) => {
  if (!basics) return null;

  const {
    name,
    label,
    email,
    phone,
    url,
    // summary,
    location,
    profiles,
    image,
    // birth,
    // keywords,
  } = basics;

  return (
    <div className="mb-8">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
        {label && <h2 className="text-xl text-gray-600 mb-4">{label}</h2>}

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {email && (
            <span className="flex items-center gap-1">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${email}`} className="hover:text-blue-600">
                {email}
              </a>
            </span>
          )}
          {phone && (
            <span className="flex items-center gap-1">
              <i className="fas fa-phone"></i>
              {phone}
            </span>
          )}
          {url && (
            <span className="flex items-center gap-1">
              <i className="fas fa-globe"></i>
              <a
                href={url}
                className="hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {url}
              </a>
            </span>
          )}
          {location && (
            <span className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt"></i>
              {[location.city, location.region, location.countryCode]
                .filter(Boolean)
                .join(", ")}
            </span>
          )}
        </div>

        {profiles && profiles.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 hover:underline ${getSocialColor(
                  profile.network
                )}`}
              >
                <i className={getSocialIcon(profile.network)}></i>
                {profile.username || profile.network}
              </a>
            ))}
          </div>
        )}

        {/* {birth && (
          <div className="mt-2 text-sm text-gray-600">
            <i className="fas fa-birthday-cake mr-1"></i>
            Born {formatBirthDate(birth)}
          </div>
        )} */}
      </header>

      {image && (
        <div className="text-center mb-6">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
          />
        </div>
      )}

      {/* {summary && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-gray-200 pb-1">
            Summary
          </h3>
          <div className="text-gray-700 leading-relaxed">
            {splitParagraphs(summary).map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )} */}

      {/* <Keywords keywords={keywords} /> */}
    </div>
  );
};
