import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjects } from "@/hooks/use-projects";
import { Loader2, ExternalLink, Play, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { ProjectResponse } from "@shared/routes";

export function PortfolioGrid() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState<"all" | "graphic_design" | "video_editing">("all");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const filteredProjects = projects?.filter(
    (p) => filter === "all" || p.category === filter
  ) || [];

  return (
    <div className="space-y-10">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { id: "all", label: "All Projects" },
          { id: "graphic_design", label: "Graphic Design" },
          { id: "video_editing", label: "Video Editing" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
              filter === tab.id
                ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                : "bg-transparent border-white/10 text-muted-foreground hover:border-white/30 hover:text-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found in this category yet.
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectResponse }) {
  const [isOpen, setIsOpen] = useState(false);
  const isVideo = project.category === "video_editing";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div 
          className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-card border border-white/5 group-hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-primary/10"
        >
          {/* Image */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold font-display text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {project.description}
            </p>
            <div className="mt-4 flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {project.technologies?.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/90 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 delay-100 border border-white/20">
              {isVideo ? <Play className="fill-current ml-1" /> : <ZoomIn />}
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-[#0f0f0f] border-white/10 p-0 overflow-hidden">
        <div className="relative w-full max-h-[85vh] overflow-y-auto">
          {isVideo && project.videoUrl ? (
            <video 
              src={project.videoUrl} 
              controls 
              autoPlay 
              className="w-full aspect-video bg-black"
            />
          ) : (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto"
            />
          )}
          
          <div className="p-6 md:p-8 bg-[#0f0f0f]">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold font-display mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* If there was a live URL, we could show it here */}
              {/* <Button variant="outline" size="sm" className="gap-2">
                Visit <ExternalLink className="w-4 h-4" />
              </Button> */}
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
