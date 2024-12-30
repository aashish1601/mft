import React, { useState, useEffect } from 'react';
import { 
  Rocket, Users, BookOpen, Award, Briefcase, Globe, Menu, X,
  LightbulbIcon, StarIcon, TrophyIcon, Clock, CalendarCheck, ArrowRight
} from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button 
    className={`rounded-lg px-4 py-2 font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  const heroImages = [
    { src: "/images/rcbustudent.png", alt: "Startup Success" },
    { src: "/images/stundentinnovation.png", alt: "Innovation" },
    { src: "/images/collabration.png", alt: "Collaboration" }
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-01-26');
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  // Mobile-optimized components
  const TimelineItem = ({ icon, title, date, current, description }) => (
    <div className="flex gap-4 sm:gap-6 items-start group">
      <div className={`rounded-full p-2 sm:p-3 transition-all duration-300 ${
        current ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 group-hover:bg-purple-500 group-hover:text-white'
      }`}>
        {icon}
      </div>
      <div className="transform transition-all duration-300 group-hover:translate-x-2">
        <h3 className="text-lg sm:text-xl font-bold mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-xs sm:text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  const CountdownBox = ({ label, value }) => (
    <div className="bg-white/20 backdrop-blur-lg rounded-xl p-2 sm:p-4 transform hover:scale-105 transition-transform duration-300">
      <div className="text-xl sm:text-3xl font-bold mb-1">{String(value).padStart(2, '0')}</div>
      <div className="text-xs sm:text-sm font-medium">{label}</div>
    </div>
  );

    return (
      <div className="min-h-screen bg-white">
      {/* Mobile-optimized header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex justify-between items-center">
          <div className="flex-1">
  <div className="flex items-center">
    <div className="text-stone-800 font-bold text-lg sm:text-xl">
      <span className="bg-stone-100 text-stone-800 px-2 py-1 rounded">MFT</span>
      <span className="ml-2 text-xs">Mumbai's Future Tycoons</span>
    </div>
  </div>
  <div className="flex items-center text-stone-600 text-xs mt-1">
    <span>by Rotaract Club Of Bombay Uptown</span>
    <img 
      src="/images/rcbuflag.png" 
      alt="RCBU Flag" 
      className="h-4 w-4 ml-2 object-contain"
    />
  </div>
</div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-stone-800 md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="hidden md:block">
              <button className="bg-stone-800 text-white px-4 py-2 rounded-full text-sm">
                Register
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pb-3">
              <button className="w-full bg-stone-800 text-white px-4 py-2 rounded-full text-sm">
                Register
              </button>
            </div>
          )}
        </div>
      </header>

        {/* Mobile-optimized sections */}
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="px-4 py-8 bg-gradient-to-br from-stone-50 to-[#F5E6D3]">
          <div className="text-center space-y-4">
            <h1 className="text-2xl sm:text-4xl font-bold">Mumbai's Future Tycoons</h1>
            <p className="text-sm sm:text-lg">First-ever entrepreneurship search & mentorship platform</p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 my-6">
              {heroImages.map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-bold">
              Register Now
            </button>
          </div>
        </section>

        {/* What is MFT Section - Enhanced with SDG focus */}
  <section className="py-12 sm:py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 text-stone-800">
          <span className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
            What is MFT?
          </span>
        </h2>

        {/* Highlight Box */}
        <div className="bg-gradient-to-br from-stone-50 to-[#F5E6D3] p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
          <p className="text-lg sm:text-2xl font-semibold text-center text-stone-800 mb-4">
            Unleashing Young Innovators for a Sustainable Tomorrow!
          </p>
          <div className="w-16 h-1 bg-stone-800 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-stone-700 text-center">
            Mumbai's Future Tycoons (MFT) is not just a competition - it's a launch pad for young changemakers!
          </p>
        </div>

        {/* Main Content with Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-stone-800 mb-3">🎯 The Mission</h3>
              <p className="text-stone-700">
                Empowering young minds aged 10-16 to tackle global challenges through innovative entrepreneurship. Every idea that aligns with UNICEF's Sustainable Development Goals has the power to create lasting impact!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-stone-800 mb-3">🌟 Why Participate?</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• Showcase your innovative ideas</li>
                <li>• Learn about sustainable development</li>
                <li>• Get expert mentorship</li>
                <li>• Win exciting opportunities</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-stone-800 mb-3">SDG Focus</h3>
              <p className="text-stone-700">
                Your ideas should address one or more of UNICEF's 14 Sustainable Development Goals - from climate action to quality education, from zero hunger to sustainable cities. Dream big, think sustainable!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-stone-800 mb-3"> Open Platform</h3>
              <p className="text-stone-700">
                Open to all students aged 10-16 from any school, MFT is a FREE platform where every idea counts! Register your innovative concepts throughout the year and begin your entrepreneurial journey.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl text-stone-600 italic mb-6">
            "Today's young innovators, tomorrow's sustainable leaders"
          </p>
          
        </div>
      </div>
    </div>
  </section>
  <section className="py-12 sm:py-16 bg-gradient-to-br from-stone-100 to-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 text-stone-800">
          Your MFT Journey 🚀
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Step 1: Registration */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-stone-100 p-4 rounded-full">
                  <LightbulbIcon size={32} className="text-stone-800" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Step 1: Submit Your Big Idea! 💡</h3>
                <p className="text-stone-600 mb-2">Register and share your innovative idea that could change the world!</p>
                <p className="text-stone-500 font-semibold">Deadline: January 26th, 2025</p>
              </div>
            </div>

            {/* Step 2: Intro Session */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-stone-100 p-4 rounded-full">
                  <BookOpen size={32} className="text-stone-800" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Step 2: Entrepreneurship 101 🎓</h3>
                <p className="text-stone-600 mb-2">Join our fun-filled intro session to learn the basics of entrepreneurship!</p>
                <p className="text-stone-500 font-semibold">Date: January 12th, 2025</p>
              </div>
            </div>

            {/* Step 3: Selection */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-stone-100 p-4 rounded-full">
                  <StarIcon size={32} className="text-stone-800" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Step 3: Top 15 Selection ⭐</h3>
                <p className="text-stone-600 mb-2">The most innovative ideas will be selected for the final round!</p>
                <p className="text-stone-500 font-semibold">Announcement: January 26th, 2025</p>
              </div>
            </div>

            {/* Step 4: Final Pitch */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 transform hover:-translate-y-1">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-stone-100 p-4 rounded-full">
                  <TrophyIcon size={32} className="text-stone-800" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Step 4: The Grand Finale 🏆</h3>
                <p className="text-stone-600 mb-2">Top 15 innovators pitch their ideas to business experts!</p>
                <p className="text-stone-500 font-semibold">Date: February 2nd, 2025</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto p-6 space-y-12">
          <div className="relative">
            <div className="absolute left-8 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded animate-pulse"></div>
            
            <div className="space-y-12">
              <TimelineItem
                icon={<CalendarCheck className="animate-bounce" size={24} />}
                title="Registration Opens"
                date="December 30, 2024"
                current
                description="Start your journey here!"
              />
              
              <TimelineItem
                icon={<Clock className="animate-spin-slow" size={24} />}
                title="Registration Ends"
                date="January 26, 2025"
                description="Register Fast Before Deadline"
              />
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center animate-pulse">Time Remaining</h2>
            <div className="grid grid-cols-4 gap-6 text-center mb-8">
              <CountdownBox label="Days" value={timeLeft.days} />
              <CountdownBox label="Hours" value={timeLeft.hours} />
              <CountdownBox label="Minutes" value={timeLeft.minutes} />
              <CountdownBox label="Seconds" value={timeLeft.seconds} />
            </div>
            <Button 
              className="w-full py-6 bg-white text-blue-600 hover:bg-blue-50 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Register Now 
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <p className="text-center mt-4 text-lg font-medium animate-pulse">
              Don't miss out - Register fast!
            </p>
          </Card>
        </div>
      </section>

        {/* Organizer Section - Improved mobile layout */}
        <section className="py-12 sm:py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-stone-800">Organized By</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-stone-800">Rotaract Club Of Bombay Uptown</h3>
                  <p className="text-base sm:text-lg text-stone-700 mb-6">
                    Proudly organized and managed by the Rotaract Club Of Bombay Uptown, 
                    bringing innovation and entrepreneurship opportunities to young minds.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/rcbuflag.png" 
                    alt="Rotaract Club Of Bombay Uptown Flag" 
                    className="rounded-lg shadow-md max-w-full md:max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-stone-800 text-white py-6 sm:py-8">
          <div className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-3 text-[#F5E6D3]">About MFT</h3>
                <p className="text-xs sm:text-sm text-stone-200">Empowering young innovators</p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-4 text-[#F5E6D3]">Resources</h3>
                <ul className="space-y-2 text-sm sm:text-base text-stone-200">
                  <li className="hover:text-white transition">FAQs</li>
                  <li className="hover:text-white transition">Blog</li>
                  <li className="hover:text-white transition">Terms of Service</li>
                  <li className="hover:text-white transition">Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-4 text-[#F5E6D3]">Contact Us</h3>
                <p className="text-sm sm:text-base text-stone-200">Email: mhaskeaashish16@gmail.com</p>
                <p className="text-sm sm:text-base text-stone-200">Phone Number: +91 8591700819</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-stone-700 text-center text-xs sm:text-sm text-stone-200">
              <p>&copy; 2024 Mumbai's Future Tycoons</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

  
export default App;
  