
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
          className="flex-grow h-12 px-4 bg-[#121212] border border-primary/30 focus:border-primary form-glow text-white animate-fade-in animate-glow focus:animate-none transition-all duration-300"
          disabled={isSubmitting}
          required
        />
        <Button 
          type="submit" 
          className="h-12 px-6 bg-gradient-to-r from-[#F4FEF8] to-[#1BF472] text-black font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] disabled:hover:scale-100 disabled:hover:shadow-none animate-fade-in hover:animate-glow"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
