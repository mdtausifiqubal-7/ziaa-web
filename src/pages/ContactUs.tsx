export function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-margin-mobile md:px-container-padding py-24">
      <div className="glass-card p-8 md:p-12 rounded-[3rem] text-center">
        <h1 className="font-display-md text-display-md text-white mb-6">Contact Us</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-surface/30 p-8 rounded-2xl border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">mail</span>
            </div>
            <h2 className="font-title-lg text-title-lg text-white mb-2">Email Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">For general inquiries and support.</p>
            <a href="mailto:support@ziaa.app" className="font-label-lg text-label-lg text-primary hover:text-white transition-colors">support@ziaa.app</a>
          </div>

          <div className="bg-surface/30 p-8 rounded-2xl border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">chat</span>
            </div>
            <h2 className="font-title-lg text-title-lg text-white mb-2">Social Media</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Follow us for updates and news.</p>
            <div className="flex gap-4">
              <a href="#" className="font-label-lg text-label-lg text-secondary hover:text-white transition-colors">Twitter</a>
              <a href="#" className="font-label-lg text-label-lg text-secondary hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
