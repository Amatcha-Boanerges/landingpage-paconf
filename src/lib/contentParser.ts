import { promises as fs } from 'fs';
import path from 'path';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  year: number;
}

interface TestimonialsData {
  testimonials: Testimonial[];
}

// This function should only be called from server components or API routes
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const filePath = path.join(process.cwd(), 'src/content/conference/testimonials.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data: TestimonialsData = JSON.parse(fileContents);
    return data.testimonials;
  } catch (error) {
    console.error('Error reading testimonials:', error);
    return [];
  }
}

// Generic function for future content types
export async function getContent<T>(contentPath: string): Promise<T | null> {
  try {
    const filePath = path.join(process.cwd(), contentPath);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error reading content from ${contentPath}:`, error);
    return null;
  }
} 