"use client";

import { useState } from 'react';
import FavoriteBooks from '../components/FavoriteBooks';
import PhotoHeart from '../components/PhotoHeart';
import Image from 'next/image';
import { AIChat } from '@/components/AIChat';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-[url('/images/abstract-background.svg')] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - About Me Section */}
          <div className="bg-base-100 p-8 rounded-lg shadow-xl bg-opacity-90">
            <h1 className="text-3xl font-bold mb-4 text-neutral-900">Charles Graham II</h1>
            <div className="prose text-neutral-800">
              <p className="mb-4">
              Welcome to my portfolio! I'm a passionate and innovative software manager with a love 
              for building products that make a difference. One of my greatest joys is helping developers 
              grow not just as coders but as leaders and 'Shapers' who inspire and uplift others. 
              I believe in fostering a culture of mentorship and collaboration where everyone has the opportunity 
              to reach their full potential and pass that growth forward. Together, we can create a ripple effect 
              of innovation and leadership that leaves a lasting impact.
              </p>
              <hr className="my-4" />
              <p className="mb-4">
                <label className="font-bold text-lg">A little more about me:</label>
              </p>
              <p className="mb-4">I'm a husband, father of one gifted and loving son (which can be a little challenging at times lol), and a I'm bit of a geek. 
              I love to learn and share knowledge, a bit of a minimalist and I love to architect software and website that are useful and help people.
              </p>
              <p className="mb-4">
                I have servered 2400 hours in Americops and been a volunteer for my local community.  I believe in giving the opportunity we all can 
                make a difference in the world and achieve success.  I'm a big believer in the power of mentorship and collaboration and I'm always looking for ways to help others grow.
                For me, leadership is a calling being in a leadership role is not about being the best, but about being the best servant.  I'm a big believer in servant leadership and I'm always looking for ways to help others grow.
              </p>
              <hr className="my-4" />
              
              <label className="font-bold text-lg">Explore my website:</label>
              <p className="mb-4 mt-4">
              </p>
              <p className="mb-4 text-red-500">
                <b>Disclaimer:</b> I built this website to keep my skills sharp and no code here is been fully tested and not to be used in a production environment. 
                Also all links do not work in my personal projects (I just do the time to build our a feature full working product), so please don't be alarmed if a link or button does not work.
              </p>
              <p>
                I am always adding to it and updating it, so please check back often and if there's somethign you like to see me do build let me know. 
                Also if you have any questions or comments, please feel free to reach out to me.
              You can also visit my <a href="https://www.linkedin.com/in/charles-graham-781b0214/" target="_blank" rel="noopener noreferrer" className="btn-link p-0 m-0">LinkedIn profile</a>.
              </p>
              <div className="mt-4">
                <b>Things I'm heads down mastering:</b>
                <ul className="pl-4">
                  <li>Digital transformation strategies</li>
                  <li>Business Process Automation</li>
                  <li>AI-driven data transformation</li>
                  <li>Openapi, Pinecone, Langchain, LlamaIndex</li>
                  <li>Python, Blazor, Docker, Kubernetes</li>
                </ul>
              </div>
              <hr className="my-4" />
              <label className="font-bold text-lg">Technologies & Skills I'm familiar with:</label>
              <div className="mb-4 mt-4">
                <ul className="flex flex-row flex-wrap gap-4 list-disc">
                  <li className="ml-4">Software Architecture</li>
                  <li className="ml-4">Platform Modernization</li>
                  <li className="ml-4">Business Process Automation</li>
                  <li className="ml-4">Team Leadership and Mentorship</li>
                  <li className="ml-4">React</li>
                  <li className="ml-4">Next.js</li>
                  <li className="ml-4">Tailwind CSS</li>
                  <li className="ml-4">Node.js</li>
                  <li className="ml-4">Typescript</li>
                  <li className="ml-4">Python</li>
                  <li className="ml-4">ASP.NET, C#, Blazor, EF Core</li>
                  <li className="ml-4">SQL</li>
                  <li className="ml-4">Docker</li>
                  <li className="ml-4">Kubernetes</li>
                </ul>
              </div>
              <hr className="my-4" />
              <label className="text-sm flex flex-row flex-wrap">
                <span className="font-bold mr-2">Used in this site: </span> React, Next.js, Tailwind CSS, DaisyUI, Typescript, kubernetes, docker, Google Cloud
                <br/>
                OpenAI, Pinecone, Langchain, LlamaIndex
              </label>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Shaper Article Card - Full width on mobile */}
            <div className="card bg-base-100 shadow-xl col-span-full">
              <figure className="px-10 pt-10">
                <a href="https://www.linkedin.com/pulse/shaper-leading-empathy-integrity-charles-graham-bn7bc/?trackingId=Dkg8zQrLQvmVAdp1brFlNA%3D%3D" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/images/shaper.png" 
                    alt="Shoes" 
                    width={500}
                    height={300}
                    className="rounded-xl w-full" 
                  />
                </a>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-neutral-900 text-sm">Shaper: Leading with Empathy and Integrity</h2>
                <p className="text-neutral-800 text-sm">
                  If you want to learn more about what it means to be a Shaper, please clicked the image above to read my article on LinkedIn. 
                  Also you can look at my "Featured Articles" section to read more of my work!
                </p>
              </div>
            </div>

            {/* Favorite books - Full width on mobile */}
            <div id="favorite-books" className="card bg-base-100 shadow-xl col-span-full">
              <FavoriteBooks />
            </div>

            {/* Photo Heart - Always full width */}
            <div id="image-grid" className="card bg-base-100 shadow-xl col-span-full h-[400px] md:h-[600px]">
              <PhotoHeart />
            </div>
          </div>
        </div>
      </div>
      <AIChat />
    </main>
  );
}
