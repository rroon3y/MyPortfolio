import { motion } from "motion/react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { useInView } from "@/app/hooks/use-in-view";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Node.js, PostgreSQL, MongoDB",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Responsive Design",
  },
  {
    icon: Rocket,
    title: "DevOps & Tools",
    description: "Git, Github",
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="about">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />

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
              About Me
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
            style={{ fontSize: '1.125rem', lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a passionate full-stack developer with years of experience building
            scalable web applications. I love turning complex problems into simple,
            beautiful, and intuitive interfaces. When I'm not coding, you'll find me
            exploring new technologies, contributing to open source, or mentoring aspiring developers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-violet-600/0 to-purple-600/0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(167, 139, 250, 0) 0%, rgba(139, 92, 246, 0) 100%)",
                    "linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
                  ]
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <motion.div
                className="relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-violet-600/20 flex items-center justify-center text-primary backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{
                  boxShadow: "0 8px 32px rgba(167, 139, 250, 0.2)",
                }}
              >
                <skill.icon className="w-7 h-7" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="relative mb-2 text-foreground" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                {skill.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  boxShadow: "0 0 40px rgba(167, 139, 250, 0.3), inset 0 0 20px rgba(167, 139, 250, 0.1)",
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}