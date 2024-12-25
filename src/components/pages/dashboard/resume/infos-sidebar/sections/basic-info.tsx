import { SectionTitle } from "@/components/shared/section-title";
import { Field } from "@/components/ui/input/field";
import { SwitchField } from "@/components/ui/switch/field";
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
            containerClassName="flex-1"
          />
          <SwitchField name="content.image.visible" classNameContent='mb-1' defaultChecked={true} />
        </div>

        <Field
          label="Nome Completo"
          name="content.infos.fullName"
          placeholder="Nome Completo"
          required
        />
        <Field
          label="Título"
          name="content.infos.headline"
          placeholder="Título"
          required
        />
        <Field
          label="E-mail"
          name="content.infos.email"
          placeholder="E-mail"
          required
        />
        <Field
          label="Website"
          name="content.infos.website"
          placeholder="Website"
        />
        <Field
          label="Telefone"
          name="content.infos.phone"
          placeholder="Telefone"
        />
      </div>
    </>
  )
}