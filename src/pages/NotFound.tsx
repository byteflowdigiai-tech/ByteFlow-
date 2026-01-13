import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <SEO
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to ByteFlow homepage to explore our IT solutions and digital marketing services."
        noindex={true}
        canonicalUrl="https://www.byteflowdigiai.com/404"
      />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-8xl md:text-9xl font-bold text-gradient-mixed mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-royal to-green-emerald">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
