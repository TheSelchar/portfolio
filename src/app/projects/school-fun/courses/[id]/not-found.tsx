import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-3xl justify-center mb-4">Course Not Found</h2>
          <p className="text-base-content/70 mb-6">The course you're looking for doesn't exist.</p>
          <div className="card-actions justify-center">
            <Link 
              href="/projects/school-fun"
              className="btn btn-primary"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 