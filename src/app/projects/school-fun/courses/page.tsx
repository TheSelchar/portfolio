'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseDetails, getFilteredCourses } from '../services/subjectService';

interface FilterState {
  subject: string;
  duration: string;
  startDate: string;
  priceSort: 'asc' | 'desc' | undefined;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<CourseDetails[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    subject: '',
    duration: '',
    startDate: '',
    priceSort: undefined
  });
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    if (key === 'priceSort') {
      setFilters(prev => ({
        ...prev,
        [key]: value === '' ? undefined : value as 'asc' | 'desc'
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const filteredCourses = await getFilteredCourses({
          subject: filters.subject || undefined,
          duration: filters.duration || undefined,
          startDate: filters.startDate || undefined,
          priceSort: filters.priceSort
        });
        setCourses(filteredCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
      setLoading(false);
    };

    fetchCourses();
  }, [filters]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">All Courses</h1>
          <p className="text-xl text-neutral-600">Browse our comprehensive selection of courses</p>
        </div>

        {/* Filters Section */}
        <div className="bg-base-100 rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Subject Area Filter */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Subject Area</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={filters.subject}
                onChange={(e) => handleFilterChange('subject', e.target.value)}
              >
                <option value="">All Subjects</option>
                <option value="CAT001">Business Essentials</option>
                <option value="CAT002">Marketing</option>
                <option value="CAT003">Business Strategy</option>
                <option value="CAT004">Business Innovation</option>
              </select>
            </div>

            {/* Duration Filter */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
              >
                <option value="">Any Duration</option>
                <option value="6">6 weeks</option>
                <option value="8">8 weeks</option>
                <option value="10">10 weeks</option>
                <option value="12">12 weeks</option>
              </select>
            </div>

            {/* Start Date Filter */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={filters.startDate}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
              >
                <option value="">Any Start Date</option>
                <option value="may">May 2024</option>
                <option value="june">June 2024</option>
                <option value="july">July 2024</option>
                <option value="august">August 2024</option>
              </select>
            </div>

            {/* Price Sort */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={filters.priceSort ?? ''}
                onChange={(e) => handleFilterChange('priceSort', e.target.value)}
              >
                <option value="">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          /* Courses Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link 
                key={course.id}
                href={`/projects/school-fun/courses/${course.id}`}
                className="group"
              >
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <figure className="relative h-[200px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-lg">{course.title}</h3>
                    <p className="text-neutral-600 text-sm line-clamp-2">{course.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500">Duration:</span>
                        <span>{course.length}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500">Starts:</span>
                        <span>{course.enrollBy}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500">Price:</span>
                        <span className="text-primary font-semibold">{course.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {!loading && courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600">No courses found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage; 