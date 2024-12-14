import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./primitive"

type DialogComponentProps = {
  children?: ReactNode
  title: string;
  description?: string;
  content: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
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