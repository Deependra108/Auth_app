import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/services/AuthService";

function Signup() {
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // text input, email, password, textarea, number, checkbox, radio, select
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);

    // validation
    if (!data.name.trim()) {
      toast.error
      return;
    }
    if (!data.email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!data.password.trim()) {
      toast.error("Password is required");
      return;
    }

    // If validation passes, proceed with registration logic
    setLoading(true);

    // form submit for registration
    try {
      const result =await registerUser(data);
      console.log(result);
      toast.success("Registration successful! Please log in.");
      setLoading(false);

      setData({
        name: "",
        email: "",
        password: "",
      });
      // navigate to login page
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      setLoading(false);
    }
  };

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
              Create Account
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-sm text-muted-foreground"
            >
              Sign up to start securing your application
            </motion.p>
          </CardHeader>

          {/* CONTENT */}
          <CardContent className="space-y-6">

            <form onSubmit={handleFormSubmit} className="space-y-6">

              {/* NAME */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-2"
              >
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={data.name}
                  placeholder="John Doe"
                  onChange={handleInputChange}
                />
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="space-y-2"
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                />
              </motion.div>

              {/* PASSWORD */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="space-y-2"
              >
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                />
              </motion.div>

              {/* SIGN UP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <Button className="w-full gap-2">
                  Sign Up <ArrowRight size={16} />
                </Button>
              </motion.div>
            </form>

            {/* OR */}
            <div
              className="
                relative text-center text-xs text-muted-foreground
                before:absolute before:left-0 before:top-1/2
                before:h-px before:w-[45%] before:bg-border
                after:absolute after:right-0 after:top-1/2
                after:h-px after:w-[45%] after:bg-border
              "
            >
              OR
            </div>

            {/* GOOGLE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button variant="outline" className="w-full gap-2">
                <Mail size={18} />
                Continue with Google
              </Button>
            </motion.div>

            {/* GITHUB */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
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
              transition={{ delay: 0.95 }}
              className="text-center text-sm text-muted-foreground"
            >
              Already have an account?{" "}
              <NavLink to={"/login"}>
                <span className="text-cyan-500 cursor-pointer hover:underline">
                  Sign in
                </span>
              </NavLink>
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}

export default Signup;
