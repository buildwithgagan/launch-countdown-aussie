
import { useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "Coming Soon | Join Our Waitlist";
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-subtle-gradient">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      <div className="container px-4 py-12 md:py-20 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 animate-fade-in">
            We're launching soon!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in">
            Where Innovation Meets Finance! Join our waitlist 
            to be the first to experience our revolutionary digital platform.
          </p>
          
          <div className="w-full my-8 md:my-12">
            <CountdownTimer />
          </div>
          
          <WaitlistForm />
          
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in">
            No spam, just important updates about our launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
