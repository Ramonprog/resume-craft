import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ResumeInfosSidebar } from "./infos-sidebar"
import { ResumeContent } from "./resume-content"
import { ResumeStructureSidebar } from "./structure-sidebar"

export function ResumePage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <ResumeInfosSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel>
          <ResumeContent />
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
          <ResumeStructureSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>

    </main>
  )
}