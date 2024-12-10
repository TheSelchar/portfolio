import { FC } from 'react';

const SchoolFunPage: FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/abstract-background.svg')] bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/95 shadow-lg rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-8">School Example Project</h1>
          
          {/* Project Content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Overview</h2>
              <p className="text-neutral-700">
                A comprehensive school management system built with modern web technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Features</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Student management</li>
                <li>Course scheduling</li>
                <li>Grade tracking</li>
                <li>Attendance system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>DaisyUI</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolFunPage; 