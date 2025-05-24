import React from "react";
import { paragraphSplit, spaceToDash } from "./utils/helpers";

interface Profile {
  network?: string;
  username?: string;
  url?: string;
}

interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  countryCode?: string;
}

interface Birth {
  place?: string;
  state?: string;
  date?: string;
}

interface BasicsProps {
  basics: {
    name?: string;
    label?: string;
    image?: string;
    email?: string;
    phone?: string;
    website?: string;
    summary?: string;
    location?: Location;
    birth?: Birth;
    profiles?: Profile[];
  };
}

const BirthDate: React.FC<{ birth?: Birth }> = ({ birth }) => {
  if (!birth || Object.keys(birth).length === 0) return null;
  const out: string[] = [];
  if (birth.place) out.push(`Born in ${birth.place}`);
  if (birth.place && birth.state) out.push(`, ${birth.state}`);
  const year = birth.date ? new Date(birth.date).getFullYear() : "";
  if (year && birth.place && birth.state) out.push(` in ${year}`);
  else if (year && (!birth.place || birth.state)) out.push(`Born in ${year}`);
  return <div className="text-sm text-gray-500 mt-1">{out.join("")}</div>;
};

const Basics: React.FC<BasicsProps> = ({ basics }) => {
  const {
    name,
    label,
    image,
    email,
    phone,
    website,
    summary,
    location,
    birth,
    profiles,
  } = basics;
  return (
    <header className="mb-8 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {image && (
          <img
            className="w-28 h-28 rounded-md object-cover"
            src={image}
            alt={name}
          />
        )}
        <div>
          <h1 className="text-3xl font-light leading-tight">{name}</h1>
          <h2 className="text-xl text-gray-700 font-normal">{label}</h2>
          {location && (
            <div className="text-gray-600 flex flex-wrap gap-1 text-sm">
              {location.address && <span>{location.address},</span>}
              {location.postalCode && <span>{location.postalCode},</span>}
              {location.city && <span>{location.city},</span>}
              {location.region && <span>{location.region}</span>}
              {location.countryCode && <span>({location.countryCode})</span>}
            </div>
          )}
        </div>
      </div>

      <BirthDate birth={birth} />
      <div className="flex flex-wrap items-center gap-x-2 gap-y-0 mt-1 text-xs leading-none">
        {email && (
          <div className="flex items-center text-blue-600 font-medium gap-1">
            <span className="fa-regular fa-envelope text-gray-500" />
            <a className="hover:underline" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}
        {phone && (
          <div className="flex items-center text-blue-600 font-medium gap-1">
            <span className="fa-solid fa-mobile-screen-button text-gray-500" />
            <a className="hover:underline" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        )}
      </div>
      {profiles && profiles.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-0 mt-1 text-xs leading-none">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 text-blue-600 font-medium"
            >
              {profile.network && (
                <span
                  className={`fa-brands fa-${spaceToDash(
                    profile.network
                  )} text-gray-500`}
                />
              )}
              {profile.url ? (
                <a
                  className="hover:underline"
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.username}
                </a>
              ) : (
                <span>{profile.username}</span>
              )}
            </div>
          ))}
        </div>
      )}
      {summary && (
        <section className="bg-gray-50 p-4 mt-4">
          <div
            dangerouslySetInnerHTML={{ __html: paragraphSplit(summary) || "" }}
          />
        </section>
      )}
    </header>
  );
};

export default Basics;
