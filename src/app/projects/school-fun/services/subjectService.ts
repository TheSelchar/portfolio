import subjectsData from '../data/subjects.json';
import featuredCoursesData from '../data/featuredCourses.json';
import coursesData from '../data/courses.json';

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  reward: string;
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  courses: Course[];
}

export interface FeaturedCourse {
  id: string;
  title: string;
  description: string;
  image: string;
  length: string;
  enrollBy: string;
  cost: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  length: string;
  enrollBy: string;
  cost: string;
  hoursPerWeek: string;
  modules: CourseModule[];
  learningStyle: 'self-paced' | 'instructor-led' | 'hybrid';
}

interface FeaturedCourseIds {
  featuredCourses: string[];
}

export const getSubjects = async (): Promise<Subject[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return subjectsData.subjects;
};

export const getSubjectById = async (id: string): Promise<Subject | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const subject = subjectsData.subjects.find(subject => subject.id === id);
  return subject || null;
};

export const getFeaturedCourses = async (): Promise<CourseDetails[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get featured course IDs
  const featuredIds = featuredCoursesData.featuredCourses;
  
  // Get full course details for each featured ID
  const featuredCourses = coursesData.courses.filter(course => 
    featuredIds.includes(course.id)
  );
  
  return featuredCourses;
};

export const getFeaturedCourseById = async (id: string): Promise<FeaturedCourse | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const featuredCourse = featuredCoursesData.featuredCourses.find(course => course.id === id);
  return featuredCourse || null;
};

export const getCourseById = async (id: string): Promise<CourseDetails | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const course = coursesData.courses.find(course => course.id === id);
  return course || null;
};

export const getAllCourses = async (): Promise<CourseDetails[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return coursesData.courses;
};

// Add filter function
export const getFilteredCourses = async (
  filters: {
    subject?: string;
    duration?: string;
    startDate?: string;
    priceSort?: 'asc' | 'desc';
  }
): Promise<CourseDetails[]> => {
  let courses = coursesData.courses;

  // Apply filters
  if (filters.subject) {
    const subjectData = subjectsData.subjects.find(s => s.id === filters.subject);
    if (subjectData) {
      courses = courses.filter(course => subjectData.courses.includes(course.id));
    }
  }

  if (filters.duration) {
    courses = courses.filter(course => course.length.startsWith(filters.duration));
  }

  if (filters.startDate) {
    courses = courses.filter(course => course.enrollBy.toLowerCase().includes(filters.startDate.toLowerCase()));
  }

  if (filters.priceSort) {
    courses.sort((a, b) => {
      const priceA = parseInt(a.cost.replace('$', ''));
      const priceB = parseInt(b.cost.replace('$', ''));
      return filters.priceSort === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }

  return courses;
}; 