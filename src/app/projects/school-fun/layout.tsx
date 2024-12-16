import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SchoolLayoutProps {
  children: React.ReactNode;
}

const SchoolLayout: FC<SchoolLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* School Header */}
      <header className="bg-white border-t-1 border-primary shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <Link href="/projects/school-fun" className="flex items-center gap-3">
              <div className="w-12 h-12 relative flex items-center justify-center bg-primary rounded-full">
                <span className="text-2xl font-bold text-white">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-neutral-900">Ohmooba</span>
                <span className="text-lg font-semibold text-neutral-900">Business School</span>
                <span className="text-primary font-medium">Online</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="ml-auto">
              <ul className="flex items-center gap-8">
                <li>
                  <Link 
                    href="/projects/school-fun/courses" 
                    className="text-neutral-600 hover:text-primary transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                
                <li>
                  <button className="btn btn-primary">
                    Sign In
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Red Banner */}
      <div className="bg-primary h-1"></div>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {children}
      </main>

      {/* School Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About OBS Online</h3>
              <p className="text-neutral-400">
                Transforming the way professionals around the world learn and lead.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/projects/school-fun" className="text-neutral-400 hover:text-white">
                    All Courses
                  </Link>
                </li>
                
                <li>
                  <Link href="/" className="text-neutral-400 hover:text-white">
                    Back to Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-neutral-400">
                Email: info@ohmoobabs.edu<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Ohmooba Business School Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolLayout; 