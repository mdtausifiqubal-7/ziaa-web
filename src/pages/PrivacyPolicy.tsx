export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-margin-mobile md:px-container-padding py-24">
      <div className="glass-card p-8 md:p-12 rounded-[3rem]">
        <h1 className="font-display-md text-display-md text-white mb-6">Privacy Policy</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">1. Introduction</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Welcome to Ziaa. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our 
              application and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">2. The Data We Collect</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-on-surface-variant space-y-2 font-body-md text-body-md">
              <li><strong>Profile Data</strong> includes your username, display name, and profile picture.</li>
              <li><strong>Content Data</strong> includes the photos, messages, and notes you share with your partner.</li>
              <li><strong>Usage Data</strong> includes information about how you use our application.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">3. Security and Access Control</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Ziaa is built on the principle of private sharing. Your content (photos, messages, profile info) is strictly access-controlled. 
              Only you and your linked partner have the cryptographic and authorization rights to read or view the content you share together. 
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
            </p>
          </section>

          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">4. Your Legal Rights</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to 
              request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
