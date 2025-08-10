export type ProfileData = {
  role: string;
  src: string;
  aboutInfo: string[];
  technologies: string[];
  experiences: {
    _id: string;
    title: string;
    company: string;
    url: string;
    startDate: string;
    endDate?: string;
    description: string[];
  }[];
  projects: {
    _id: string;
    title: string;
    image: string;
    tags: string[];
    description: string;
    codeLink: string;
    liveLink: string;
  }[];
  noteworthy: {
    _id: string;
    title: string;
    description: string;
    tags: string[];
    codeLink: string;
    liveLink: string;
  }[];
};
