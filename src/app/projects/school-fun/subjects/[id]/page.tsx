import { notFound } from 'next/navigation';
import { getSubjectById } from '../../services/subjectService';
import Link from 'next/link';

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SubjectPage({ params, searchParams }: Props) {
  // Wait for params to resolve
  const resolvedParams = await params;
  const subject = await getSubjectById(resolvedParams.id);

  if (!subject) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{subject.title}</h1>
        <p className="text-lg text-neutral-600 mb-8">{subject.description}</p>

        <h2 className="text-2xl font-semibold mb-6">Available Courses</h2>
        <div className="grid gap-6">
          {subject.courses.map((course, index) => (
            <div key={course.id || `course-${index}`} className="course-item">
              <Link 
                href={`/projects/school-fun/courses/${course.id}`}
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-neutral-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-500">Duration: {course.duration}</span>
                  <span className="text-primary font-medium">{course.reward}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 