export const formatDateRange = (
  startDate?: string,
  endDate?: string
): string => {
  if (!startDate) return "";

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  if (end) {
    return `${formatDate(start)} - ${formatDate(end)}`;
  } else {
    return `${formatDate(start)} - Present`;
  }
};

export const formatYear = (dateStr?: string): string => {
  if (!dateStr) return "";
  return new Date(dateStr).getFullYear().toString();
};

// export const formatBirthDate = (birth?: BirthInfo): string => {
//   if (!birth) return "";

//   const { year, month, day, place } = birth;
//   let dateStr = "";

//   if (day && month && year) {
//     const date = new Date(year, month - 1, day);
//     dateStr = date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   } else if (month && year) {
//     const date = new Date(year, month - 1);
//     dateStr = date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//     });
//   } else if (year) {
//     dateStr = year.toString();
//   }

//   return place ? `${dateStr} in ${place}` : dateStr;
// };

export const getSocialIcon = (network?: string): string => {
  if (!network) return "fas fa-link";

  const networkMap: Record<string, string> = {
    twitter: "fab fa-twitter",
    linkedin: "fab fa-linkedin",
    github: "fab fa-github",
    facebook: "fab fa-facebook",
    instagram: "fab fa-instagram",
    youtube: "fab fa-youtube",
    stackoverflow: "fab fa-stack-overflow",
    reddit: "fab fa-reddit",
    medium: "fab fa-medium",
    dev: "fab fa-dev",
    behance: "fab fa-behance",
    dribbble: "fab fa-dribbble",
    codepen: "fab fa-codepen",
    gitlab: "fab fa-gitlab",
  };

  return networkMap[network.toLowerCase()] || "fas fa-link";
};

export const getSocialColor = (network?: string): string => {
  if (!network) return "text-gray-600";

  const colorMap: Record<string, string> = {
    twitter: "text-blue-400",
    linkedin: "text-blue-700",
    github: "text-gray-800",
    facebook: "text-blue-600",
    instagram: "text-pink-500",
    youtube: "text-red-600",
    stackoverflow: "text-orange-500",
    reddit: "text-orange-600",
    medium: "text-gray-700",
    dev: "text-gray-800",
  };

  return colorMap[network.toLowerCase()] || "text-gray-600";
};

export const splitParagraphs = (text?: string): string[] => {
  if (!text) return [];
  return text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
};
