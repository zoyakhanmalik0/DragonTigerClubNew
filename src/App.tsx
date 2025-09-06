import React, { useState } from 'react';
import AboutSection from './About';
import { 
  Menu, 
  X, 
  Download, 
  Play, 
  Star, 
  Users, 
  Trophy, 
  Calendar,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Zap,
  Award,
  Globe
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Dragon Tiger: Complete Beginner's Guide",
      excerpt: "Learn the basics of Dragon Tiger and start your winning journey today.",
      image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Jan 15, 2025",
      category: "Guide",
      link: "/BeginnersGuide"
    },
    {
      id: 2,
      title: "Advanced Strategies for Dragon Tiger",
      excerpt: "Master advanced techniques and increase your winning percentage.",
      image: "https://images.sigma.world/Dragon-Tiger.png",
      date: "Jan 12, 2025",
      category: "Strategy",
      link: "/AdvancedDragonTiger"
    },
    {
      id: 3,
      title: "Top 10 Dragon Tiger Tips",
      excerpt: "Expert tips to elevate your gameplay and maximize your rewards.",
      image: "https://www.protrain-solutions.co.uk/wp-content/uploads/2021/09/Top-Tips-Illustration.png",
      date: "Jan 10, 2025",
      category: "Tips",
      link: "/TopDragonTigerTips"
    },
    {
      id: 4,
      title: "Dragon Tiger Tournament Updates",
      excerpt: "Stay updated with the latest tournament news and prize pools.",
      image: "https://play-lh.googleusercontent.com/PUyED7-En4oOAvzCh2DEgYoi6j9FyUsHbdPf7RfrCRPfk_qxaLUaxtv6I5-YZyZmduxW",
      date: "Jan 8, 2025",
      category: "News",
      link: "/DragonTigerTournament"
    },
    {
      id: 5,
      title: "Mobile Gaming Experience",
      excerpt: "Discover the seamless mobile experience of Dragon Tiger Club.",
      image: "https://advertisingweek.com/wp-content/uploads/2024/04/iStock-1394308880-modified-9497895a-1508-41d4-a766-9411673b8b25-1170x600.jpg",
      date: "Jan 5, 2025",
      category: "Features",
      link: "/MobileGamingExperience"
    },
    {
      id: 6,
      title: "Success Stories from Players",
      excerpt: "Read inspiring stories from our community of Dragon Tiger champions.",
      image: "https://media.licdn.com/dms/image/v2/C5612AQG7kzuHLnCT1A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1578118213481?e=2147483647&v=beta&t=yZHZ6Da_o1Jw9je5sDl20ii7Nn4baX-i0i7AmxxZmvQ",
      date: "Jan 3, 2025",
      category: "Community",
      link: "/SuccessStories"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 rounded-xl blur-lg opacity-50 -z-10"></div>
                <div className="relative">
                  <span className="text-white font-black text-lg drop-shadow-lg">🐉</span>
                  <span className="absolute -bottom-1 -right-1 text-yellow-300 font-bold text-xs">🐅</span>
                </div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                Dragon Tiger Club
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-yellow-400 hover:text-yellow-300 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30"
                >
                  Blog
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-yellow-400 block w-full text-left px-4 py-3 text-base font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-300 hover:text-yellow-400 block w-full text-left px-4 py-3 text-base font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-yellow-400 block w-full text-left px-4 py-3 text-base font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="text-gray-300 hover:text-yellow-400 block w-full text-left px-4 py-3 text-base font-semibold rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </nav>
{/* Hero Section - Images with Stacked Red Buttons */}
<section id="home" className="pt-16 relative overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="flex flex-col gap-12 items-center">
      
      {/* First Image Section */}
      <div className="relative w-full max-w-xl">
        <img
          src="/632edcdd-a1d6-4bfb-8a71-c38dfde920b0.png"
          alt="Dragon Tiger Game"
          className="rounded-3xl w-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* First Buttons Stacked */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {[
          {
            label: "Download 3 Patti Dragon Tiger Club Official",
            link: "https://DragonTigerClub.pk?from_gameid=5801295&channelCode=100000",
          },
          {
            label: "Download 3 Patti NO.1",
            link: "https://DragonTigerClub.pk?from_gameid=5806525&channelCode=100000",
          },
          {
            label: "Download 3 Patti Crown",
            link: "https://DragonTigerClub.pk?from_gameid=5876411&channelCode=100000",
          },
          {
            label: "Download 3 Patti Blue",
            link: "https://DragonTigerClub.pk?from_gameid=5850799&channelCode=5801295",
          },
        ].map((btn, i) => (
          <a
            key={i}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 relative"
          >
            <Download size={20} />
            {btn.label}
          </a>
        ))}
      </div>

      {/* Second Image Section */}
      <div className="relative w-full max-w-xl mt-12">
        <img
          src="/01370601-027a-4f93-9470-863f8c3de3a9.png"
          alt="Second Dragon Tiger Game"
          className="rounded-3xl w-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Second Buttons */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {[
          {
            label: "Download 3 Patti Gold",
            link: "https://DragonTigerClub.pk?from_gameid=5806525&channelCode=100000",
          },
          {
            label: "Download 3 Patti Lucky",
            link: "https://DragonTigerClub.pk?from_gameid=5801295&channelCode=100000",
          },
          {
            label: "Download 3 Patti Official",
            link: "https://DragonTigerClub.pk?from_gameid=5806525&channelCode=100000",
          },
        ].map((btn, i) => (
          <a
            key={i}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 relative"
          >
            <Download size={20} />
            {btn.label}
          </a>
        ))}
      </div>

      {/* Third Image Section */}
      <div className="relative w-full max-w-xl mt-12">
        <img
          src="/8aec91bd-2fba-4e10-ba3a-4d778792f9f0.png"
          alt="Third Dragon Tiger Game"
          className="rounded-3xl w-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</section>


      <AboutSection/>

      {/* Blog Section */}
      <section id="blog" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/30 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-yellow-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-600/20 to-yellow-600/20 border border-red-500/30 rounded-full text-yellow-400 text-sm font-semibold backdrop-blur-sm">
                📚 Gaming Insights & Strategies
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Latest from Our Blog
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Master the game with expert strategies, insider tips, and exclusive insights 
              from the Dragon Tiger community's top players and gaming professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-b from-gray-800/60 to-gray-900/80 rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-gray-700/50 hover:border-yellow-500/30 backdrop-blur-sm shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                  <button className="group/btn flex items-center text-yellow-400 hover:text-yellow-300 font-bold transition-all duration-300 hover:gap-4">
                    Read More
                    <ExternalLink size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-yellow-900/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 via-red-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 rounded-xl blur-lg opacity-50 -z-10"></div>
                  <div className="relative">
                    <span className="text-white font-black text-xl drop-shadow-lg">🐉</span>
                    <span className="absolute -bottom-1 -right-1 text-yellow-300 font-bold text-sm">🐅</span>
                  </div>
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                  Dragon Tiger Club
                </span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Experience the ultimate Dragon Tiger gaming adventure with our 
                revolutionary platform. Join over 1 million players worldwide and 
                discover why we're the undisputed leader in premium card gaming entertainment.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="group w-12 h-12 bg-gray-800/80 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800/80 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Twitter size={20} />
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800/80 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800/80 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Youtube size={20} />
                </a>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">1M+</div>
                  <div className="text-xs text-gray-500">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">50+</div>
                  <div className="text-xs text-gray-500">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-yellow-400 transition-colors text-left block">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-yellow-400 transition-colors text-left block">About Us</button></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors block">How to Play</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors block">Tournaments</a></li>
                <li><button onClick={() => scrollToSection('blog')} className="text-gray-400 hover:text-yellow-400 transition-colors text-left block">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-yellow-400 transition-colors text-left block">Contact Us</button></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors block">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors block">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors block">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors block">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-16 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2025 Dragon Tiger Club. All rights reserved.
              </p>
              <p className="text-gray-400 mt-4 md:mt-0 flex items-center gap-2">
                Made with <span className="text-red-500 animate-pulse">❤️</span> for gaming enthusiasts worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
