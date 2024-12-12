"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-[url('/images/abstract-background.svg')] bg-cover bg-center border-b mt-5">
      {/* Mobile Menu Button */}
      <div className="navbar-start">
        <div className="dropdown">
          <button 
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <svg className="h-5 w-5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link></li>
              <li>
                <span>Projects</span>
                <ul className="p-2 bg-base-100">
                  <li><Link href="/projects/store-fun" onClick={() => setIsMenuOpen(false)}>Store Example</Link></li>
                  <li><Link href="/projects/school-fun" onClick={() => setIsMenuOpen(false)}>School Example</Link></li>
                </ul>
              </li>
            </ul>
          )}
        </div>
        
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center  items-center">
        
        <Link href="/" className="flex flex-col items-center mx-4">
          <Image
            src="/images/af_img.jpg"
            alt="AF Logo"
            width={125}
            height={125}
            className="border-2 border-primary"
          />
          <div className="text-neutral-900 font-medium text-lg">Home</div>
        </Link>
        
      </div>

      {/* Right Side - Social Links */}
      <div className="navbar-end">
        <a 
          href="https://www.linkedin.com/in/charles-graham-781b0214/" 
          className="hidden md:block" 
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