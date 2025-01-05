import { SectionTitle } from "@/components/shared/section-title";
import { LucideIcon } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'

// export type multiple

export type ResumeArrayKeys = Exclude<keyof ResumeContentData, "image" | "infos" | "summary">;


export type multipleDragItemData = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon
  titleKey: string;
  descriptionKey: string;

}

export type MultipleDragListProps = {
  data: multipleDragItemData;
  onAdd?: () => void;
  onEdit?: (index: number) => void;
};

export function MultipleDragList({ data, onAdd, onEdit }: MultipleDragListProps) {
  const { control } = useFormContext<ResumeData>();

  const { fields, move } = useFieldArray({
    control,
    name: `content.${data.formKey}`
  })

  function handleDrag() {
    console.log("drag")
  }

  return (
    <div className="">
      <SectionTitle icon={data.icon} title={data.title} />

      <div className="mt-4 flex flex-col">
        {!!fields.length && (
          <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId={`droppable-${data.formKey}`}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="bg-red-50">
                  {fields.map((field, index) => {
                    return (
                      <Draggable key={`draggable-item-${data.formKey}-${index}`} draggableId={`draggable-item-${data.formKey}-${index}`} index={index}>
                        {(provided) => (
                          <div key={field.id} ref={provided.innerRef} {...provided.draggableProps} className="h-16 bg-blue-400">
                            <div className="w-6 h-full bg-green-300" {...provided.dragHandleProps}></div>
                            <div className=""><p>content</p></div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  )
}