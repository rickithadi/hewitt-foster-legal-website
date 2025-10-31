export interface Attorney {
  id: string;
  name: string;
  title?: string;
  bio: string;
  profileUrl?: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  services: string[];
  icon: string;
  detailUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating?: number;
}

export interface ContactInfo {
  phone: string;
  alternatePhone?: string;
  email: string;
  address: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}