import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Award, 
  GraduationCap, 
  Target, 
  TrendingUp,
  Star
} from 'lucide-react';
import type { ResumeAnalysisResult } from '../types/resume';
import { ScoreCard } from './ScoreCard';
import { SkillChips } from './SkillChips';
import { ExperienceTimeline } from './ExperienceTimeline';
import { RecommendationCard } from './RecommendationCard';

interface ResumeAnalysisProps {
  result: ResumeAnalysisResult;
}

export const ResumeAnalysis: React.FC<ResumeAnalysisProps> = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Score Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center">
          <ScoreCard score={result.resume_score} />
          <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Resume Score</h3>
          <p className="text-gray-600">
            {result.resume_score >= 85 ? 'Outstanding! Your resume is highly competitive.' : 
             result.resume_score >= 70 ? 'Good resume with strong potential for improvement.' : 
             result.resume_score >= 50 ? 'Average resume that needs focused improvements.' :
             'Significant improvements needed to compete effectively.'}
          </p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-600" />
          Personal Information
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <User className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700 font-medium">{result.name}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{result.email}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{result.phone}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Star className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{result.total_experience_years} years experience</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-blue-600" />
          Key Skills
        </h3>
        <SkillChips skills={result.skills} type="current" />
      </div>

      {/* Experience Timeline */}
      {result.experience.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Work Experience
          </h3>
          <ExperienceTimeline experiences={result.experience} />
        </div>
      )}

      {/* Education */}
      {result.education.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Education
          </h3>
          <div className="space-y-4">
            {result.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
              >
                <div>
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.institute}</p>
                </div>
                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{edu.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {result.certifications.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {result.certifications.map((cert, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200 flex items-center gap-2"
              >
                <Award className="w-3 h-3" />
                {cert}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Job Fit Roles */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          Recommended Job Roles
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {result.job_fit_roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-green-800 font-semibold">{role}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Missing Skills */}
      {result.missing_skills.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Skills to Develop
          </h3>
          <p className="text-gray-600 mb-4">
            Adding these skills could significantly boost your resume score and job prospects:
          </p>
          <SkillChips skills={result.missing_skills} type="missing" />
        </div>
      )}

      {/* Recommendations */}
      <RecommendationCard recommendations={result.recommendations} />
    </motion.div>
  );
};