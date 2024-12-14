'use client'
import { BaseDialogTpe } from "@/base-dialog-tpes";
import { Button } from "@/components/ui/button";
import { DialogComponent } from "@/components/ui/dialog";
import { Field } from "@/components/ui/input/field";
import { FormProvider, useForm } from 'react-hook-form'

type FormData = {
  title: string;
}

export function NewResumeDialog(props: BaseDialogTpe) {

  const methods = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <DialogComponent
      {...props}
      title="Novo Currículo"
      description="Para começar, escolha um título para o seu currículo"
      content={
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col ">
            <Field name="title" label="Título" required placeholder="Título do Currículo" />
            <Button type="submit" className="mt-6 ml-auto">Salvar</Button>
          </form>
        </FormProvider>
      }
    />
  )
}