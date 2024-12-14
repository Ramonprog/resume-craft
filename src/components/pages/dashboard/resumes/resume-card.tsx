import Link from "next/link";
import { ResumeCardButton } from "./resume-card-button";


export function ResumeCard() {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton title="Meu Curriculo" description="Ultima atualização há 10 dias atrás" icon={<span className="text-accent">📄</span>} />
    </Link>
  )
}