import { Editor } from "@/components/shared/Editor/Editor";
import { SectionTitle } from "@/components/shared/section-title";
import { ScrollText } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export function SummarySection() {

  const { control } = useFormContext();

  return (
    <>
      <SectionTitle icon={ScrollText} title="Sobre você" />

      <Controller
        control={control}
        name="content.summary"
        render={({ field }) => (
          <div >
            <Editor {...field} className="min-h-[200px] max-h-[300px] mt-4" />
          </div>
        )}
      />
    </>
  )
}