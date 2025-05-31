import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Sunpowder
          </div>
          <div className="hidden md:flex space-x-8 text-slate-300">
            <a href="#games" className="hover:text-white transition-colors">Games</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Sun<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">powder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting immersive gaming experiences that ignite imagination and push the boundaries of interactive entertainment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25">
              <span className="relative z-10">Explore Our Games</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-full hover:bg-slate-800/50 transition-all duration-300 hover:border-slate-500">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            What We Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Game Development</h3>
              <p className="text-slate-300 leading-relaxed">
                Creating cutting-edge games with innovative mechanics and stunning visuals that captivate players worldwide.
              </p>
            </div>

            <div className="group p-8 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Design</h3>
              <p className="text-slate-300 leading-relaxed">
                Designing intuitive and engaging user experiences that make our games accessible to players of all skill levels.
              </p>
            </div>

            <div className="group p-8 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community Focus</h3>
              <p className="text-slate-300 leading-relaxed">
                Building vibrant gaming communities where players connect, compete, and create lasting memories together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of players in our immersive gaming universe.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-yellow-500/25">
            Start Your Adventure
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">Sunpowder</div>
          <p className="text-slate-400 mb-6">
            Illuminating the future of gaming, one experience at a time.
          </p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="mt-8 text-sm text-slate-500">
            © 2025 Sunpowder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
