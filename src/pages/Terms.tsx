export function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-slate prose-pink max-w-none">
        <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">1. Agreement to Terms</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          By accessing or using Ziaa, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">2. Account Registration</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          You must provide accurate, complete, and current information when creating an account. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We strongly recommend using a secure password.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">3. Acceptable Use</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">
          You agree not to use the Service:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate Ziaa, a Ziaa employee, another user, or any other person or entity.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">4. User Content</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness. Ziaa claims no ownership rights over the content you upload.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">5. Termination</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">6. Contact Us</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          If you have any questions about these Terms, please contact us at <a href="mailto:support@ziaa.app" className="text-pink-500 hover:text-pink-600">support@ziaa.app</a>.
        </p>
      </div>
    </div>
  );
}
