export interface Project {
  id: int;
  slug: string;
  title: {
    en: string;
    zh: string;
  };
  abstract: {
    en: string;
    zh: string;
  };
  coverImage: string[];
  year: string; // could be "" if not available
  type?: string[]; // e.g. ["Website", "Mobile App"]
  technologies?: string[]; // e.g. ["Vue.js", "Laravel", "MySQL"]
  roles?: string[]; // optional, if you want to show roles
}
