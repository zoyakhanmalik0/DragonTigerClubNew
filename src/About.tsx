import { useEffect, useState } from "react";
import { Users, Star, Trophy, Shield, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [players, setPlayers] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (inView) {
      // Animate Players
      let start = 0;
      const endPlayers = 1000000; // 1M
      const duration = 2000; // 2 seconds
      const increment = endPlayers / (duration / 30);
      const interval = setInterval(() => {
        start += increment;
        if (start >= endPlayers) {
          start = endPlayers;
          clearInterval(interval);
        }
        setPlayers(Math.floor(start));
      }, 30);

      // Animate Rating
      let rStart = 0;
      const endRating = 4.8;
      const rIncrement = endRating / (duration / 30);
      const ratingInterval = setInterval(() => {
        rStart += rIncrement;
        if (rStart >= endRating) {
          rStart = endRating;
          clearInterval(ratingInterval);
        }
        setRating(parseFloat(rStart.toFixed(1)));
      }, 30);
    }
  }, [inView]);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-red-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-red-600/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://cosettepaneque.com/wp-content/uploads/2022/10/Tarot-readings-02.png"
              alt="Gaming Experience"
              className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-red-600/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold backdrop-blur-sm">
                ⚡ Premium Gaming Experience
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Why Choose Dragon Tiger Club?
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Dragon Tiger Club delivers the most authentic and exhilarating card game experience 
              with cutting-edge technology, provably fair gameplay, and life-changing rewards. 
              Join our elite community of skilled players and discover why we're the global leader 
              in premium card gaming.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{players.toLocaleString()}+ Players</h3>
                  <p className="text-gray-400">Global Community</p>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{rating}★ Rating</h3>
                  <p className="text-gray-400">App Stores</p>
                </div>
              </div>

              {/* Other cards remain unchanged */}
              {/* ...Trophy and Shield cards... */}
            </div>

            <div className="mt-10">
              <button className="group bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-500 hover:to-red-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl relative">
                <Award size={20} />
                Start Playing Now
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
