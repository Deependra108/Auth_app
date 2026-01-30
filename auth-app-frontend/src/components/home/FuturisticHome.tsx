import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  Lock,
  Key,
  UserCheck,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Lock className="h-8 w-8 text-cyan-500" />,
    title: "JWT Authentication",
    desc: "Secure access & refresh token based authentication.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-purple-500" />,
    title: "Role Based Access",
    desc: "Fine-grained authorization for Admin & Users.",
  },
  {
    icon: <Key className="h-8 w-8 text-indigo-500" />,
    title: "OAuth2 Ready",
    desc: "Plug-and-play social login integrations.",
  },
]

export default function FuturisticHome() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 pt-28 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold 
          bg-gradient-to-r from-cyan-500 to-purple-600 
          bg-clip-text text-transparent">
          SecureAuth
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A futuristic authentication system built for modern, scalable
          applications.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            View Docs
          </Button>
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Powerful Authentication Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  bg-card/70 backdrop-blur
                  border border-border
                  hover:border-cyan-500/40
                  transition
                "
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-medium">{f.title}</h3>
                  <p className="text-muted-foreground mt-3">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECURITY */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-32 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Security First Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your data is protected using industry-standard encryption,
            secure cookies, HTTP-only tokens, and strict access control.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>✔ Encrypted JWT tokens</li>
            <li>✔ Secure refresh token rotation</li>
            <li>✔ CSRF & XSS protection</li>
          </ul>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex justify-center"
        >
          <ShieldCheck className="h-40 w-40 text-cyan-500 opacity-80" />
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-32 mb-20 text-center"
      >
        <div
          className="
            rounded-2xl p-12
            bg-gradient-to-r from-cyan-500/10 to-purple-500/10
            border border-border
          "
        >
          <h2 className="text-3xl font-semibold">
            Ready to secure your application?
          </h2>
          <p className="text-muted-foreground mt-4">
            Start building with enterprise-grade authentication today.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button size="lg" className="mt-6 gap-2">
              Start Now <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 text-center text-muted-foreground text-sm">
        © 2026 SecureAuth • Built with React, shadcn & Framer Motion
      </footer>
    </main>
  )
}
