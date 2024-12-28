//Arquivos d.ts faz com que tenhamos acesso aos tipos do projeto
//Sem a necessidade de importar o arquivo .d.ts
//Podendo atenas usar a tipagem

type ResumeImageData = {
  url: string;
  visible: boolean;
}

type ResumeInfosData = {
  fullName: string;
  headline: string;
  email: string;
  website: string;
  phone: string;
  location: string;
}

type ResumeContentData = {
  image: ResumeImageData;
  infos: ResumeInfosData;
  summary: string;
  socialMedias: Partial<ResumeSocialMediaData>[];
  experiences: Partial<ResumeExperienceData>[];
  educations: Partial<ResumeEducationData>[];
  skills: Partial<ResumeSkillData>[];
  languages: Partial<ResumeLanguageData>[];
  certifications: Partial<ResumeCertificationData>[];
  projects: Partial<ResumeProjectData>[];
}

type ResumeStructureData = {
  experiences: Array<ExperienceData>;
  educations: Array<EducationData>;
  skills: Array<SkillData>;
}

type ResumeData = {
  content: ResumeContentData;
  // structure: ResumeStructureData;
}


type ResumeSocialMediaData = {
  name: string;
  username: string;
  url: string;
  icon: string;
};

type ResumeExperienceData = {
  company: string;
  position: string;
  date: string;
  location: string;
  website: string;
  summary: string;
};

type ResumeEducationData = {
  institution: string;
  degree: string;
  location: string;
  date: string;
  website: string;
  summary: string;
};

type ResumeSkillData = {
  name: string;
  description: string;
  level: number;
  keywords: string;
};

type ResumeLanguageData = {
  name: string;
  description: string;
  level: number;
};

type ResumeCertificationData = {
  name: string;
  institution: string;
  date: string;
  website: string;
  summary: string;
};

type ResumeProjectData = {
  name: string;
  description: string;
  date: string;
  website: string;
  summary: string;
  keywords: string[];
};

