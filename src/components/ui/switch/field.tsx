'use client'
import { Switch } from ".";
import { Controller, useFormContext } from "react-hook-form";

type FieldProps = {
  name: string;
  classNameContent?: string;
  defaultChecked?: boolean;
};

export function SwitchField({ name, classNameContent, defaultChecked, ...props }: FieldProps) {

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={`${classNameContent}`}>
          <Switch
            defaultChecked={defaultChecked}
            checked={field.value}
            {...props}
            onCheckedChange={field.onChange}
          />
        </div>
      )}
    />

  )
}