import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseById } from '../../services/subjectService';

interface Props {
  params: {
    id: string;
  };
}

const CoursePage = async ({ params }: Props) => {
  const course = await getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="text-sm breadcrumbs mb-8">
          <ul>
            <li><Link href="/projects/school-fun">Courses</Link></li>
            <li>{course.title}</li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Course Info */}
          <div className="space-y-6">
            <div className="prose max-w-none">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-base-content/70">{course.longDescription}</p>
            </div>

            {/* Course Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-title">Duration</div>
                <div className="stat-value text-primary text-2xl">{course.length}</div>
                <div className="stat-desc">{course.hoursPerWeek} hours per week</div>
              </div>
              
              <div className="stat">
                <div className="stat-title">Learning Style</div>
                <div className="stat-value text-2xl capitalize">{course.learningStyle}</div>
                <div className="stat-desc">Flexible schedule</div>
              </div>

              <div className="stat">
                <div className="stat-title">Certificate</div>
                <div className="stat-value text-2xl">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/images/school/Certificate.svg" alt="Certificate" width={30} height={30} />
                    <span>Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Course Modules</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="collapse collapse-arrow bg-base-200">
                      <input type="radio" name="course-modules" /> 
                      <div className="collapse-title font-medium">
                        Module {index + 1}: {module.title}
                      </div>
                      <div className="collapse-content">
                        <ul className="list-disc list-inside space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-4">{course.cost}</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Self-paced learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible schedule</span>
                  </div>
                </div>
                <div className="card-actions mt-6">
                  <button className="btn btn-primary btn-block btn-lg">Enroll Now</button>
                </div>
                <p className="text-center text-sm text-base-content/70 mt-4">
                  No application needed.<br />
                  Start learning today!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Earn Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center mb-16">WHAT YOU EARN</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certificate of Completion Card */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-8 pb-0">
                <Image
                  src="/images/school/cert-completion.png"
                  alt="Certificate of Completion"
                  width={400}
                  height={300}
                  className="rounded-xl max-w-[400px] w-full"
                  priority
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Certificate of Completion</h3>
                <p className="text-base-content/70 text-lg">
                  Boost your resume with a Certificate of Completion from HBS Online
                </p>
                <div className="text-base text-base-content/60 mt-2">
                  Earn by: completing this course
                </div>
              </div>
            </div>

            {/* Certificate of Specialization Card */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-8 pb-0">
                <Image
                  src="/images/school/72cert-spec.png"
                  alt="Certificate of Specialization"
                  width={400}
                  height={300}
                  className="rounded-xl max-w-[400px] w-full"
                  priority
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Certificate of Specialization</h3>
                <p className="text-base-content/70 text-lg">
                  Prove your mastery of finance and accounting
                </p>
                <div className="text-base text-base-content/60 mt-2">
                  Earn by: completing any three courses within this subject area to earn a Certificate of Specialization
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage; 