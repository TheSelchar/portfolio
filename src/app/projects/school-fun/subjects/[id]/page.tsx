import { FC } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSubjectById, getCourseById } from '../../services/subjectService';

interface Props {
  params: {
    id: string;
  };
}

const SubjectPage = async ({ params }: Props) => {
  // Get subject data
  const subject = await getSubjectById(params.id);

  if (!subject) {
    notFound();
  }

  // Get all courses for this subject
  const coursesPromises = subject.courses.map(courseId => getCourseById(courseId));
  const courses = await Promise.all(coursesPromises);
  const validCourses = courses.filter((course): course is NonNullable<typeof course> => course !== null);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="text-sm breadcrumbs mb-8">
          <ul>
            <li><Link href="/projects/school-fun">Subjects</Link></li>
            <li>{subject.title}</li>
          </ul>
        </div>

        {/* Subject Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">{subject.title}</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            {subject.description}
          </p>
        </div>

        {/* Available Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-base-content mb-8">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {validCourses.map((course) => (
              <Link 
                key={course.id}
                href={`/projects/school-fun/courses/${course.id}`}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-[320px] flex flex-col"
              >
                <div className="card-body flex flex-col justify-between h-full p-6">
                  <div>
                    <h3 className="card-title text-primary text-xl line-clamp-2 min-h-[56px]">
                      {course.title}
                    </h3>
                    <p className="text-base-content/70 line-clamp-3 text-sm min-h-[60px]">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="divider my-2"></div>
                    <div className="flex flex-wrap justify-between items-center gap-2 text-sm text-base-content/70">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="whitespace-nowrap">{course.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{course.cost}</span>
                      </div>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">View Course</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage; 