import { SectionTitle } from "@/components/shared/section-title";
import { LucideIcon } from "lucide-react";

// export type multiple

export type ResumeArrayKeys = Exclude<keyof ResumeContentData, "image" | "infos" | "summary">;


export type multipleDragItemData = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon
  titleKey: string;
  descriptionKey: string;

}

export type MultipleDragListProps = {
  data: multipleDragItemData;
  onAdd?: () => void;
  onEdit?: (index: number) => void;
};

export function MultipleDragList({ data, onAdd, onEdit }: MultipleDragListProps) {
  return (
    <div className="">
      <SectionTitle icon={data.icon} title={data.title} />

      <div className=""></div>
    </div>
  )
}