'use client'
import { ComponentProps } from "react";
import { Input } from ".";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../label";

type FieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export function Field(props: FieldProps) {

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field }) => (
        <div>
          <Label htmlFor={props.name}>{props.label}</Label>
          <Input
            {...field}
            {...props}
          />
        </div>
      )}
    />

  )
}