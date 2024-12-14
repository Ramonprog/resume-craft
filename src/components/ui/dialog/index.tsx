import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./primitive"
import { BaseDialogTpe } from "@/base-dialog-tpes";

type DialogComponentProps = BaseDialogTpe & {
  title: string;
  description?: string;
  content: ReactNode;
};

export function DialogComponent({ content, title, children, description, open, setOpen }: DialogComponentProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && (
        <DialogTrigger asChild>{children}</DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>

  )
}