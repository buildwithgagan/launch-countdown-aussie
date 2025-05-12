
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
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <Card className="border border-primary/20 bg-black/50 backdrop-blur-md shadow-2xl hover:shadow-primary/10 transition-all duration-500">
        <CardContent className="pt-6 px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white font-fustat">Join Our Waitlist</h3>
              <p className="text-sm text-muted-foreground">Be the first to get access when we launch</p>
              
              <div className="relative mt-2 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-md blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-black/70 border border-primary/30 focus:border-primary form-glow text-white rounded-md"
                    disabled={isSubmitting}
                    required
                  />
                </div>
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
              className="w-full h-12 bg-gradient-to-r from-[#F4FEF8] to-[#1BF472] text-black font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] disabled:hover:scale-100 disabled:hover:shadow-none animate-fade-in hover:animate-glow rounded-md"
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

          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              No spam, just important updates about our launch.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaitlistForm;
