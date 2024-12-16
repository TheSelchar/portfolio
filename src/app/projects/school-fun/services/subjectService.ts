import subjectsData from '../data/subjects.json';
import coursesData from '../data/courses.json';
import featuredCoursesData from '../data/featuredCourses.json';

// Basic course interface for subject listings
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  reward: string;
}

// Full course details interface
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
  learningStyle: LearningStyle;
}

export type LearningStyle = 'self-paced' | 'instructor-led' | 'hybrid';

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  courses: string[]; // Array of course IDs
}

// Subject-related functions
export async function getSubjects(): Promise<Subject[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return subjectsData.subjects;
}

export async function getSubjectById(id: string): Promise<{
  id: string;
  title: string;
  description: string;
  courses: Course[];
} | null> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const subject = subjectsData.subjects.find(s => s.id === id);
  if (!subject) return null;

  const fullCourses = subject.courses.map(courseId => {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) return null;
    
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      duration: course.length,
      reward: 'Certificate'
    };
  }).filter((course): course is Course => course !== null);

  return {
    id: subject.id,
    title: subject.title,
    description: subject.description,
    courses: fullCourses
  };
}

// Course-related functions
export async function getAllCourses(): Promise<CourseDetails[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return coursesData.courses.map(course => ({
    ...course,
    learningStyle: course.learningStyle as LearningStyle
  }));
}

export async function getCourseById(id: string): Promise<CourseDetails | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const course = coursesData.courses.find(course => course.id === id);
  if (!course) return null;
  
  return {
    ...course,
    learningStyle: course.learningStyle as LearningStyle
  };
}

interface FilterOptions {
  subject?: string;
  duration?: string;
  startDate?: string;
  priceSort?: 'asc' | 'desc' | undefined;
}

export async function getFilteredCourses(filters: FilterOptions): Promise<CourseDetails[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let courses = coursesData.courses.map(course => ({
    ...course,
    learningStyle: course.learningStyle as LearningStyle
  }));

  if (filters.subject) {
    const subjectData = subjectsData.subjects.find(s => s.id === filters.subject);
    if (subjectData) {
      courses = courses.filter(course => subjectData.courses.includes(course.id));
    }
  }

  if (filters.duration && filters.duration.length > 0) {
    courses = courses.filter(course => course.length.startsWith(filters.duration!));
  }

  if (filters.startDate && filters.startDate.length > 0) {
    courses = courses.filter(course => 
      course.enrollBy.toLowerCase().includes(filters.startDate!.toLowerCase())
    );
  }

  if (filters.priceSort) {
    courses.sort((a, b) => {
      const priceA = parseInt(a.cost.replace('$', ''));
      const priceB = parseInt(b.cost.replace('$', ''));
      return filters.priceSort === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }

  return courses;
}

// Featured courses functions
export async function getFeaturedCourses(): Promise<CourseDetails[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const featuredIds = featuredCoursesData.featuredCourses;
  return coursesData.courses
    .filter(course => featuredIds.includes(course.id))
    .map(course => ({
      ...course,
      learningStyle: course.learningStyle as LearningStyle
    }));
} 