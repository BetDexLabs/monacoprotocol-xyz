export const metadata = {
  title: "Terms & Conditions | Monaco Protocol",
  description: "Terms governing use of Monaco Protocol sites and services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6 lg:p-10">
      {/* Title + date */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Last Updated: 24 October 2023
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
                <a href="#scope" className="hover:underline">
                  Scope of Service
                </a>
              </li>
              <li>
                <a href="#changes" className="hover:underline">
                  Changes
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:underline">
                  Who May Use the Service
                </a>
              </li>
              <li>
                <a href="#license" className="hover:underline">
                  Scope of License
                </a>
              </li>
              <li>
                <a href="#termination" className="hover:underline">
                  Termination
                </a>
              </li>
              <li>
                <a href="#prohibited" className="hover:underline">
                  Prohibited Activities
                </a>
              </li>
              <li>
                <a href="#ip" className="hover:underline">
                  Intellectual Property
                </a>
              </li>
              <li>
                <a href="#disputes" className="hover:underline">
                  Dispute Resolution
                </a>
              </li>
              <li>
                <a href="#law" className="hover:underline">
                  Governing Law & Venue
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:underline">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#links" className="hover:underline">
                  Third-Party Links
                </a>
              </li>
              <li>
                <a href="#indemnity" className="hover:underline">
                  Indemnity
                </a>
              </li>
              <li>
                <a href="#misc" className="hover:underline">
                  Miscellaneous
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        {/* Content */}
        <article className="prose max-w-none prose-neutral md:prose-lg leading-relaxed">
          <p id="intro">
            Please read these terms carefully and keep a copy of them for your
            reference. Please also note that there may be specific terms or
            conditions applicable to you as a user in a given jurisdiction, as
            detailed below. Please refer to our Privacy Notice, for information
            about how we collect, use, share and otherwise process information
            about you.
          </p>

          <section aria-labelledby="agreement" className="scroll-mt-24">
            <h2 id="agreement">Agreement to Terms</h2>
            <p>
              These Terms of Service (“Terms”) are a binding contract between
              you, an individual user or site visitor, whether personally or on
              behalf of an entity (“user,” “you,” “your”) and the Monaco
              Protocol Foundation, a Gibraltar Foundation (the “Foundation,”
              “we,” “us” or “our”), concerning use of the Foundation&apos;s
              services (the “Service”), including the www.monacoprotocol.xyz
              website as well as any other media form, media channel, or mobile
              website related, linked, or otherwise connected thereto
              (collectively, the “Site”).{" "}
              <strong>BY ACCESSING OR USING THE SERVICE, YOU AGREE</strong> that
              you have read, understood, and agree to be bound by the Terms. If
              you do not agree, please do not use the Service or Site.
            </p>
          </section>

          <section aria-labelledby="scope" className="scroll-mt-24">
            <h2 id="scope">Scope of Service</h2>
            <p>
              Currently, the Foundation maintains and operates the Site as a
              portal for news, information, and updates about the Monaco
              Protocol and its ecosystem. For the avoidance of doubt, the
              Foundation does not control the Monaco Protocol and cannot control
              activity and data on the Monaco Protocol, the activities of
              persons who develop and use applications on the Monaco Protocol,
              the validation of transactions on the Monaco Protocol, or use of
              the Monaco Protocol. The Monaco Protocol is a permissionless,
              open-source protocol deployed on the Solana Network and is
              dependent on the Solana Network and its validators to process
              transactions on the blockchain.
            </p>
          </section>

          <section aria-labelledby="changes" className="scroll-mt-24">
            <h2 id="changes">Changes to these Terms or the Service</h2>
            <p>
              We may update the Terms from time to time in our sole discretion.
              If we do, we&apos;ll let you know by posting the updated Terms on
              the Site, and/or may also send other communications. It&apos;s
              important that you review the Terms whenever we update them, or
              you use the Service. If you continue to use the Service after we
              have posted updated Terms, it means that you accept and agree to
              the changes. If you don&apos;t agree to be bound by the changes,
              you may not use the Service anymore. Because our Service are
              evolving over time, we may change or discontinue all or any part
              of the Service, at any time and without notice, at our sole
              discretion.
            </p>
          </section>

          <section aria-labelledby="eligibility" className="scroll-mt-24">
            <h2 id="eligibility">Who May Use the Service?</h2>
            <p>
              The information provided on the Site is not intended for
              distribution to or use by any person or entity in any jurisdiction
              or country where such distribution or use would be contrary to law
              or regulation or which would subject us to any registration
              requirement within such jurisdiction or country. Accordingly,
              those persons who choose to access the Site from other locations
              do so on their own initiative and are solely responsible for
              compliance with local laws, if and to the extent local laws are
              applicable.
            </p>
            <p>
              The Service is intended for users who are at least 18 years old.
              You agree that by using the Site and the Service you are at least
              18 years of age or accessing the Service under the supervision of
              a parent or guardian, and you are legally able to enter into a
              contract. If you are a parent or legal guardian of a user under
              the age of 18 (or the age of legal majority), you agree to be
              fully responsible for the acts or omissions of such user in
              relation to the Service. If you use the Service on behalf of
              another person or entity, (a) all references to “you” throughout
              the Terms will include that person or entity, (b) you represent
              that you are authorized to accept these Terms on that
              person&apos;s or entity&apos;s behalf, and (c) in the event you or
              the person or entity violates these Terms, the person or entity
              agrees to be responsible to us.
            </p>
          </section>

          <section aria-labelledby="license" className="scroll-mt-24">
            <h2 id="license">Scope of License to Users</h2>
            <p>
              The Service is licensed, not sold, to you for use only under the
              terms of the Terms, subject to your complete and ongoing
              compliance with the terms and conditions of the Terms. The
              Foundation hereby grants you a personal, limited, revocable,
              non-transferable license to access and use the Service solely for
              your own use. You may not modify, alter, reproduce, or distribute
              the Service. You may not directly rent, lease, lend, sell,
              redistribute or sublicense the Service. You may not copy,
              decompile, reverse engineer, disassemble, attempt to derive the
              source code of, modify, or create derivative works of any portion
              of the Service (except as prohibited by law), nor attempt to
              disable or circumvent any security or other technological measure.
              If you breach these license restrictions, you may be subject to
              prosecution, damages, and denial of access to the Service.
            </p>
          </section>

          <section aria-labelledby="termination" className="scroll-mt-24">
            <h2 id="termination">Termination</h2>
            <p>
              We may suspend or terminate your access to and use of the Service,
              at our sole discretion, at any time and without notice to you.
              Upon any termination, discontinuation or cancellation of the
              Service, any section of these Terms capable or intended by their
              nature to survive, will survive. If we terminate or suspend your
              access to the Site for any reason, you are prohibited from
              attempting to access the Site under your name, a fake or borrowed
              name, or the name of any third party, even if you may be acting on
              behalf of the third party. We also reserve the right to pursue
              civil, criminal, and injunctive remedies.
            </p>
          </section>

          <section aria-labelledby="prohibited" className="scroll-mt-24">
            <h2 id="prohibited">Prohibited Activities</h2>
            <ul className="list-disc pl-6">
              <li>
                Systematically retrieve data or content to create a database
                without written permission.
              </li>
              <li>
                Make any unauthorized use of the Service (e.g., harvesting
                emails, fake accounts).
              </li>
              <li>
                Circumvent or interfere with security-related features;
                unauthorized framing/linking.
              </li>
              <li>
                Trick, defraud, or mislead us or other users; misuse support
                channels.
              </li>
              <li>
                Any automated use (bots, scrapers, scripts) or data-mining
                tools.
              </li>
              <li>Interfere with or burden the Site, networks, or services.</li>
              <li>Impersonate others or harass/abuse other persons.</li>
              <li>
                Use the Service to compete with us or for revenue-generating
                endeavors not approved by us.
              </li>
              <li>
                Reverse engineer or adapt the Site&apos;s software; remove
                notices.
              </li>
              <li>
                Upload malware or passive tracking mechanisms (e.g., web bugs)
                to interfere with use.
              </li>
              <li>
                Distribute hate speech/explicit content or otherwise harm the
                Service/users.
              </li>
              <li>
                Copy, publicly perform/display, or modify our Service without
                permission.
              </li>
              <li>
                Infringe IP or use the Service in violation of applicable laws
                or regulations.
              </li>
            </ul>
          </section>

          <section aria-labelledby="ip" className="scroll-mt-24">
            <h2 id="ip">Intellectual Property</h2>
            <p>
              The Foundation and its licensors exclusively own all right, title
              and interest in and to the Service and the Site, including all
              associated intellectual property rights. You agree not to remove
              or obscure any notices. “Monaco”, “Monaco Protocol” and our logos,
              product or service names, and the look and feel of the Service are
              trademarks and/or copyrights of the Foundation and may not be used
              without prior written permission. Other marks are the property of
              their respective owners.
            </p>
          </section>

          <section aria-labelledby="disputes" className="scroll-mt-24">
            <h2 id="disputes">Dispute Resolution</h2>
            <p>
              Any dispute, claim or controversy arising out of or relating to
              these Terms or the use of the Service will be resolved solely by
              binding, individual arbitration and not in a class, representative
              or consolidated action. The U.S. Federal Arbitration Act governs
              interpretation and enforcement. Limited exceptions apply (e.g.,
              small claims, IP injunctive relief).
            </p>
            <p>
              Arbitration will be conducted by JAMS under its applicable rules
              (Streamlined or Comprehensive). Fees are allocated per the JAMS
              Rules. The arbitrator has exclusive authority over arbitrability
              and scope.
            </p>
            <p>
              <strong>Class Action Waiver:</strong> claims may be brought only
              in an individual capacity. If unenforceable, this section is void.
            </p>
            <p>
              <strong>Severability:</strong> if any part is invalid or
              unenforceable, the rest still applies (except as above).
            </p>
          </section>

          <section aria-labelledby="law" className="scroll-mt-24">
            <h2 id="law">Governing Law & Venue</h2>
            <p>
              Any dispute arising from these Terms and your use of the Service
              will be governed by the laws of Gibraltar. Non-arbitrable disputes
              will be resolved exclusively in Gibraltar.
            </p>
          </section>

          <section aria-labelledby="disclaimer" className="scroll-mt-24">
            <h2 id="disclaimer">Disclaimer</h2>
            <p>
              THE SITE AND SERVICE ARE PROVIDED “AS-IS” AND “AS-AVAILABLE.” To
              the maximum extent permitted by law, the Foundation will not be
              liable for indirect, incidental, punitive, exemplary, special or
              consequential damages, and disclaims warranties regarding
              accuracy, security, availability, and third-party content. Your
              sole remedy is to discontinue use. Some jurisdictions do not allow
              certain exclusions, so some limitations may not apply to you.
            </p>
          </section>

          <section aria-labelledby="links" className="scroll-mt-24">
            <h2 id="links">
              Links to Third-Party Websites, Services or Resources
            </h2>
            <p>
              Third-party products and services referenced via the Service are
              not offered by the Foundation, and we are not responsible for any
              losses arising from your use of them.
            </p>
          </section>

          <section aria-labelledby="indemnity" className="scroll-mt-24">
            <h2 id="indemnity">Indemnity</h2>
            <p>
              You will indemnify and hold the Foundation and its officers,
              directors, employees and agents harmless from claims, liabilities,
              damages, losses, and costs (including reasonable legal and
              accounting fees) arising out of your use of the Service or
              violation of these Terms.
            </p>
          </section>

          <section aria-labelledby="misc" className="scroll-mt-24">
            <h2 id="misc">Miscellaneous</h2>
            <ul className="list-disc pl-6">
              <li>
                These Terms and any posted policies constitute the entire
                agreement.
              </li>
              <li>Failure to enforce any provision is not a waiver.</li>
              <li>
                We may assign our rights/obligations; you may not without
                consent.
              </li>
              <li>
                We aren&apos;t liable for causes beyond our reasonable control.
              </li>
              <li>
                If any provision is unlawful or unenforceable, the remainder
                remains in effect.
              </li>
              <li>
                No partnership, joint venture, employment or agency is created.
              </li>
              <li>
                You waive defenses based on the electronic form and lack of
                signatures.
              </li>
            </ul>
          </section>

          <section aria-labelledby="contact" className="scroll-mt-24">
            <h2 id="contact">Contact Us</h2>
            <p>
              To resolve a complaint or for information about use of the
              Service, contact:
              <a
                className="ml-1 underline"
                href="mailto:hello@monacoprotocol.xyz"
              >
                hello@monacoprotocol.xyz
              </a>
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
