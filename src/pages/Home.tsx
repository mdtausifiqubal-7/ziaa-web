import { Lock, Camera, MessageCircleHeart, Download, Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Ziaa completely private?",
      answer: "Yes. Ziaa is built on end-to-end encryption principles. Only you and your linked partner have the cryptographic keys to view your messages and photos."
    },
    {
      question: "Do both partners need to download the app?",
      answer: "Yes, Ziaa is designed for two people. One partner will create a shared space and invite the other using a secure invite code."
    },
    {
      question: "Is the app free to use?",
      answer: "Ziaa is free to download and use for all basic features including messaging and standard photo sharing."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-white -z-10" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Cherish your moments, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
              privately together.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Ziaa is a secure, elegant memory and relationship app designed exclusively for you and your partner.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-200">
              <Download size={20} />
              App Store
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 duration-200">
              <Download size={20} />
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Everything you need</h2>
            <p className="mt-4 text-slate-500">Designed with love, built for privacy.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-pink-100 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Total Privacy</h3>
              <p className="text-slate-600 leading-relaxed">
                Your memories are securely stored and encrypted. Only you and your partner have access.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-pink-100 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Shared Gallery</h3>
              <p className="text-slate-600 leading-relaxed">
                A beautiful, infinite canvas for your favorite photos, beautifully organized in high resolution.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-pink-100 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                <MessageCircleHeart size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Intimate Notes</h3>
              <p className="text-slate-600 leading-relaxed">
                Leave sweet messages, reminders, and daily check-ins that make the distance feel smaller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
            <p className="mt-4 text-slate-500">Three simple steps to your private space.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Download Ziaa</h3>
              <p className="text-slate-600">Get the app on your iOS or Android device and create your account.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Invite your partner</h3>
              <p className="text-slate-600">Send your unique invite code to your partner to securely link your accounts.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Start sharing</h3>
              <p className="text-slate-600">Begin building your private timeline of memories, notes, and photos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Loved by couples</h2>
            <p className="mt-4 text-slate-500">See what others are saying about Ziaa.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-pink-50 border border-pink-100">
              <div className="flex gap-1 text-pink-500 mb-4">
                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg text-slate-800 font-medium mb-6">"Ziaa has been amazing for our long-distance relationship. Having a private timeline just for us makes the distance feel so much smaller."</p>
              <p className="text-slate-600 font-semibold">— Sarah & James</p>
            </div>
            <div className="p-8 rounded-3xl bg-rose-50 border border-rose-100">
              <div className="flex gap-1 text-pink-500 mb-4">
                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg text-slate-800 font-medium mb-6">"I love that we don't have to share our special moments on social media anymore. Ziaa is our own little digital home."</p>
              <p className="text-slate-600 font-semibold">— Emma & Liam</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-pink-500 to-rose-400 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to create your private space?</h2>
          <p className="text-pink-100 text-xl mb-10">Join thousands of couples cherishing their moments on Ziaa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-600 rounded-2xl font-semibold hover:bg-pink-50 transition-colors shadow-lg">
              <Download size={20} />
              Download on App Store
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-2xl font-semibold hover:bg-white/10 transition-colors">
              <Download size={20} />
              Get it on Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
