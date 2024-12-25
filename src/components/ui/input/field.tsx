'use client'
import { ComponentProps } from "react";
import { Input } from ".";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../label";

type FieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};

export function Field({ label, name, required, containerClassName, ...props }: FieldProps) {

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && 'Campo obrigatório',
      }}
      render={({ field, fieldState }) => (
        <div className={`${containerClassName}`}>
          <Label className="block mb-2" htmlFor={name}>{label}</Label>
          <Input
            {...field}
            {...props}
            id={name}
          />
          {fieldState.error && (<span className="text-sm text-red-500">{fieldState.error.message}</span>)}
        </div>
      )}
    />

  )
}