import { Link, Outlet } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-pink-200">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all">
              <Heart size={18} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Ziaa</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-pink-500" />
              <span className="font-semibold text-slate-700">Ziaa App</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-pink-600 transition-colors">Terms of Service</Link>
              <a href="mailto:support@ziaa.app" className="hover:text-pink-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center md:text-left mt-8 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Ziaa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
