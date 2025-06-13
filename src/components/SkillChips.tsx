import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Users, Brain } from 'lucide-react';

interface SkillChipsProps {
  skills: string[];
  type?: 'current' | 'missing';
}

export const SkillChips: React.FC<SkillChipsProps> = ({ skills, type = 'current' }) => {
  const getSkillCategory = (skill: string) => {
    const techSkills = ['JavaScript', 'Python', 'React', 'Node.js', 'HTML', 'CSS', 'TypeScript', 'Java', 'C++', 'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin'];
    const toolSkills = ['Git', 'Docker', 'AWS', 'MongoDB', 'SQL', 'Jenkins', 'Kubernetes', 'Linux', 'Firebase', 'GraphQL'];
    const softSkills = ['Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Project Management', 'Agile', 'Scrum'];
    
    if (techSkills.some(tech => skill.toLowerCase().includes(tech.toLowerCase()))) {
      return { category: 'Technical', icon: Code, color: 'blue' };
    }
    if (toolSkills.some(tool => skill.toLowerCase().includes(tool.toLowerCase()))) {
      return { category: 'Tools', icon: Wrench, color: 'purple' };
    }
    if (softSkills.some(soft => skill.toLowerCase().includes(soft.toLowerCase()))) {
      return { category: 'Soft Skills', icon: Users, color: 'green' };
    }
    return { category: 'Other', icon: Brain, color: 'gray' };
  };

  const getChipStyles = (category: string, type: 'current' | 'missing') => {
    const baseStyles = "px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-200 hover:scale-105";
    
    if (type === 'missing') {
      return `${baseStyles} bg-red-100 text-red-800 border border-red-200`;
    }

    switch (category) {
      case 'Technical':
        return `${baseStyles} bg-blue-100 text-blue-800 border border-blue-200`;
      case 'Tools':
        return `${baseStyles} bg-purple-100 text-purple-800 border border-purple-200`;
      case 'Soft Skills':
        return `${baseStyles} bg-green-100 text-green-800 border border-green-200`;
      default:
        return `${baseStyles} bg-gray-100 text-gray-800 border border-gray-200`;
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => {
        const { category, icon: Icon } = getSkillCategory(skill);
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={getChipStyles(category, type)}
          >
            <Icon className="w-3 h-3" />
            {skill}
            {type === 'missing' && (
              <div className="w-2 h-2 bg-red-500 rounded-full ml-1" />
            )}
          </motion.span>
        );
      })}
    </div>
  );
};