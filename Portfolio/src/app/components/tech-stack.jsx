import { motion } from "motion/react";
import { useInView } from "@/app/hooks/use-in-view";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Version Control" },
  { name: "Figma", category: "Design" },
];

export function TechStack() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="tech-stack">
      {/* Enhanced background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
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
              Tech Stack
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
            Technologies and tools I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              <motion.div
                className="relative px-6 py-3 bg-gradient-to-br from-card to-card/50 border border-border rounded-full backdrop-blur-sm cursor-default overflow-hidden"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <motion.span
                    className="font-medium text-foreground"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                  <motion.span
                    className="text-xs text-primary/80 group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {tech.category}
                  </motion.span>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 -z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: "0 0 20px rgba(167, 139, 250, 0.5), inset 0 0 20px rgba(167, 139, 250, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative gradient with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <motion.div
            className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}