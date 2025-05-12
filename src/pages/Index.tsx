
import { useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import WaitlistForm from "@/components/WaitlistForm";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "Coming Soon | Join Our Waitlist";
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b327ae7f-abd4-4ba2-b4ac-6b66fbf108bd.png" 
          alt="Server Room Background" 
          className="w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMTAwLDEwMCwxMDAsMC4wNSkiIGQ9Ik0yOS41IDMwYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWm0wLTE4YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWm0wIDM2YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWk0xMS41IDMwYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWm0wLTE4YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWm0wIDM2YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWk00Ny41IDMwYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWm0wLTE4YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWm0wIDM2YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      {/* Gradient overlays with enhanced animation */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-blue-500/5 blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
      
      <div className="container max-h-screen px-4 py-6 mx-auto relative z-10 overflow-y-auto">
        {/* Light beam effect behind logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-primary/80 to-transparent blur-lg"></div>
        
        <div className="flex flex-col items-center justify-center text-center h-full">
          <div className="mb-4 sm:mb-6 animate-fade-in hover:scale-105 transition-transform duration-500">
            <img 
              src="/lovable-uploads/bd1abce8-ef88-41d9-a68c-a0d3dc79f96f.png" 
              alt="Aussivo Logo" 
              className="h-12 md:h-16 mx-auto"
            />
          </div>
          
          <h1 className="font-fustat text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#F4FEF8] to-[#1BF472] animate-pulse" style={{animationDuration: '3s'}}>
            We're launching soon!
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-6 animate-fade-in animate-[fadeIn_0.8s_ease-out_forwards_0.3s] opacity-0">
            Powering the Future of Cloud Infrastructure! Join our waitlist 
            to be the first to experience seamless, scalable, and secure cloud solutions.
          </p>
          
          <div className="w-full my-4 sm:my-6">
            <CountdownTimer />
          </div>
          
          <div className="w-full sm:w-auto sm:min-w-[320px]">
            <WaitlistForm />
          </div>
          
          {/* Social Media Links */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center space-x-6 animate-fade-in animate-[fadeIn_1s_ease-out_forwards_0.8s] opacity-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform" aria-label="X">
              <X size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 opacity-70 animate-fade-in animate-[fadeIn_1s_ease-out_forwards_0.9s] opacity-0">
            Follow us for updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
