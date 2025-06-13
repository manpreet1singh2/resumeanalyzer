import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle } from 'lucide-react';

interface RecommendationCardProps {
  recommendations: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendations }) => {
  const recommendationList = recommendations.split('\n\n').filter(rec => rec.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border border-amber-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">AI Recommendations</h3>
      </div>
      
      <div className="space-y-4">
        {recommendationList.map((recommendation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">{recommendation.trim()}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};