export function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate prose-pink max-w-none">
        <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">1. Introduction</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Welcome to Ziaa. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our 
          application and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">2. The Data We Collect</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li><strong>Profile Data</strong> includes your username, display name, and profile picture.</li>
          <li><strong>Content Data</strong> includes the photos, messages, and notes you share with your partner.</li>
          <li><strong>Usage Data</strong> includes information about how you use our application.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">3. How We Use Firebase</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          We use Google Firebase as our primary backend infrastructure. Your Profile Data and Content Data are securely 
          stored in Firebase Cloud Firestore and Firebase Cloud Storage. We utilize Firebase Authentication to securely manage 
          your access credentials. Firebase adheres to strict security standards to ensure your data is safe.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">4. Security and Access Control</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Ziaa is built on the principle of private sharing. Your content (photos, messages, profile info) is strictly access-controlled. 
          Only you and your linked partner have the cryptographic and authorization rights to read or view the content you share together. 
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">5. Your Legal Rights</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to 
          request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">6. Contact Us</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:support@ziaa.app" className="text-pink-500 hover:text-pink-600">support@ziaa.app</a>.
        </p>
      </div>
    </div>
  );
}
