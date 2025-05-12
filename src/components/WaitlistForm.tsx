
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(true);

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
    <div className="w-full max-w-md mx-auto mt-8 animate-fade-in">
      <Card className="border border-primary/20 bg-black/40 backdrop-blur-sm shadow-lg">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 flex-grow h-12 px-4 bg-[#121212] border border-primary/30 focus:border-primary form-glow text-white animate-fade-in transition-all duration-300"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <div className="flex items-center space-x-2 ml-1">
                <Checkbox 
                  id="subscribe" 
                  checked={subscribeToUpdates}
                  onCheckedChange={(checked) => setSubscribeToUpdates(checked as boolean)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label 
                  htmlFor="subscribe" 
                  className="text-sm text-muted-foreground cursor-pointer hover:text-white transition-colors"
                >
                  Send me product updates and news
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 px-6 bg-gradient-to-r from-[#F4FEF8] to-[#1BF472] text-black font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] disabled:hover:scale-100 disabled:hover:shadow-none animate-fade-in hover:animate-glow"
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
          </form>
        </CardContent>
      </Card>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground animate-fade-in animate-[fadeIn_1s_ease-out_forwards_0.6s] opacity-0">
          No spam, just important updates about our launch.
        </p>
      </div>
    </div>
  );
};

export default WaitlistForm;
