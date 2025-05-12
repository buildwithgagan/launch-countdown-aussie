
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8 animate-fade-in">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow h-12 px-4 bg-[#121212] border border-primary/30 focus:border-primary form-glow text-white"
          disabled={isSubmitting}
          required
        />
        <Button 
          type="submit" 
          className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors glow-effect"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
