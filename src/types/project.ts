export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
  imagePosition?: 'top' | 'center' | 'bottom';
  liveLink?: string;
  githubLink?: string;
  tags: string[];
  date?: string;
  tweetUrl?: string;
  status?: 'building' | 'live';
}
