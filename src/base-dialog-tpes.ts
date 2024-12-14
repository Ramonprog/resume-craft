import { ReactNode } from "react";

export type BaseDialogTpe = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children?: ReactNode
};