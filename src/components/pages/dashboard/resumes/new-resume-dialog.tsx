'use client'
import { BaseDialogTpe } from "@/base-dialog-tpes";
import { Button } from "@/components/ui/button";
import { DialogComponent } from "@/components/ui/dialog";
import { Field } from "@/components/ui/input/field";
import { useForm } from 'react-hook-form'

type FormData = {
  title: string;
}

export function NewResumeDialog(props: BaseDialogTpe) {

  const { handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <DialogComponent
      {...props}
      title="Novo Currículo"
      description="Para começar, escolha um título para o seu currículo"
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field name="title" label="Título" placeholder="Título do Currículo" />
          <Button type="submit">Salvar</Button>
        </form>
      }
    />
  )
}