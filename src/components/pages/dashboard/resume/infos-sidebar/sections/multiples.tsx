import { Separator } from "@/components/ui/separator";
import { BicepsFlexed, BriefcaseBusiness, FileBadge2, Globe, GraduationCap, Languages, Share2 } from "lucide-react";
import { Fragment } from "react";
import { multipleDragItemData, MultipleDragList } from "../multiple-drag-list";


export function MultiplesSection() {

  const sectionsKeys: multipleDragItemData[] = [
    {
      formKey: "socialMedias",
      title: "Redes Sociais",
      icon: Share2,
      titleKey: "name",
      descriptionKey: "username",
    },
    {
      formKey: "experiences",
      title: "Experiências",
      icon: BriefcaseBusiness,
      titleKey: "company",
      descriptionKey: "position",
    },
    {
      formKey: "educations",
      title: "Educação",
      icon: GraduationCap,
      titleKey: "institution",
      descriptionKey: "degree",
    },
    {
      formKey: "skills",
      title: "Habilidades",
      icon: BicepsFlexed,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "languages",
      title: "Idiomas",
      icon: Languages,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "certifications",
      title: "Certificações",
      icon: FileBadge2,
      titleKey: "name",
      descriptionKey: "institution",
    },
    {
      formKey: "projects",
      title: "Projetos",
      icon: Globe,
      titleKey: "name",
      descriptionKey: "description",
    },
  ];

  return (
    <div className="">
      {sectionsKeys.map((item) => (
        <Fragment key={`multiple-section-${item.title}`}>
          <Separator className="my-3" />
          <MultipleDragList data={item} onAdd={() => { }} onEdit={() => { }} />
        </Fragment>
      ))}
    </div>
  )
}