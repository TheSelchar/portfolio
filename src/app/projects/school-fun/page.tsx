import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getSubjects, getFeaturedCourses } from './services/subjectService';

export const revalidate = 3600;

const SchoolFunPage = async () => {
  const [subjects, featuredCourses] = await Promise.all([
    getSubjects(),
    getFeaturedCourses()
  ]);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto py-12">
        {/* Subject Categories Section */}
        <div className="mb-20 px-4">
          <h2 className="text-xl font-semibold text-neutral-800 mb-8 text-center">
            Choose a subject area:
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {subjects.map((subject) => (
                <Link 
                  href={`/projects/school-fun/subjects/${subject.id}`} 
                  key={subject.id}
                  className="group w-full max-w-sm mx-auto"
                >
                  <div className="bg-white border border-neutral-200 rounded-lg p-4 sm:p-6 h-[100px] sm:h-[120px] flex items-center justify-center text-center transition-all hover:border-primary hover:shadow-md">
                    <h2 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-primary-focus">
                      {subject.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Courses Section */}
        <div className="mb-20">
          <div className="flex justify-center mb-16">
            <div className="text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-warning"></div>
              <h2 className="text-2xl font-bold text-neutral-800">FEATURED COURSES</h2>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-warning"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {featuredCourses.map((course) => (
                <Link 
                  href={`/projects/school-fun/courses/${course.id}`}
                  key={course.id}
                  className="w-full max-w-[378px] group"
                >
                  <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden transition-all hover:shadow-lg">
                    <figure className="h-[215px] relative overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={350}
                        height={215}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </figure>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-neutral-800 mb-2 line-clamp-2 min-h-[56px]">
                          {course.title}
                        </h3>
                        <p className="text-neutral-600 text-sm line-clamp-2 min-h-[40px]">
                          {course.description}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm text-neutral-500">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="whitespace-nowrap">Duration: {course.length}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Next session starts {course.enrollBy}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                        <span className="font-bold text-primary">{course.cost}</span>
                        <div className="flex items-center text-neutral-600">
                          <span className="text-sm mr-2">Certificate Included</span>
                          <Image 
                            loading="lazy" 
                            src="/images/school/Certificate.svg" 
                            alt="Certificate" 
                            height={20} 
                            width={20} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="relative w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full">
            <Image
              src="/images/school/campus.jpeg"
              alt="Campus Background"
              fill
              className="object-cover w-full h-full"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          </div>

          {/* Content */}
          <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
              <div className="flex justify-center mb-10">
                <div className="text-center relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-[3px] bg-warning"></div>
                  <h2 className="text-3xl font-bold text-white tracking-wide">WHAT SETS OBS ONLINE APART?</h2>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-[3px] bg-warning"></div>
                </div>
              </div>

              <p className="text-center text-lg md:text-xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed">
                Our flexible, online programs are designed to bring the Ohmooba Business School classroom to you, and are built around three key characteristics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Real-World Cases */}
                <div className="text-center group bg-transparent">
                  <div className="flex justify-center mb-6 md:mb-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-110">
                      <Image
                        src="/images/school/globe-icon.svg"
                        alt="Real-World Cases"
                        width={80}
                        height={80}
                        className="transition-all duration-300 drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white drop-shadow-sm">Real-World Cases</h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    Apply your learning through real-world examples and experience Ohmooba Business School's signature case method. Business leaders will share challenges they've faced. As the story unfolds, you'll leverage course concepts, vital tools and frameworks, and the diversity of your peers' perspectives to analyze the problem and determine a path forward.
                  </p>
                </div>

                {/* Active */}
                <div className="text-center group bg-transparent">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 transition-transform duration-300 hover:scale-110">
                      <Image
                        src="/images/school/gear-icon.svg"
                        alt="Active Learning"
                        width={80}
                        height={80}
                        className="transition-all duration-700 drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-sm">Active</h3>
                  <p className="text-white/90 leading-relaxed">
                    Immerse yourself in a dynamic, interactive learning experience. You'll engage in a new activity every three to five minutes and apply your knowledge through polls, quizzes, and problem-solving exercises designed to accelerate and reinforce your learning. Exchange ideas with your classmates, broaden your perspective, and challenge your worldview.
                  </p>
                </div>

                {/* Social */}
                <div className="text-center group bg-transparent">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 transition-transform duration-300 hover:scale-110">
                      <Image
                        src="/images/school/network-icon.svg"
                        alt="Social Learning"
                        width={80}
                        height={80}
                        className="transition-all duration-300 drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-sm">Social</h3>
                  <p className="text-white/90 leading-relaxed">
                    Join a global community of business professionals. Learn from and network with peers before, during, and after your course. Ask questions, collaborate, give feedback, and share experiences and expertise across industries to grow or transition your career. You'll build lasting connections that support you wherever life takes you next.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Link 
                  href="/projects/school-fun/more-info"
                  className="btn btn-lg bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base w-full md:w-auto max-w-md mx-auto"
                >
                  Learn More About The OBS Online Learning Model
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolFunPage; 