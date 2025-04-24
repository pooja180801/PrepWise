import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

// Function to get logo URLs for a given array of technologies
export const getTechLogos = async (techArray: string[]) => {
  // First, map each tech name to a normalized logo URL
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech); // Normalize the tech name
    return {
      tech, // original tech name
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`, // logo URL
    };
  });

  // Check if each logo URL actually exists
  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech, // original tech name
      url: (await checkIconExists(url)) ? url : "/tech.svg", // fallback to default logo if not found
    }))
  );

  return results; // Return array of { tech, url }
};

// Helper function to normalize tech names for consistent logo mapping
const normalizeTechName = (tech: string) => {
  // Lowercase, remove ".js" and spaces
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  // Return mapped value based on predefined mappings object

  //Because key is computed dynamically (from .toLowerCase() etc.), TypeScript can't guarantee it's safe. This cast tells it:
  //“I know this key is valid — don't give me an error.”
  return mappings[key as keyof typeof mappings];
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
