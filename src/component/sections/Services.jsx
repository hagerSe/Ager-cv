import React from 'react';
import { servicesData } from '../../data/servicesData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services & Expertise"
          subtitle="What I Can Do For You"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Card key={index} className="group hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <span className="text-2xl group-hover:text-white transition-colors">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;