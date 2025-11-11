export const metadata = {
  title: "Privacy Policy | Monaco Protocol",
  description:
    "How Monaco Protocol collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl p-6 lg:p-10">
      {/* Title + date */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Last Updated: 26 October 2023
        </p>
      </header>

      {/* Layout: sticky TOC + content */}
      <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-2 text-sm">
            <p className="font-semibold text-neutral-700">On this page</p>
            <ol className="mt-2 space-y-2 list-decimal list-inside text-neutral-700">
              <li>
                <a href="#intro" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#blockchain" className="hover:underline">
                  About our Services & the blockchain
                </a>
              </li>
              <li>
                <a href="#collect" className="hover:underline">
                  What we collect & why
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:underline">
                  Cookies & similar technologies
                </a>
              </li>
              <li>
                <a href="#third-party-sources" className="hover:underline">
                  Third-party & public sources
                </a>
              </li>
              <li>
                <a href="#use" className="hover:underline">
                  How we use information
                </a>
              </li>
              <li>
                <a href="#sharing" className="hover:underline">
                  Sharing with trusted parties
                </a>
              </li>
              <li>
                <a href="#ads" className="hover:underline">
                  Advertisements
                </a>
              </li>
              <li>
                <a href="#comms" className="hover:underline">
                  Communications
                </a>
              </li>
              <li>
                <a href="#transfers" className="hover:underline">
                  International transfers
                </a>
              </li>
              <li>
                <a href="#law" className="hover:underline">
                  Legal & regulatory requests
                </a>
              </li>
              <li>
                <a href="#security" className="hover:underline">
                  Security, storage & retention
                </a>
              </li>
              <li>
                <a href="#age" className="hover:underline">
                  Age restrictions
                </a>
              </li>
              <li>
                <a href="#rights" className="hover:underline">
                  Your rights & choices
                </a>
              </li>
              <li>
                <a href="#changes" className="hover:underline">
                  Changes to this policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        {/* Content */}
        <article className="prose max-w-none prose-neutral md:prose-lg leading-relaxed">
          <section id="intro" className="scroll-mt-24">
            <p>
              Please read this Privacy Notice carefully and make sure that you
              fully understand its contents.
            </p>
            <p>
              This Privacy Notice is designed to help you understand how the
              Monaco Protocol Foundation, a Gibraltar Foundation (“Monaco
              Protocol”, “we”, “us,” or “our”) collects, uses, processes, and
              shares your personal information—and how you can access, update,
              or otherwise take control of your personal information and
              exercise your privacy rights. This Privacy Notice is subject to
              our Terms of Service.
            </p>
          </section>

          <section id="blockchain" className="scroll-mt-24">
            <h2>About our Services and the blockchain</h2>
            <p>
              Our Services may facilitate interaction with decentralized
              protocols (e.g., blockchains) and third-party applications. If you
              participate in Services relating to digital assets, smart
              contracts may collect information such as your digital wallet
              address (which can be personal information in some jurisdictions)
              and store it on a public blockchain we do not control. Due to the
              immutable nature of blockchains, such information may not be
              modifiable or deletable.
            </p>
          </section>

          <section id="collect" className="scroll-mt-24">
            <h2>What information we collect, how we collect it, and why</h2>
            <p>We collect personal information directly from you when you:</p>
            <ul className="list-disc pl-6">
              <li>
                Create an account and use our Services (e.g., name, address,
                government identification).
              </li>
              <li>
                Share general geolocation so we can confirm eligibility to
                provide Services in your location.
              </li>
              <li>
                Contact support (e.g., email, phone number, voice recordings).
              </li>
              <li>
                Submit forms, subscribe to updates, or request newsletters
                (e.g., email).
              </li>
              <li>Participate in contests, surveys, or promotional events.</li>
            </ul>
            <p>
              We also collect additional information as necessary to lawfully
              deliver and improve the Services and ensure proper performance
              (details below).
            </p>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <h2>Cookies and similar technologies</h2>
            <p>
              We may track browsing behavior (links clicked, pages viewed,
              features used), IP address, location, browser/device settings,
              timestamps, app IDs, unique identifiers, and error data. We use
              this to understand site usage, improve performance (e.g., page
              load/server response), optimize configurations, and measure our
              advertising. We also use tracking to improve navigation. We do not
              sell this information.
            </p>
          </section>

          <section id="third-party-sources" className="scroll-mt-24">
            <h2>Third-party and publicly available sources</h2>
            <p>
              We may collect information from partners, service providers, and
              public sources (e.g., social media) to comply with legal
              obligations, offer Services, maintain data accuracy, enhance
              Services, assess job candidates, identify new customers, and offer
              relevant services. If you provide information about others, or
              others provide your information, we use it only for the purpose
              provided.
            </p>
          </section>

          <section id="use" className="scroll-mt-24">
            <h2>How we utilize information</h2>
            <p>
              We minimize the data we collect and limit use to: (1) where you’ve
              given permission, (2) as necessary to deliver the Services you
              use, or (3) for legal compliance or other lawful purposes.
            </p>
            <details className="group rounded-xl border bg-neutral-50 p-4 open:bg-white open:shadow-sm">
              <summary className="cursor-pointer font-medium text-neutral-800 marker:content-['']">
                More on blockchain-related use
              </summary>
              <div className="mt-4 space-y-3">
                <p>
                  Where you use aspects of our Services that are hosted on or
                  interact with the blockchain, information about your
                  interactions/transactions will be provided to the applicable
                  network and may be accessible to third parties due to the
                  nature of the protocol.
                </p>
              </div>
            </details>
            <p className="mt-4">We use collected information to:</p>
            <ul className="list-disc pl-6">
              <li>
                Deliver, improve, and optimize the operation/performance of our
                Services.
              </li>
              <li>
                Diagnose problems; identify security and compliance risks,
                errors, or enhancements.
              </li>
              <li>Detect and prevent fraud and abuse.</li>
            </ul>
            <p>
              Where possible, data used for these purposes is aggregated or
              statistical and not linked to personal information.
            </p>
          </section>

          <section id="sharing" className="scroll-mt-24">
            <h2>Sharing with trusted third parties</h2>
            <p>
              <strong>We do not sell</strong> your personal information. We do
              not allow third parties to use it for their own marketing without
              your explicit consent. We may share with affiliates, integration
              partners you choose, and service providers as needed to perform
              services on our behalf, such as:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Serving advertisements; conducting contests, promotions, or
                surveys.
              </li>
              <li>
                Analytics on Services, customer demographics, and sentiment.
              </li>
              <li>Communications (e.g., email or survey delivery) and CRM.</li>
              <li>Security, risk management, and compliance.</li>
              <li>Recruiting support and related services.</li>
            </ul>
            <p>
              These parties (and permitted subcontractors) agree not to share,
              use, or retain your personal information for any purpose other
              than providing the contracted services.
            </p>
            <p>We may also disclose information:</p>
            <ul className="list-disc pl-6">
              <li>
                In connection with corporate transactions (sale, merger,
                acquisition, liquidation, bankruptcy).
              </li>
              <li>
                To transfer assets where your information may be included among
                transferred assets.
              </li>
            </ul>
          </section>

          <section id="ads" className="scroll-mt-24">
            <h2>Advertisements</h2>
            <p>
              We may use personal information to tailor and provide content and
              advertisements as permitted by law (e.g., email campaigns or
              custom audience ads).
            </p>
          </section>

          <section id="comms" className="scroll-mt-24">
            <h2>Communicating with you</h2>
            <p>
              We (or providers acting on our behalf) may contact you regarding
              Services you use (transactional/Service communications), and—if
              you consent or where permitted—about additional services we think
              you’ll value. Channels can include:
            </p>
            <ul className="list-disc pl-6">
              <li>Email</li>
              <li>Text (SMS) messages</li>
              <li>Telephone calls</li>
              <li>Messenger apps</li>
              <li>Automated calls or texts</li>
            </ul>
            <p>
              You can update preferences or unsubscribe at any time (e.g., via
              email “unsubscribe” links or by emailing{" "}
              <a href="mailto:hello@monacoprotocol.xyz">
                hello@monacoprotocol.xyz
              </a>
              ). We are not responsible for third-party site privacy
              practices—please review their policies.
            </p>
          </section>

          <section id="transfers" className="scroll-mt-24">
            <h2>Transfer of personal information abroad</h2>
            <p>
              Monaco Protocol Foundation is registered in Gibraltar, with
              services, operations, related entities, and servers in regions
              including the BVI, Panama, EU, UK, and U.S. If you use our
              Services from another country, your data may be transferred
              internationally as necessary for contract performance, with your
              consent, for legitimate interests, or under appropriate safeguards
              (e.g., standard contractual clauses).
            </p>
          </section>

          <section id="law" className="scroll-mt-24">
            <h2>
              Compliance with legal, regulatory and law enforcement requests
            </h2>
            <p>
              We may disclose information as we deem necessary to respond to
              legal process, protect rights/property, ensure public safety, or
              prevent illegal/unethical activity. Where legally permitted, we
              may take reasonable steps to notify you of such disclosures.
            </p>
          </section>

          <section id="security" className="scroll-mt-24">
            <h2>How we secure, store and retain your data</h2>
            <p>
              We follow generally accepted standards to store and protect
              personal information (including encryption where appropriate)
              during transmission and once received. We retain information for
              as long as needed for the uses described in this Notice or as
              required by law, considering:
            </p>
            <ul className="list-disc pl-6">
              <li>
                How long we have an ongoing relationship and provide Services.
              </li>
              <li>
                Whether law requires retention (e.g., certain transaction
                records).
              </li>
              <li>
                Whether retention is advisable for legal enforcement, disputes,
                or limitations periods.
              </li>
            </ul>
            <p>
              Questions about security or retention? Contact{" "}
              <a href="mailto:hello@monacoprotocol.xyz">
                hello@monacoprotocol.xyz
              </a>
              .
            </p>
          </section>

          <section id="age" className="scroll-mt-24">
            <h2>Age restrictions</h2>
            <p>
              Our Services are for users over 18 and not directed to children
              under 13 (or as required by local law). If you believe a child has
              provided personal information, contact us (see “Contact us”). If
              we learn we collected such information in violation of law, we
              will delete it unless legally required to retain it.
            </p>
          </section>

          <section id="rights" className="scroll-mt-24">
            <h2>Your privacy rights and choices</h2>
            <p>
              Depending on applicable law, you may have rights to access,
              correct, delete, restrict, object, withdraw consent, and request
              portability of your personal information, plus additional choices
              noted below.
            </p>

            <div className="mt-4 space-y-3">
              <p>
                <strong>Do Not Track (DNT):</strong> we do not respond to DNT
                signals.
              </p>
              <p>
                <strong>Cookies & personalized ads:</strong> you can
                stop/restrict cookies via your browser/device settings. Some
                Services may not function properly without cookies. Mobile app
                choices vary by platform (e.g., iOS/Android ad settings).
              </p>
            </div>

            <p className="mt-4">
              If applicable law provides an appeal right regarding a request
              decision, you may appeal by informing us and supplying supporting
              information.
            </p>
          </section>

          <section id="changes" className="scroll-mt-24">
            <h2>Changes to this policy</h2>
            <p>
              We may modify this Privacy Policy at any time. We will post
              changes here and where appropriate elsewhere (e.g., email or a
              notice on our home page). For material changes, we will provide
              notice at least thirty (30) days prior to implementation.
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2>Contact us</h2>
            <p>
              Questions, concerns, or complaints? Email{" "}
              <a className="underline" href="mailto:hello@monacoprotocol.xyz">
                hello@monacoprotocol.xyz
              </a>
              . We aim to respond within thirty (30) days. You may also complain
              to your local Data Protection Authority.
            </p>
          </section>

          {/* Back to top */}
          <div className="mt-10">
            <a href="#intro" className="text-sm underline">
              Back to top
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
