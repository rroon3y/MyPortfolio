import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";
import { useInView } from "@/app/hooks/use-in-view";
import { Instagram, WhatsApp } from "@mui/icons-material";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/rroon3y" },
  { icon: WhatsApp, label: "WhatsApp", href: "https://wa.me/0731434141" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/_roo.n3yy" },
  { icon: Mail, label: "Email", href: "mailto:rooneyalex2016@gmail.com" },
];

export function Contact() {
  const { ref, isInView } = useInView();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
    alert("Message sent! (This is a demo)");
    reset();
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      {/* Enhanced background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
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
              Get In Touch
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
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: '1.125rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-input-background border-2 border-input rounded-xl focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Your name"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-destructive"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-input-background border-2 border-input rounded-xl focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="your.email@example.com"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-destructive"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-input-background border-2 border-input rounded-xl focus:outline-none focus:border-primary transition-all duration-300 resize-none hover:border-primary/50"
                  placeholder="Tell me about your project..."
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-destructive"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{
                  boxShadow: "0 0 40px rgba(167, 139, 250, 0.4)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  Send Message
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 0 60px rgba(124, 58, 237, 0.8)",
                  }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10">
              <motion.h3
                className="mb-4 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
                style={{ fontSize: '1.75rem', fontWeight: 700 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Let's Connect
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out through any of these channels.
              </motion.p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative flex items-center gap-4 p-5 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl backdrop-blur-sm overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  {/* Hover background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-violet-600/20 flex items-center justify-center text-primary backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    style={{
                      boxShadow: "0 8px 32px rgba(167, 139, 250, 0.2)",
                    }}
                  >
                    <social.icon className="w-6 h-6" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <div className="relative">
                    <p className="font-semibold text-foreground">{social.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {social.label === "Email" ? "rooneyalex2016@gmail.com" :
                        social.label === "GitHub" ? "rroon3y" :
                        social.label === "WhatsApp" ? "0731434141" :
                        social.label === "Instagram" ? "_roo.n3yy" :
                        `@yourusername`}
                    </p>
                  </div>

                  {/* Border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      boxShadow: "0 0 30px rgba(167, 139, 250, 0.3), inset 0 0 20px rgba(167, 139, 250, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}