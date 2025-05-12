
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
      <div className="container px-4 py-12 md:py-20 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 animate-fade-in">
            We're launching soon!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in">
            We're working hard to bring you something amazing. Join our waitlist 
            to be the first to know when we launch.
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
