import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Crafting Digital
                <span className="block text-blue-600 dark:text-blue-400">Excellence</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                Building Modern Web Solutions
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Transforming ideas into powerful digital solutions with clean code, 
              innovative design, and scalable architecture. Specializing in modern 
              web applications, mobile development, and cloud-native solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>

            {/* Tech Stack Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, Vue</p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, APIs</p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Mobile</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flutter, React Native</p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Cloud</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Docker, CI/CD</p>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Chalachew.T</h3>
                    <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-300 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-300 dark:bg-indigo-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;