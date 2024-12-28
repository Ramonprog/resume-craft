'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import UnderLine from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from '@/lib/utils'
import { MenuBar } from './MenuBar'

type Props = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
};


export function Editor({ value, onChange, className }: Props) {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4"
          }
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4"
          }
        },
      }),
      UnderLine,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'focus:outline-none h-full p-4'
      }
    },
    onCreate: ({ editor }) => {
      editor.on('update', ({ editor }) => {
        onChange?.(editor.getHTML())
      })
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    autofocus: false
  })

  return (
    <div className={cn('bg-background border border-muted rounded-2xl w-full flex flex-col', className)}>
      <div className="">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}