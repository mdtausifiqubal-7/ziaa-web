import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden text-on-surface">
      <header className="fixed top-0 w-full z-50 bg-surface/10 dark:bg-surface/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/20 ease-out duration-300">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-container-padding flex justify-between items-center h-20 w-full">
          <Link className="flex items-center gap-2 group" to="/">
            <img 
              alt="Ziaa Logo" 
              className="w-10 h-10 rounded-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApweFGSFG79VnipOCn8nN46V9X__vW6DsYcLQmvm6yZCYCM39pqfYxGXQDM6A8bf1AgVBcQTkwqgtyq7zWgbCbFVJrs-AbMIRk9UH6obuH5gnTfF_YnnmmZdfeIAzwevRLlnFC8mqV26uuMXXKspjjgEY9VoUSypE3svaGO8kQt9rneSDErU9dsZM4oplsE0Yqh3ivgBlNhb02p84DHxkP3BD0nrmc_hRyt81qcYQxIwgrItPR-5bVMQ"
            />
            <span className="font-display-md text-display-md font-bold text-primary">Ziaa</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="/#home">Home</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors" href="/#features">Features</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors" href="/#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass-card hover:opacity-80 transition-opacity text-on-surface">
              <span className="material-symbols-outlined">contrast</span>
            </button>
            <a className="px-6 py-2 rounded-full romantic-glow text-white font-label-lg text-label-lg hover:opacity-90 transition-opacity" href="/#download">
              Download
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest py-12 border-t border-white/5 ease-in-out duration-200">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-container-padding flex flex-col md:flex-row justify-between items-center gap-gutter">
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg text-primary">Ziaa</span>
          </div>
          <p className="font-label-lg text-label-lg text-tertiary">
            © 2024 Ziaa. Crafted by Ayan.
          </p>
          <div className="flex items-center gap-6">
            <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
            <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
            <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
