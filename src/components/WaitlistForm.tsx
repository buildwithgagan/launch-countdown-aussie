
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

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
    <div className="w-full">
      <div className="w-full py-6 px-4 md:px-6 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl md:text-2xl font-medium text-white font-fustat mb-2">Join Our Waitlist</h3>
            <p className="text-sm md:text-base text-muted-foreground">Be the first to get access when we launch</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
            <div className="relative flex-grow group w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-md blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative flex items-center w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-14 text-base md:text-lg bg-black/70 border border-primary/30 focus:border-primary form-glow text-white rounded-md w-full"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="h-14 text-sm md:text-base bg-gradient-to-r from-[#F4FEF8] to-[#1BF472] text-black font-medium transition-colors duration-300 hover:brightness-105 rounded-md w-full md:w-auto md:px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? 
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining...
                </span> 
                : "Join Waitlist"
              }
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
