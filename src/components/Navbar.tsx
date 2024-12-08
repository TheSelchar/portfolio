import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-[url('/images/abstract-background.svg')] bg-cover bg-center border-b mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50  bg-base-100 rounded-box w-52">
            <li><Link href="/" className="text-neutral font-medium text-lg">Home</Link></li>
            <li><Link href="/resume" className="text-neutral font-medium text-lg">Resume</Link></li>
            <li><a href="#projects" className="text-neutral font-medium text-lg">Projects</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/resume" className="text-neutral font-medium text-lg">Resume</Link></li>
        </ul>
        <a href="/" className="flex flex-col items-center">
          <Image
            src="/images/af_img.jpg"
            alt="AF Logo"
            width={125}
            height={125}
            className="mx-2 border-2 border-primary"
          />
          <div className="text-neutral-900 font-medium text-lg">Main</div>
        </a>
        
        <ul className="menu menu-horizontal px-1">
          <li className="dropdown dropdown-hover hidden lg:block">
            <div tabIndex={0} role="button" className="text-neutral font-medium text-lg">
              Projects
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/store" className="text-neutral font-medium">
                  Store Example
                </Link>
              </li>
              <li>
                <Link href="/school" className="text-neutral font-medium">
                  School Example
                </Link>
              </li>
            </ul>
          </li>
         
          {/* Mobile version with click */}
          <li className="dropdown lg:hidden">
            <details>
              <summary className="text-neutral font-medium text-lg">Projects</summary>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/store" className="text-neutral font-medium">
                    Store Example
                  </Link>
                </li>
                <li>
                  <Link href="/school" className="text-neutral font-medium">
                    School Example
                  </Link>
                </li>
              </ul>
            </details>
          </li>
</ul>
      </div>
      <div className="navbar-end">
      <a 
          href="https://www.linkedin.com/in/charles-l-graham-ii/" 
          className="" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image
            src="/images/Li-logo-bk.png"
            alt="LinkedIn"
            width={100}
            height={100}
            className="mr-2"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar; 