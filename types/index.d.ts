export type Experience = {
  _id: string;
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate?: string;
  description: string[];
};

export type Project = {
  _id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  codeLink: string;
  liveLink: string;
};

export type NoteworthyProject = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  codeLink: string;
  liveLink: string;
};

export interface ProfileData {
  role: string;
  src: string;
  aboutInfo: string[];
  technologies: string[];
  experiences: Experience[];
  projects: Project[];
  noteworthy: NoteworthyProject[];
}
