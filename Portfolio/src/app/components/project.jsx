import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/app/hooks/use-in-view";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, kanban boards, and team analytics.",
    tags: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms with beautiful visualizations.",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool with GPT integration, custom prompts, and content management system.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Video Streaming Platform",
    description: "Netflix-style streaming platform with video encoding, adaptive streaming, and recommendation engine.",
    tags: ["React", "AWS", "FFmpeg", "Redis"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness app with workout tracking, progress charts, and personalized workout plans.",
    tags: ["React Native", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="projects">
      {/* Enhanced background decoration */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2
            className="mb-6 relative inline-block"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <motion.div
              className="absolute -inset-4 bg-purple-600/20 blur-3xl -z-10"
              animate={{
                opacity: isInView ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: '1.125rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A collection of projects that showcase my skills and passion for development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl overflow-hidden backdrop-blur-sm"
              whileHover={{ y: -12 }}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-secondary/50">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-70" />

                {/* Hover overlay with links */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/95 via-violet-600/95 to-purple-700/95 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.button
                    className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.button>
                  <motion.button
                    className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="relative p-6">
                <h3 className="mb-3 text-foreground" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1.5 text-xs bg-gradient-to-r from-primary/10 to-violet-600/10 text-primary rounded-full border border-primary/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        boxShadow: "0 2px 10px rgba(167, 139, 250, 0.1)",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Enhanced glow effects */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  boxShadow: "0 0 60px rgba(167, 139, 250, 0.4), inset 0 0 30px rgba(167, 139, 250, 0.1)",
                }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}