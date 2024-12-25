import { SectionTitle } from "@/components/shared/section-title";
import { Field } from "@/components/ui/input/field";
import { UserRound } from "lucide-react";

export function BasicInfo() {
  return (
    <>
      <SectionTitle icon={UserRound} title="Informações básicas" />

      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        <div className="col-span-full w-full flex gap-3 items-end">
          <Field
            label="Foto"
            placeholder="https://..."
            name='content.image.url'
          />
        </div>
      </div>
    </>
  )
}