import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FileUploadProps {
  onFileUpload: (text: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [error, setError] = React.useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setError('');

    try {
      const text = await file.text();
      if (text.trim().length < 50) {
        setError('Resume seems too short. Please upload a complete resume.');
        return;
      }
      onFileUpload(text);
    } catch (err) {
      setError('Failed to read file. Please try again.');
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Your Resume</h2>
      
      <motion.div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
          ${isDragActive && !isDragReject ? 'border-blue-400 bg-blue-50' : ''}
          ${isDragReject ? 'border-red-400 bg-red-50' : ''}
          ${!isDragActive ? 'border-gray-300 hover:border-blue-400 hover:bg-blue-50' : ''}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center gap-4">
          <div className={`
            w-16 h-16 rounded-full flex items-center justify-center
            ${isDragActive ? 'bg-blue-100' : 'bg-gray-100'}
          `}>
            {isDragReject ? (
              <AlertCircle className="w-8 h-8 text-red-500" />
            ) : isDragActive ? (
              <Upload className="w-8 h-8 text-blue-600" />
            ) : (
              <FileText className="w-8 h-8 text-gray-600" />
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {isDragActive ? 'Drop your resume here' : 'Upload Resume'}
            </h3>
            <p className="text-gray-600 mb-2">
              Drag & drop your resume or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports PDF, DOC, DOCX, TXT (max 5MB)
            </p>
          </div>
        </div>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700">{error}</p>
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">What we analyze:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Resume structure and formatting</li>
          <li>• Skills and experience relevance</li>
          <li>• Education and certifications</li>
          <li>• Job market compatibility</li>
          <li>• Missing skills and improvements</li>
        </ul>
      </div>
    </div>
  );
};