export interface Project {
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  previewlink?: string;
  githublink?: string;
  technologies?: string[];
  category?: string;
  status?: string;
  startdate?: string;
  enddate?: string;
  role?: string;
  priority?: number;
}
