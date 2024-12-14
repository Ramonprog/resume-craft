import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function AiGenerationDropdown() {
  return (
    <Button className="flex gap-2 text-xs px-2.5 py-1 h-9">
      <Bot size={20} />
      Inteligência artificial
    </Button>
  )
}