import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building } from 'lucide-react';
import type { Experience } from '../types/resume';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300"></div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative flex items-start gap-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-500 rounded-full shadow-lg">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            
            {/* Content */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Building className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};