import { ReactNode } from "react";

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  tags?: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  category: "professional" | "opensource" | "personal";
}

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
} 