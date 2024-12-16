import { notFound } from 'next/navigation';
import { getCourseById } from '../../services/subjectService';
import Image from 'next/image';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CoursePage({ params, searchParams }: Props) {
  // Wait for params to resolve
  const resolvedParams = await params;
  const course = await getCourseById(resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Course Image */}
          <div className="relative h-[400px]">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Course Content */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">{course.title}</h1>
            <p className="text-lg text-neutral-600 mb-6">{course.longDescription}</p>

            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">Duration:</span>
                  <span className="font-medium">{course.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">Hours per Week:</span>
                  <span className="font-medium">{course.hoursPerWeek}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">Next Session:</span>
                  <span className="font-medium">{course.enrollBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">Learning Style:</span>
                  <span className="font-medium capitalize">{course.learningStyle}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-neutral-50 p-6 rounded-lg">
                <span className="text-3xl font-bold text-primary mb-2">{course.cost}</span>
                <button className="btn btn-primary w-full">Enroll Now</button>
              </div>
            </div>

            {/* Course Modules */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Course Modules</h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={index} className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">{module.title}</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-neutral-600">{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 