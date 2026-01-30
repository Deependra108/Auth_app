import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail, ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="bg-card/80 backdrop-blur border border-border">
          {/* HEADER */}
          <CardHeader className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="
                text-3xl font-bold
                bg-gradient-to-r from-cyan-500 to-purple-600
                bg-clip-text text-transparent
              "
            >
              Welcome Back
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-sm text-muted-foreground"
            >
              Sign in to continue to your secure account
            </motion.p>
          </CardHeader>

          {/* CONTENT */}
          <CardContent className="space-y-6">
            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="space-y-2"
            >
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </motion.div>

            {/* PASSWORD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="space-y-2"
            >
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </motion.div>

            {/* SIGN IN */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <Button className="w-full gap-2">
                Sign In <ArrowRight size={16} />
              </Button>
            </motion.div>

            {/* OR */}
            <div
              className="
  relative text-center text-xs text-muted-foreground
  before:absolute before:left-0 before:top-1/2
  before:h-px before:w-[45%] before:bg-border
  after:absolute after:right-0 after:top-1/2
  after:h-px after:w-[45%] after:bg-border" >
              OR
            </div>

            {/* GOOGLE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button variant="outline" className="w-full gap-2">
                <Chrome size={18} />
                Continue with Google
              </Button>
            </motion.div>

            {/* GITHUB */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button variant="outline" className="w-full gap-2">
                <Github size={18} />
                Continue with GitHub
              </Button>
            </motion.div>

            {/* FOOTER */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-center text-sm text-muted-foreground"
            >
              Don’t have an account?{" "}
              <NavLink to={'/signup'}>
                <span className="text-cyan-500 cursor-pointer hover:underline">
                Sign up
              </span>
              </NavLink>
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}

export default Login;
