export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-margin-mobile md:px-container-padding py-24">
      <div className="glass-card p-8 md:p-12 rounded-[3rem]">
        <h1 className="font-display-md text-display-md text-white mb-6">Terms of Service</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              By accessing and using Ziaa, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">2. User Accounts</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </section>

          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">3. Content</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. 
              You are responsible for the content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
          </section>

          <section>
            <h2 className="font-title-lg text-title-lg text-primary mb-4">4. Termination</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. 
              Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
