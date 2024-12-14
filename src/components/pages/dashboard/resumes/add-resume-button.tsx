import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card-button";

export function AddResumeButton() {
  return (
    <ResumeCardButton title="Adicionar Currículo" description="Comece a criar seu currículo" icon={<Plus size={50} />} />
  )
}