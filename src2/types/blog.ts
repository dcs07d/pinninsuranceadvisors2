export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content?: {
    sections: {
      title: string;
      content: string;
      painPoints?: string[];
      solutions?: string[];
    }[];
  };
}