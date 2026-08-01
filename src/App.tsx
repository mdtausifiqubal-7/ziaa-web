import ThreeJSBackground from './components/ThreeJSBackground';

export default function App() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden text-on-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/10 dark:bg-surface/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/20 ease-out duration-300">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-container-padding flex justify-between items-center h-20 w-full">
          <a className="flex items-center gap-2 group" href="#">
            <img 
              alt="Ziaa Logo" 
              className="w-10 h-10 rounded-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApweFGSFG79VnipOCn8nN46V9X__vW6DsYcLQmvm6yZCYCM39pqfYxGXQDM6A8bf1AgVBcQTkwqgtyq7zWgbCbFVJrs-AbMIRk9UH6obuH5gnTfF_YnnmmZdfeIAzwevRLlnFC8mqV26uuMXXKspjjgEY9VoUSypE3svaGO8kQt9rneSDErU9dsZM4oplsE0Yqh3ivgBlNhb02p84DHxkP3BD0nrmc_hRyt81qcYQxIwgrItPR-5bVMQ"
            />
            <span className="font-display-md text-display-md font-bold text-primary">Ziaa</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#home">Home</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors" href="#screenshots">Screenshots</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass-card hover:opacity-80 transition-opacity text-on-surface">
              <span className="material-symbols-outlined">contrast</span>
            </button>
            <a className="px-6 py-2 rounded-full romantic-glow text-white font-label-lg text-label-lg hover:opacity-90 transition-opacity" href="#download">
              Download
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="w-full h-full object-cover" style={{ display: 'block' }}>
              <ThreeJSBackground />
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-container-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-lg text-label-lg text-primary">Our Private World</span>
              </div>
              <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] text-white mb-6 animate-fade-in-up delay-100">
                Your Private World <span className="text-primary">Together</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                Chat, Call, Share Memories, Celebrate Every Moment — all in one beautifully designed app, secured just for the two of you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-300">
                <a className="w-full sm:w-auto px-8 py-4 rounded-xl romantic-glow text-white font-title-lg text-title-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform" href="#download">
                  <span className="material-symbols-outlined">android</span>
                  Download APK
                </a>
                <a className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-on-surface font-title-lg text-title-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors" href="#features">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative h-[600px] hidden lg:block animate-fade-in-up delay-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[600px] rounded-[3rem] border-8 border-surface-container-high bg-surface-container overflow-hidden shadow-2xl relative z-10">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="A highly detailed close-up of a modern, bezel-less smartphone screen displaying a beautiful, minimalist chat interface with soft pink and purple glassmorphic message bubbles on a deep midnight blue background. The UI feels intimate, premium, and romantic, with a soft depth of field." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcyDOzJxbtFlT46kLi5zMjyu_8j4R9plCvE7LrX8VIuwUgdtf7fy-7IPZzp02g7B81h6uq7e07H3uqRzMS_6LC8qgFoDaTQW0q4gYmwcNWT3G-sAeFgQxHWZPoQve2nUP9ORQOsXZRB2csXiW6uonHhY_MR82jwHPC8FYNo-nww33JyWsxAKJMPowrAWZ-ubFRiQKENmcQVDPuEyzQRdBPdVHUw5PvtXYyozavS0Yh9D5ghlickXSQqQ"
                  />
                </div>
                {/* Floating Element 1 */}
                <div className="absolute -left-12 top-20 glass-card p-4 rounded-2xl animate-float z-20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface">Anniversary</p>
                    <p className="font-title-lg text-title-lg text-white">12 Days</p>
                  </div>
                </div>
                {/* Floating Element 2 */}
                <div className="absolute -right-8 bottom-32 glass-card p-4 rounded-2xl animate-float-delayed z-20">
                  <p className="font-body-md text-body-md text-on-surface">"I love you! 💖"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative" id="features">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-container-padding relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display-md text-display-md text-white mb-4">Everything You Need</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Thoughtfully crafted features designed specifically for couples to stay connected.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Cards */}
              <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">chat</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-white mb-2">Real-time Chat</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Instant messaging with read receipts and typing indicators.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">photo_library</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-white mb-2">Shared Memories</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A private gallery for all your photos and videos.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-tertiary text-2xl">timer</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-white mb-2">Relationship Counter</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Track exactly how long you've been together.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-error text-2xl">event</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-white mb-2">Special Dates</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Never miss an anniversary or birthday again.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-24 relative" id="download">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-container-padding text-center">
            <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <div className="relative z-10">
                <h2 className="font-display-md text-display-md text-white mb-4">Start Your Journey Today</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Download Ziaa and create your private world.</p>
                <div className="flex flex-col items-center gap-4">
                  <a className="px-10 py-5 rounded-2xl romantic-glow text-white font-title-lg text-title-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform" href="#">
                    <span className="material-symbols-outlined text-3xl">download</span>
                    Download Ziaa
                  </a>
                  <p className="font-label-lg text-label-lg text-on-surface-variant/70">Version 1.0 • 45MB • Requires Android 8.0+</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest py-12 border-t border-white/5 ease-in-out duration-200">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-container-padding flex flex-col md:flex-row justify-between items-center gap-gutter">
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg text-primary">Ziaa</span>
          </div>
          <p className="font-label-lg text-label-lg text-tertiary">
            © 2024 Ziaa. Crafted by Ayan.
          </p>
          <div className="flex items-center gap-6">
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
