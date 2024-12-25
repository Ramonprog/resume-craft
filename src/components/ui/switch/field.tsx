'use client'
import { Switch } from ".";
import { Controller, useFormContext } from "react-hook-form";

type FieldProps = {
  name: string;
};

export function SwitchField({ name, ...props }: FieldProps) {

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <Switch
            checked={field.value}
            {...props}
            onCheckedChange={field.onChange}
          />
        </div>
      )}
    />

  )
}