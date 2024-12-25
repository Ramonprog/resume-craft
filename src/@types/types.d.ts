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