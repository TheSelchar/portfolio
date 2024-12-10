"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const FavoriteBooks = () => {
  useEffect(() => {
    const interval = setInterval(() => {
    const carousel = document.getElementById('book-carousel');
    const currentSlide = carousel?.querySelector('[data-active="true"]') as HTMLElement;
    const nextSlide = (currentSlide?.nextElementSibling || carousel?.firstElementChild) as HTMLElement;
      
      if (currentSlide) currentSlide.removeAttribute('data-active');
      if (nextSlide) {
        nextSlide.setAttribute('data-active', 'true');
        carousel?.scrollTo({
          left: nextSlide.offsetLeft,
          behavior: 'smooth'
        });
      }
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="favorite-books">
      <div className="text-center mt-4">
        <label className="font-bold text-lg text-neutral-900">Favorite Books</label>
        <hr className="my-1" />
      </div>
      <div className="relative">
        <div id="book-carousel" className="carousel w-full">
          {/* Book 1 */}
          <div id="book1" className="carousel-item relative w-full" data-active="true">
            <div className="card-body items-center text-center">
              <Image
                src="https://m.media-amazon.com/images/I/61GzazUmKyL._SY466_.jpg"
                alt="Book 1"
                width={150}
                height={250}
                className="rounded-lg shadow-md"
              />
              <h2 className="card-title text-neutral-900 text-sm mt-4">Code Complete</h2>
              <p className="text-neutral-800 text-sm">
                A Practical Handbook of Software Construction, Second Edition 2nd Edition
              </p>
              <a 
                href="https://a.co/d/2WjDbxY" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-2"
              >
                View on Amazon
              </a>
            </div>
          </div>
  
          {/* Book 2 */}
          <div id="book2" className="carousel-item relative w-full">
            <div className="card-body items-center text-center">
              <Image
                src="https://m.media-amazon.com/images/I/51E2055ZGUL._SY466_.jpg"
                alt="Book 2"
                width={150}
                height={250}
                className="rounded-lg shadow-md"
              />
              <h2 className="card-title text-neutral-900 text-sm mt-4">Clean Code</h2>
              <p className="text-neutral-800 text-sm">
                A Handbook of Agile Software Craftsmanship
              </p>
              <a 
                href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-2"
              >
                View on Amazon
              </a>
            </div>
          </div>

          {/* Book 3 */}
          <div id="book3" className="carousel-item relative w-full">
            <div className="card-body items-center text-center">
              <Image
                src="https://m.media-amazon.com/images/I/716QNCYUMAL._SY466_.jpg"
                alt="Book 3"
                width={150}
                height={250}
                className="rounded-lg shadow-md"
              />
              <h2 className="card-title text-neutral-900 text-sm mt-4">The Fearless Organization</h2>
              <p className="text-neutral-800 text-sm">
                Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth
              </p>
              <a 
                href="https://a.co/d/fx3G27n"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-2"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            const carousel = document.getElementById('book-carousel');
            const currentSlide = carousel?.querySelector('[data-active="true"]') as HTMLElement;
            const prevSlide = (currentSlide?.previousElementSibling || carousel?.lastElementChild) as HTMLElement;
            
            if (currentSlide) currentSlide.removeAttribute('data-active');
            if (prevSlide) {
              prevSlide.setAttribute('data-active', 'true');
              carousel?.scrollTo({
                left: prevSlide.offsetLeft,
                behavior: 'smooth'
              });
            }
          }} className="btn btn-circle btn-sm">❮</button>
          
          <button onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            const carousel = document.getElementById('book-carousel');
            const currentSlide = carousel?.querySelector('[data-active="true"]') as HTMLElement;
            const nextSlide = (currentSlide?.nextElementSibling || carousel?.firstElementChild) as HTMLElement;
            
            if (currentSlide) currentSlide.removeAttribute('data-active');
            if (nextSlide) {
              nextSlide.setAttribute('data-active', 'true');
              carousel?.scrollTo({
                left: nextSlide.offsetLeft,
                behavior: 'smooth'
              });
            }
          }} className="btn btn-circle btn-sm">❯</button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteBooks; 