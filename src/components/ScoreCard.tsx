import React from 'react';
import { motion } from 'framer-motion';

interface ScoreCardProps {
  score: number;
  size?: number;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ score, size = 120 }) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return { color: 'text-green-600', bg: 'bg-green-100', stroke: '#10b981' };
    if (score >= 70) return { color: 'text-blue-600', bg: 'bg-blue-100', stroke: '#3b82f6' };
    if (score >= 50) return { color: 'text-yellow-600', bg: 'bg-yellow-100', stroke: '#f59e0b' };
    return { color: 'text-red-600', bg: 'bg-red-100', stroke: '#ef4444' };
  };

  const getScoreLabel = (score: number) => {
    if (score >= 85) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Average';
    return 'Needs Work';
  };

  const colors = getScoreColor(score);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`inline-flex flex-col items-center justify-center w-${size} h-${size} rounded-full ${colors.bg} p-6`}>
      <div className="relative">
        <svg width="100" height="100" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={colors.stroke}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className={`text-2xl font-bold ${colors.color}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {score}
          </motion.span>
          <span className="text-xs text-gray-600 font-medium">out of 100</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-3 text-center"
      >
        <span className={`text-sm font-semibold ${colors.color}`}>
          {getScoreLabel(score)}
        </span>
      </motion.div>
    </div>
  );
};