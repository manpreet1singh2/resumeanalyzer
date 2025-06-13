export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  institute: string;
  year: string;
}

export interface ResumeAnalysisResult {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  total_experience_years: number;
  resume_score: number;
  missing_skills: string[];
  job_fit_roles: string[];
  recommendations: string;
}