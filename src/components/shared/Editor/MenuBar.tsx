'use client'

import { Button } from '@/components/ui/button';
import { Editor } from '@tiptap/react'
import {
  Italic,
  Bold,
  ListOrdered,
  List,
  Strikethrough,
  Underline,
  AlignLeft,
  AlignJustify,
  AlignCenter,
  AlignRight,
} from "lucide-react";

type MenuBarProps = {
  editor: Editor | null;
};

export function MenuBar({ editor }: MenuBarProps) {

  if (!editor) return null;

  const ACTIONS = [
    {
      label: "Negrito",
      icon: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive("bold"),
    },
    {
      label: "Itálico",
      icon: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive("italic"),
    },
    {
      label: "Riscado",
      icon: Strikethrough,
      action: () => editor.chain().focus().toggleStrike().run(),
      active: editor.isActive("strike"),
    },
    {
      label: "Sublinhado",
      icon: Underline,
      action: () => editor.chain().focus().toggleUnderline().run(),
      active: editor.isActive("underline"),
    },
    {
      label: "Lista",
      icon: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive("bulletList"),
    },
    {
      label: "Lista ordenada",
      icon: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive("orderedList"),
    },
    {
      label: "Alinhar Esquerda",
      icon: AlignLeft,
      action: () => editor.chain().focus().setTextAlign("left").run(),
      active: editor.isActive({ textAlign: "left" }),
    },
    {
      label: "Alinhar Centro",
      icon: AlignCenter,
      action: () => editor.chain().focus().setTextAlign("center").run(),
      active: editor.isActive({ textAlign: "center" }),
    },
    {
      label: "Alinhar Direita",
      icon: AlignRight,
      action: () => editor.chain().focus().setTextAlign("right").run(),
      active: editor.isActive({ textAlign: "right" }),
    },
    {
      label: "Alinhar Justificado",
      icon: AlignJustify,
      action: () => editor.chain().focus().setTextAlign("justify").run(),
      active: editor.isActive({ textAlign: "justify" }),
    },
  ];


  return (
    <div className="flex items-center border-b p-2 flex-wrap">
      {ACTIONS.map((action, index) => (
        <Button
          variant='ghost'
          key={index}
          type='button'
          onClick={action.action}
          className="p-2 h-full"

        >
          <action.icon size={24} className='w-4 h-4' />
        </Button>
      ))}
    </div>
  )
}